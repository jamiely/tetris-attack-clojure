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
  "Creates a swap block, which represents two blocks which will change positions when the tick count has reached 0"
  {:blocks [a b]
   :ticks ticks
   :type :swap})

(defn swap-block? [{type :type}]
  (= type :swap))

(defn ticks0? [{ticks :ticks}]
  (and (not (nil? ticks))
       (zero? ticks)))

(defn blocks-swap! [[a b]]
  (let [{a-pos :position} a
        {b-pos :position} b]
    [(assoc a :position b-pos)
     (assoc b :position a-pos)]))

(defn resolve-swap-blocks [blocks]
  "Dissolves swap blocks when the ticks reach 0"
  (flatten
   (map (fn [blk]
        (if (and (swap-block? blk) (ticks0? blk))
          (blocks-swap! (get blk :blocks))
          blk))
        blocks)))

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

(defn dec-ticks [{ticks :ticks :as thing}]
  "If the thing has ticks, decrement the ticks"
  (if (nil? ticks)
    thing
    (assoc thing :ticks (- ticks 1))))

(defn step-blocks [blocks]
  (resolve-swap-blocks (map dec-ticks blocks)))

(defn step-grid [{blocks :blocks :as grid}]
  (assoc grid :blocks (step-blocks blocks)))

(defn step [game]
  "Steps a game by 1"
  (let [{grid :grid :as g} (tick game)
        new-grid (step-grid grid)]
    (step-add-line (assoc g :grid new-grid))))

