(ns attack.block
  (:require [attack.tick :as tick]
            [attack.point :as pt]))

(defn new-simple [pos type]
  "Returns a simple block, not to be confused with non-basic blocks such as garbage blocks"
  {:type type
   :position pos})

;; complex blocks must be all of a single type
(defn new-complex[blocks]
  "Creates a complex block given a passed sequence of blocks"
  {:blocks blocks})

(defn new-swap [a b ticks]
  "Creates a swap block, which represents two blocks which will change positions when the tick count has reached 0"
  {:blocks [a b]
   :ticks ticks
   :type :swap})

(defn new-disappear [blocks]
  (merge (new-complex blocks)
         {:ticks 20
          :type :disappear}))

(defn falling-block-default-ticks [] 20)

(defn new-falling [{pos :position :as block}]
  "Takes a single block and returns a falling block."
  {:type :falling
   :block block
   :ticks (falling-block-default-ticks)
   :falling-from pos
   :falling-to (pt/below pos)
   })
    
(defn simple? [blk]
  (contains? blk :position))

(defn compare-type? [{block-type :type} compare-type]
  (= block-type compare-type))

(defn falling? [blk] (compare-type? blk :falling))

(defn disappear? [block]
  (compare-type? block :disappear))

(defn unwrap-falling [{inner-block :block fall-to :falling-to :as block}]
  "Unwraps a falling block, returning the inner block with its updated position"
  (if (falling? block)
    (assoc inner-block :position fall-to)
    block))

(defn resolve-falling [{ticks :ticks :as block}]
  "Unwraps a falling block if its ticks are 0"
  (if (tick/ticks0? block)
    (unwrap-falling block)
    (block)))

(defn types []
  "Lists available block types"
  ["#996633" "#FFFF00" "#FF6699" "#00FFFF" "#00FF00" "#9900CC" "#FF0000"])

(defn rand-type []
  "Returns a random block type"
  (rand-nth (types)))

(defn swap-block-default-ticks []
  20)

(defn swap? [{type :type}]
  (= type :swap))

(defn blocks-swap! [[a b]]
  (let [{a-pos :position} a
        {b-pos :position} b]
    [(assoc a :position b-pos)
     (assoc b :position a-pos)]))

(defn resolve-swaps [blocks]
  "Dissolves swap blocks when the ticks reach 0"
  (flatten
   (map (fn [blk]
        (if (and (swap? blk) (tick/ticks0? blk))
          (blocks-swap! (get blk :blocks))
          blk))
        blocks)))

(defn same-type? [{a :type} {b :type}]
  (= a b))

