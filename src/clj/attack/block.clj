(ns attack.block
  (:require [attack.tick :as tick]))

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
         {:ticks 60
          :type :disappear}))

(defn simple? [blk]
  (contains? blk :position))

(defn types []
  "Lists available block types"
  [:orange :yellow :pink :cyan :green :purple :red])

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

