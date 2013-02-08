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

(defn rand-block-type []
  (rand-nth (block-types)))

(defn grid-empty [cols]
  "Returns an empty grid"
  {:blocks []
   :rows 0
   :cols cols})

(defn grid-add-block-row [{blocks :blocks
                           rows :rows
                           cols :cols}]
  (let [new-last (+ rows 1)
        new-block (fn [x]
                    (simple-block (point x new-last) (rand-block-type)))
        new-blocks (map new-block (range 1 (+ cols 1)))]
    {:blocks (concat blocks new-blocks)
     :rows new-last
     :cols cols}))

(defn default-grid [cols rows]
  (let [xs (range 1 (+ cols 1))]
    {:blocks (for [x xs
                y (range 1 (+ rows 1))]
               (simple-block (point x y) (rand-block-type)))
     :cols cols
     :rows rows}))
  
(defn default-game []
  (let [rows 6
        cols 6]
    {:grid (default-grid cols rows)}))

   