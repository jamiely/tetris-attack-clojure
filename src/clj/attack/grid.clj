(ns attack.grid
  (:require [attack.block :as blk]
            [attack.point :as pt]
            [attack.tick :as tick])
  (:use [clojure.set :only [subset?]]))

(defn empty-grid [cols]
  "Returns an empty grid"
  {:blocks []
   :rows 0
   :cols cols
   :blocks-hash {}})

(defn replace-blocks [grid replacement-blocks]
  (assoc grid :blocks (into [] replacement-blocks)))

(defn hash-blocks [{h :blocks-hash :as grid} blocks]
  (let [pos-blocks (filter #(contains? % :position) blocks)
        new-h (reduce (fn [mem {pos :position :as blk}]
                        (assoc mem pos blk)) h pos-blocks)]
    (assoc grid :blocks-hash new-h)))

(defn unhash-blocks [{h :blocks-hash :as grid} blocks]
    (let [positions (map #(get % :position) (filter #(contains? % :position) blocks))
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

(defn all-occupied-pts-without-falling [{blocks :blocks :as grid}]
  (concat (map #(get % :position)
               (all-simple-blocks grid))
          (map #(get % :into-position)
               (filter blk/swap-empty? blocks))))

(defn all-occupied-pts [{blocks :blocks :as grid}]
  (concat (all-occupied-pts-without-falling grid)
          (reduce (fn [mem {{pos :position} :block fall-pos :falling-to}]
                    (concat mem [pos fall-pos]))
                  []
                  (filter blk/falling? blocks))))

(defn occupied-at-without-falling? [grid point]
  (contains? (into #{} (all-occupied-pts-without-falling grid))
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
    (map #(pt/point (+ ox %) oy height)
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
  (let [fallers (into #{} (filter (partial should-block-fall? grid) blocks))]
    (remove-and-add-blocks grid
                           (into #{} fallers)
                           (map blk/new-falling fallers))))

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
        to-add (flatten (map #(blk/blocks-swap! (get % :blocks))
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

(defn resolve-matches [should-resolve-matches? grid]
  (if should-resolve-matches? 
    (let [matches (match-sets grid)]
      (resolve-disappear-blocks (disappear-blocks-from-match-set grid matches)))
    grid))

(defn resolve-grid [grid should-resolve-matches?]
  (->> grid
       step-blocks
       resolve-swaps
       create-falling-blocks
       (resolve-matches should-resolve-matches?)
       ;; create falling blocks BEFORE resolving existing once
       ;; so that we provide an opportunity for the player to
       ;; swap out a block that has temporarily finished falling
       ;; (1-space)
       resolve-falling-blocks
       resolve-swap-empty-blocks))

