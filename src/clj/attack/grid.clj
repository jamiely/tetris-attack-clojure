(ns attack.grid
  (:require [attack.block :as blk]
            [attack.point :as pt]
            [attack.tick :as tick]
            [attack.compat :as compat])
  (:use [clojure.set :only [union subset? intersection]]))

(declare fallers)

(defn empty-grid [cols]
  "Returns an empty grid"
  {:blocks []
   :rows 0
   :cols cols
   :blocks-hash {}})

(defn replace-blocks [grid replacement-blocks]
  (assoc grid :blocks (into [] replacement-blocks)))

(defn block-points [block]
  "Returns all of the points that a block occupies. This is mostly relevant for multi-cell blocks such as garbage blocks"
  (cond (blk/garbage? block) (blk/garbage-block-points block)
        (or (blk/swap? block)
            (blk/disappear? block)) (reduce concat (map block-points (:blocks block)))
        (blk/swap-empty? block) (cons (:into-position block)
                                      (block-points (:block block)))
        (blk/dissolve? block) (reduce concat (map block-points (:pending-blocks block)))
        (contains? block :position) [(:position block)]
        :else []))

(defn hash-blocks [{blocks-hash :blocks-hash :as grid} blocks]
  (let [new-hash (reduce (fn [mem blk]
                           (reduce (fn [in-mem pos]
                                     (assoc in-mem pos blk))
                                   mem
                                   (block-points blk)))
                      blocks-hash
                      blocks)]
    (assoc grid :blocks-hash new-hash)))

(defn unhash-blocks [{h :blocks-hash :as grid} blocks]
    (let [positions (reduce concat (map block-points blocks))
          new-h (reduce (fn [mem pos]
                          (dissoc mem pos)) h positions)]
    (assoc grid :blocks-hash new-h)))

(defn add-blocks [{blocks :blocks :as grid} new-blocks]
  "Adds a set of blocks to the grid"
  (-> grid
      (replace-blocks (concat blocks new-blocks))
      (hash-blocks new-blocks)))

(defn remove-blocks [{blocks :blocks :as grid} blks-to-remove]
  "Remove blocks must be a set of blocks to remove from the grid"
  (-> grid
      (replace-blocks (remove blks-to-remove blocks))
      (unhash-blocks blks-to-remove)))

(defn remove-and-add-blocks [grid blocks-to-remove blocks-to-add]
  (-> grid
      (remove-blocks blocks-to-remove)
      (add-blocks blocks-to-add)))

(defn all-simple-blocks [{blocks :blocks}]
  (concat (filter blk/simple? blocks)
          (flatten (map (fn [{blocks :blocks}]
                          (if (nil? blocks)
                            []
                            blocks))
                        blocks))))

(defn simple-blocks-match? [old new]
  (let [blk-set #(into #{} (all-simple-blocks %))
        old-set old
        new-set new]
    (= old-set new-set)))

(defn garbage-blocks [{blocks :blocks :as grid}]
  (filter blk/garbage? blocks))

(defn garbage-block-points [grid]
  (reduce (fn [all blk]
            (concat all (blk/garbage-block-points blk)))
          []
          (garbage-blocks grid)))

