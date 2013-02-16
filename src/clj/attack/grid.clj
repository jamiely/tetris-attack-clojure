(ns attack.grid
  (:require [attack.block :as blk]
            [attack.point :as pt]
            [attack.tick :as tick])
  (:use [clojure.set :only [subset?]]))

(defn empty-grid [cols]
  "Returns an empty grid"
  {:blocks []
   :rows 0
   :cols cols})

(defn swap-empty [{blocks :blocks :as grid} a new-pos]
  (let [new-block (blk/new-swap-empty a new-pos)
        new-blocks (cons new-block (remove #{a} blocks))]
    (assoc grid :blocks new-blocks)))

(defn swap-blocks [{blocks :blocks :as grid} a b]
  "Replaces the passed blocks in the grid with a swap block"
  (let [swap-blk (blk/new-swap a b)
        new-blocks (cons swap-blk (remove #{a b} blocks))]
    (assoc grid :blocks new-blocks)))

(defn block-at [{blocks :blocks} point]
  (first (filter (fn [{pt :position}]
                   (and (not (nil? pt))
                        (= pt point)))
                 blocks)))

(defn all-simple-blocks [{blocks :blocks}]
  (concat (filter blk/simple? blocks)
          (flatten (map (fn [{blocks :blocks}]
                          (if (nil? blocks)
                            []
                            blocks))
                        blocks))))

(defn all-occupied-pts [{blocks :blocks :as grid}]
  (concat (map #(get % :position)
               (all-simple-blocks grid))
          (map #(get % :into-position)
               (filter blk/swap-empty? blocks))
          (map #(get % :falling-to)
               (filter blk/falling? blocks))))

(defn occupied-at? [grid point]
  (not (empty? (filter (fn [pt]
                         (and (not (nil? pt))
                              (= pt point)))
                       (all-occupied-pts grid)))))

(defn add-row [{blocks :blocks
                  rows :rows
                  cols :cols}]
  (let [new-last (+ rows 1)
        new-block (fn [x]
                    (blk/new-simple (pt/point x new-last) (blk/rand-type)))
        new-blocks (map new-block (range 1 (+ cols 1)))]
    {:blocks (concat blocks new-blocks)
     :rows new-last
     :cols cols}))

(defn default [cols rows]
  (let [xs (range 1 (+ cols 1))]
    {:blocks (for [x xs
                y (range 1 (+ rows 1))]
               (blk/new-simple (pt/point x y) (blk/rand-type)))
     :cols cols
     :rows rows}))

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
    (let [fn-remove? (partial contains? (into #{} blocks-to-disappear))
        new-grid-blocks (cons (blk/new-disappear blocks-to-disappear)
                              (remove fn-remove? grid-blocks))]
      (assoc grid :blocks new-grid-blocks))))

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


(defn remove-blocks [{blocks :blocks :as grid} blocks-to-remove]
  (let [bs-remove (into #{} blocks-to-remove)]
    (assoc grid :blocks (remove #(contains? bs-remove %) blocks))))

(defn remove-blocks-with-pred [{blocks :blocks :as grid} pred]
  "Removes blocks from the passed grid filtered using the passed predicate"
  (remove-blocks grid (filter pred blocks)))

(defn position-valid [{rows :rows cols :cols :as grid} [x y]]
  "Determines whether the passed position is valid relative to the grid"
  (and (< 0 x)
       (< 0 y)
       (>= rows y)
       (>= cols x)))

(defn check-and-create-falling-block [grid {pos :position :as block}]
  "Determines whether the passed block should be falling, and if so, returns a falling block"
  (if (or (nil? pos) (not (blk/simple? block)))
    block
    (let [pt-below (pt/below pos)]
      (if (position-valid grid pt-below)
        (if (occupied-at? grid pt-below)
          block
          (blk/new-falling block))
        block))))

(defn create-falling-blocks [{blocks :blocks :as grid}]
  "Figures out whether a block in the grid should be falling, and if so, converts it into a falling block"
  (assoc grid :blocks (map (partial check-and-create-falling-block grid)
                           blocks)))

(defn resolve-swap-empty-blocks [{blocks :blocks :as grid}]
  (assoc grid :blocks (map blk/resolve-swap-empty blocks)))

(defn resolve-falling-blocks [{blocks :blocks :as grid}]
  "Changes blocks which have finished falling in the grid into regular blocks"
  (assoc grid :blocks (map blk/resolve-falling blocks)))

(defn resolve-disappear-blocks [grid]
  (remove-blocks-with-pred grid #(and (blk/disappear? %)
                                       (tick/ticks0? %))))

(defn resolve-matches [grid]
  (let [matches (match-sets grid)]
    ;;(.log js/console (str "Matches " matches))
    (resolve-disappear-blocks (disappear-blocks-from-match-set grid matches))))
    ;;grid))

(defn resolve-grid [grid]
  (->> grid
       resolve-matches
       resolve-falling-blocks
       resolve-swap-empty-blocks
       create-falling-blocks))
