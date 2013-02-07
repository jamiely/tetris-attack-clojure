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

(defn grid [blocks]
  {:blocks blocks})

(defn block-types []
  [:orange :yellow :pink :cyan :green :purple :red])

(defn default-grid []
  (let [types (block-types)]
    (grid (for [row (range 1 7)
                col (range 1 7)]
            (simple-block (point row col) (rand-nth types))))))
  
(defn default-game []
  {:grid (default-grid)})

   