(defn garbage-block-points-set [grid]
  (into #{} (garbage-block-points grid)))

(defn swap-empty-points [{blocks :blocks :as grid}]
  (map #(:into-position %)
       (filter blk/swap-empty? blocks)))

(defn swap-empty-points-set [grid]
  (into #{} (swap-empty-points grid)))

(defn simple-block-points [grid]
  (map #(:position %) (all-simple-blocks grid)))

(defn simple-block-points-set [grid]
  (into #{} (simple-block-points grid)))

(defn all-occupied-pts-without-falling [{blocks :blocks :as grid}]
  (concat (simple-block-points grid)
          (swap-empty-points grid)
          (garbage-block-points grid)))

(defn all-occupied-pts [{blocks :blocks :as grid}]
  (concat (all-occupied-pts-without-falling grid)
          (reduce (fn [mem {{pos :position} :block fall-pos :falling-to}]
                    (concat mem [pos fall-pos]))
                  []
                  (filter blk/falling? blocks))))

(defn all-occupied-pts-without-falling-set [grid]
  (union (simple-block-points-set grid)
         (swap-empty-points-set grid)
         (garbage-block-points-set grid)))

(defn cache-occupied-blocks! [{clock :cache-clock :as grid}]
  (let [fn-raw #(all-occupied-pts-without-falling-set grid)
        ; @todo there is a potential bug here if the game has not passed a clock value in
        fn-cache (fn [] (assoc grid :cache-occupied {:clock clock
                                                     :occupied (fn-raw)}))
        fn-clock (fn [] (:clock (:cache-occupied grid)))]
        (if (or (nil? clock) ; the game has not annotated the grid with the clock tick
                (nil? (:cache-occupied grid)) ; no cache data available
                (not= clock (fn-clock))) ; the clock tick is equal
          (fn-cache)
          grid)))

(defn cached-occupied-blocks [grid]
  "Returns the cached occupied blocks associated with the current grid."
  (let [gr (cache-occupied-blocks! grid)]
    (:occupied (:cache-occupied gr))))

(defn occupied-at-without-falling? [grid point]
  (contains? (cached-occupied-blocks grid)
             point))

(defn occupied-at? [grid point]
  (contains? (into #{} (all-occupied-pts grid))
             point))

(defn line-count [grid]
  (count (distinct (map (fn [[_ y]] y)
                        (all-occupied-pts grid)))))

(defn swap-empty [{blocks :blocks :as grid} replace-block new-pos]
  "Creates a new swap-empty block using the passed block"
  (if (occupied-at? grid new-pos)
    grid
    (let [new-block (blk/new-swap-empty replace-block new-pos)]
      (remove-and-add-blocks grid
                             #{replace-block}
                             #{new-block}))))

(defn swap-blocks [{blocks :blocks :as grid} a b]
  "Replaces the passed blocks in the grid with a swap block"
  (if (every? blk/simple? [a b])
    (let [swap-blk (blk/new-swap a b)]
      (remove-and-add-blocks grid #{a b} #{swap-blk}))
    grid))

(defn block-at [{h :blocks-hash} point]
  (get h point))

(defn add-row [{blocks :blocks
                rows :rows
                cols :cols
                :as grid}]
  (let [new-last (+ rows 1)
        new-block (fn [x]
                    (blk/new-simple (pt/point x new-last) (blk/rand-type)))
        new-blocks (map new-block (range 1 (+ cols 1)))]
    (-> grid
        (add-blocks new-blocks)
        (assoc :rows new-last))))

(defn default [cols rows]
  (let [grid (empty-grid cols)
        fns (repeat rows add-row)]
    (reduce (fn [g func] (func g)) grid fns)))

(defn block-in-direction [grid {pos :position} dir]
  (block-at grid (pt/point-add pos dir)))

(defn matches-in-direction-matching-block-with-quota [grid dir blk]
  (let [next-blk (block-in-direction grid blk dir)
        recurse? (and (not (nil? next-blk)) (blk/same-type? blk next-blk))]
    (if recurse?
      (cons blk (matches-in-direction-matching-block-with-quota grid dir next-blk))
      [blk])))

(defn find-matches-with-grid-block-in-directions [grid blk dirs]
  "Returns all the matches in the grid using the block as the origin"
  (let [fn-match-dir #(matches-in-direction-matching-block-with-quota grid % blk)
        matches (map fn-match-dir dirs)
        length-matches (filter #(<= 3 (count %)) matches)
        flat-matches (flatten length-matches)]
    flat-matches))

(defn find-matches-with-grid-block [grid blk]
  "Returns all the matches in the grid using the block as the origin"
  (let [fn-find #(find-matches-with-grid-block-in-directions grid blk %)
        horizontal (fn-find (pt/horizontal))
        vertical (fn-find (pt/vertical))
        matches [horizontal vertical]]
    (flatten (filter (comp not empty?) matches))))

(defn is-not-equal-subset? [set1 set2]
  (and (subset? set1 set2) (not= set1 set2)))

(defn isnt-subset-of-another? [set1 large-set]
  (empty? (filter (partial is-not-equal-subset? set1)
                  large-set)))

(defn condense-match-set [match-set]
  (reduce (fn [condensed mset]
            (if (isnt-subset-of-another? mset match-set)
              (cons condensed mset)
              condensed)) match-set))

(defn to-superset [ orig-set ]
  "http://stackoverflow.com/questions/8162149/remove-all-the-subsets-in-a-list-of-sets"
  (let [coll (into '() orig-set)]
    (loop [result () coll coll]
      (if (empty? coll) result
          (let  [x  (first coll)
                 xs (rest coll)]
            (if (some #(clojure.set/subset? x %) xs) 
              (recur result xs)
              (recur (cons x result) xs)))))))

(defn condense-match-set2 [ match-set ]
  (into #{} (to-superset match-set)))

(defn disappear-blocks [{grid-blocks :blocks :as grid} blocks-to-disappear]
  "Creates a disappear-type block using the passed blocks and inserts it into a new grid"
  (if (empty? blocks-to-disappear)
    grid
    (remove-and-add-blocks grid
                           (into #{} blocks-to-disappear)
                           #{(blk/new-disappear blocks-to-disappear)})))

(defn reduce-matches [grid matches block]
  (cons (find-matches-with-grid-block grid block)
        matches))

(defn match-sets [{all-blocks :blocks :as grid}]
  "Returns a sequence (probably a set) of match sets. Only simple blocks may be matched"
  (let [simple-blocks (filter blk/simple? all-blocks)
        set-vectors (reduce (partial reduce-matches grid) [] simple-blocks)
        non-nil-set-vectors (filter (comp not nil?) set-vectors)
        sets (map #(into #{} %) non-nil-set-vectors)
        filtered-sets (filter (comp not empty?) sets)]
    (condense-match-set2 (into #{} filtered-sets))))

(defn disappear-blocks-from-match-set [grid match-set]
  (disappear-blocks grid (flatten (map (partial into '())
                                       match-set))))


(defn remove-blocks-with-pred [{blocks :blocks :as grid} pred]
  "Removes blocks from the passed grid filtered using the passed predicate"
  (remove-blocks grid (into #{} (filter pred blocks))))

(defn position-valid [{rows :rows cols :cols :as grid} [x y]]
  "Determines whether the passed position is valid relative to the grid"
  (and (< 0 x)
       (< 0 y)
       (>= rows y)
       (>= cols x)))

(defn should-position-fall? [grid pos]
  (let [pt-below (pt/below pos)]
    (if (position-valid grid pt-below)
      (if (occupied-at-without-falling? grid pt-below)
        false
        true)
      false)))

(defn garbage-block-bottom-points [{[ox oy] :position
                                    height :height
                                    length :length :as garbage-block}]
  (if (blk/garbage? garbage-block)
    (map #(pt/point (+ ox %) oy)
         (range 0 length))
    []))

(defn should-garbage-block-fall? [grid garbage-block]
  "Determines whether or not a garbage block should fall"
  (if (blk/garbage? garbage-block)
    (let [bottom-points (garbage-block-bottom-points garbage-block)]
      (every? #(true? (should-position-fall? grid %))
              bottom-points))
    false))

(defn should-simple-block-fall? [grid {pos :position :as block}]
  "Determines whether the passed block should be falling, and if so, returns a falling block"
  (if (or (nil? pos) (not (blk/simple? block)))
    false
    (should-position-fall? grid pos)))

(defn should-block-fall? [grid block]
  "Determines whether the passed block should be falling, and if so, returns a falling block"
  (or (should-simple-block-fall? grid block)
      (should-garbage-block-fall? grid block)))

(defn create-falling-blocks [{blocks :blocks :as grid}]
  "Figures out whether a block in the grid should be falling, and if so, converts it into a falling block"
  (let [falling-blocks (into #{} (fallers grid))]
    (remove-and-add-blocks grid
                           falling-blocks
                           (map blk/new-falling falling-blocks))))

(defn resolve-swap-empty-blocks [{blocks :blocks :as grid}]
  (let [to-resolve (into #{} (filter blk/should-resolve-swap-empty? blocks))]
    (remove-and-add-blocks grid
                           (into #{} to-resolve)
                           (map blk/resolve-swap-empty to-resolve))))

(defn resolve-falling-blocks [{blocks :blocks :as grid}]
  "Changes blocks which have finished falling in the grid into regular blocks"
  (let [to-resolve (into #{} (filter blk/should-resolve-falling? blocks))]
    (remove-and-add-blocks grid
                           (into #{} to-resolve)
                           (map blk/resolve-falling to-resolve))))

(defn resolve-disappear-blocks [grid]
  (remove-blocks-with-pred grid #(and (blk/disappear? %)
                                       (tick/ticks0? %))))

(defn resolve-swaps [{blocks :blocks :as grid}]
  "Dissolves swap blocks when the ticks reach 0"
  (let [to-resolve (filter blk/should-resolve-swap? blocks)
        to-add (flatten (map #(blk/blocks-swap! (:blocks %))
                             to-resolve))]
    (remove-and-add-blocks grid
                           (into #{} to-resolve)
                           to-add)))

(defn step-blocks [{blocks :blocks :as grid}]
  "Resolves ticks for each block"
  (let [have-ticks (filter #(contains? % :ticks) blocks)
        ticked (map tick/dec-ticks have-ticks)]
    (remove-and-add-blocks grid
                           (into #{} have-ticks)
                           ticked)))

(defn resolve-dissolve-blocks [{blocks :blocks :as grid}]
  "Handles resolution of dissolve blocks"
  (let [dissolves (filter blk/dissolve? blocks)
        ready (filter tick/ticks0? dissolves)
        new-grid (reduce (fn [g blk]
                           (remove-and-add-blocks g
                                                  #{blk}
                                                  (blk/resolve-dissolve blk)))
                         grid
                         ready)]
    new-grid))

(defn dissolve-blocks-from-garbage-blocks [grid blocks]
  "Turns the passed garbage blocks into 'dissolve' blocks, which transition
   a garbage block into a bunch of simple blocks"

  (into #{} (map blk/new-dissolve
                 (filter blk/garbage? blocks))))

(defn garbage-block-boundary-points [grid {[ox oy] :position
                                           height :height
                                           length :length :as block}]
  "Returns the points that border the garbage block"
  (let [x-min (- ox 1)
        x-max (+ ox length)
        y-max (+ oy 1)
        y-min (- oy height)
        top-and-bottom (for [x (range ox x-max)
                             y [y-min y-max]]
                         (pt/point x y))
        left-and-right (for [x [x-min x-max]
                             y (range oy y-max 1)]
                         (pt/point x y))]
    (into #{} (filter (partial position-valid grid)
                      (concat top-and-bottom
                              left-and-right)))))
                          

(defn matchset-points [matches]
  "Returns the points associated with all of the points of the match set"
  (into #{} (reduce (fn [res m-set]
                      (concat res (map #(:position %) m-set)))
                    []
                    matches)))

(defn garbage-blocks-adjacent-to-matches [{blocks :blocks :as grid}
                                          matches]
  "Given a grid and a set of matches, determines the garbage blocks which are adjacent to any of the blocks"
  (let [matchset-pts (matchset-points matches)
        garbage-blocks (filter blk/garbage? blocks)]
    (into #{} (filter #((comp not empty?) (intersection (garbage-block-boundary-points grid %)
                                                        matchset-pts))
                      garbage-blocks))))

(defn resolve-garbage-blocks-with-match-sets [grid matches]
  "Handles resolution of garbage blocks relative to any match sets"
  (let [garbage-blocks (garbage-blocks-adjacent-to-matches grid matches)
        dissolve-blocks (dissolve-blocks-from-garbage-blocks grid garbage-blocks)]
  (remove-and-add-blocks grid garbage-blocks dissolve-blocks)))

(defn resolve-matches [should-resolve-matches? grid]
  (if should-resolve-matches? 
    (let [matches (match-sets grid)]
      (-> grid
          (disappear-blocks-from-match-set matches)
          resolve-disappear-blocks
          (resolve-garbage-blocks-with-match-sets matches)))
    grid))

(defn resolve-grid [grid should-resolve-matches?]
  (->> grid
       step-blocks
       resolve-swaps
       create-falling-blocks
       (resolve-matches should-resolve-matches?)
       resolve-dissolve-blocks
       ;; create falling blocks BEFORE resolving existing once
       ;; so that we provide an opportunity for the player to
       ;; swap out a block that has temporarily finished falling
       ;; (1-space)
       resolve-falling-blocks
       resolve-swap-empty-blocks))

(defn block-can-fall? [block]
  (or (blk/simple? block)
      (blk/garbage? block)))

(defn blocks-that-can-fall [grid]
  (filter block-can-fall? (:blocks grid)))

(def grid-bottom-row-index-blocks blocks-that-can-fall)

(defn grid-block-bottom-y [block]
  (cond (blk/garbage? block) (let [{[x y] :position height :height} block]
                               (- (+ y height) 1))
        (blk/simple? block) (let [{[x y] :position} block] y)
        :else nil))

(defn grid-bottom-row-index [grid]
  "Returns the index of the bottom-most block in the grid"
  (->> grid
       grid-bottom-row-index-blocks
       (map grid-block-bottom-y)
       (remove nil?)
       (apply max)))

(defn fallers-in-bottom-row? [bottom-index block]
  "Accepts a function that returns the bottom row of the grid, and a block to test."
  (let [y (grid-block-bottom-y block)]
    (if (nil? y)
      false
      (= y bottom-index))))

(defn fallers-block-below [grid block]
  "Returns the blocks below the passed block"
  (let [pts-fun (cond (blk/simple? block) #(vector (:position %))
                      (blk/garbage? block) garbage-block-bottom-points
                      (blk/swap? block) (fn [blk]
                                          (reduce concat
                                                  (map (partial fallers-block-below grid)
                                                       (:blocks blk))))
                      (blk/swap-empty? block) (fn [blk]
                                                (cons (:into-position blk)
                                                      (fallers-below-block grid (:block blk))))
                      :else (fn [_] []))]
        (remove nil? (map (comp (partial block-at grid) pt/below)
                          (pts-fun block)))))

(def fall-map-recur
  "Returns a memoized recursive function that takes a block and determines if it is falling."
  (memoize (fn [grid bottom-index block]
             (cond (nil? block) false
                   (false? (block-can-fall? block)) false
                   (fallers-in-bottom-row? bottom-index block) false
                   :else (every? (partial fall-map-recur grid bottom-index)
                                 (fallers-block-below grid block))))))

(defn make-is-falling2 [grid]
  (let [bottom-index (grid-bottom-row-index grid)]
    (partial fall-map-recur grid bottom-index)))

(defn make-is-falling [grid]
  "Returns a memoized recursive function that takes a block and determines if it is falling."
  (let [bottom-index (grid-bottom-row-index grid)]
    (with-local-vars
        [fall-map (memoize (fn [block]
                             (cond (nil? block) false
                                   (false? (block-can-fall? block)) false
                                   (fallers-in-bottom-row? bottom-index block) false
                                   :else (let [blocks-below (fallers-block-below grid block)]
                                           (if (empty? blocks-below)
                                             true
                                             (every? fall-map blocks-below))))))]
      (.bindRoot fall-map @fall-map)
      @fall-map)))

(defn fallers-falling-map-all [grid]
  "Returns a map showing each block and its fall status"
  (let [f (make-is-falling2 grid)
        blocks (blocks-that-can-fall grid)]
    (reduce #(assoc %1 %2 (f %2)) {} blocks)))

(defn fallers [grid]
  "Returns blocks that are falling. Only works with simple blocks"
  (let [fallers-map (fallers-falling-map-all grid)
        fs (for [[block value] fallers-map
                 :when (true? value)]
             block)]
    ;; (compat/log "fallers!!")
    ;; (compat/log fs)
    ;; (when-not (empty? fs)
    ;;   (compat/log "map!!")
    ;;   (compat/log fallers-map))
    fs))
      
  