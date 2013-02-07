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

(defn block-types []
  [:orange :yellow :pink :cyan :green :purple :red])

(defn grid-add-block-row [{blocks :blocks
                           rows :rows
                           cols :cols}]
  (let [types (block-types)
        new-last (+ rows 1)
        new-block (fn [x]
                    (simple-block (point x new-last) (rand-nth types)))
        new-blocks (map new-block (range 1 (+ cols 1)))]
    {:blocks (concat blocks new-blocks)
     :rows new-last
     :cols cols}))

(defn default-grid [cols rows]
  (let [types (block-types)
        xs (range 1 (+ cols 1))]
    {:blocks (for [x xs
                y (range 1 (+ rows 1))]
               (simple-block (point x y) (rand-nth types)))
     :cols cols
     :rows rows}))
  
(defn default-game []
  (let [rows 6
        cols 6]
    {:grid (default-grid cols rows)}))

   