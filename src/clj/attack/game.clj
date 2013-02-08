(ns attack.game)

; a point
(defn point [x y]
  [x y])

(defn simple-block [pos type]
  "Returns a simple block, not to be confused with non-basic blocks such as garbage blocks"
  {:type type
   :position pos})

;; complex blocks must be all of a single type
(defn complex-block[blocks]
  "Creates a complex block given a passed sequence of blocks"
  {:blocks blocks})

(defn block-types []
  "Lists available block types"
  [:orange :yellow :pink :cyan :green :purple :red])

(defn rand-block-type []
  "Returns a random block type"
  (rand-nth (block-types)))

(defn swap-block [a b ticks]
  {:blocks [a b]
   :ticks ticks
   :type :swap})

(defn resolve-swap-blocks [blocks]
  "Dissolved swap blocks when the ticks reach 0"
  blocks)

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
    {:grid (default-grid cols rows)
     ;; everything is based on the clock
     :clock 0
     ;; add a line after this many ticks
     :add-line-ticks 60}))

(defn tick [{clock :clock :as game}]
  "Increments the clock of a game"
  (assoc game :clock (+ clock 1)))

(defn mod-clock [{clock :clock} operand]
  (= 0 (mod clock operand)))

(defn step-add-line [{add-line-ticks :add-line-ticks :as game}]
  (if (mod-clock game add-line-ticks)
    (assoc game :grid (grid-add-block-row (get game :grid)))
    game))

(defn step [game]
  "Steps a game by 1"
  (step-add-line
   (tick game))
  )
