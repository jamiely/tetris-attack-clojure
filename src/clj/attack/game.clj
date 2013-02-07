(ns attack.game)

; a point
(defn point [x y]
  [x y])

; a basic block, not to be confused with non-basic blocks
; such as garbage blocks
(defn simple-block [pos type]
  {:type type
   :position pos})

; complex blocks must be all of a single type
(defn complex-block[blocks]
  {:blocks blocks})

(defn grid [blocks last-row]
  {:blocks blocks :last-row last-row})

(defn block-types []
  [:orange :yellow :pink :cyan :green :purple :red])

(defn x-range []
  (range 1 7))

(defn grid-add-block-row [{blocks :blocks last-row :last-row}]
  (let [types (block-types)
        new-last (+ last-row 1)
        new-block (fn [x]
                    (simple-block (point x new-last) (rand-nth types)))
        new-blocks (map new-block (x-range))]
    (grid (concat blocks new-blocks) new-last)))

(defn default-grid []
  (let [types (block-types)
        xs (x-range)]
    (grid (for [x xs
                y (range 1 7)]
            (simple-block (point x y) (rand-nth types))) (reduce max xs))))
  
(defn default-game []
  {:grid (default-grid)})

   