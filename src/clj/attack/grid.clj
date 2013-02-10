(ns attack.grid
  (:use [attack.point :only [point point-add directions]])
  (:require [attack.block :as blk]))

(defn empty-grid [cols]
  "Returns an empty grid"
  {:blocks []
   :rows 0
   :cols cols})

(defn swap-blocks [{blocks :blocks :as grid} a b]
  "Replaces the passed blocks in the grid with a swap block"
  (let [swap-blk (blk/new-swap a b (blk/swap-block-default-ticks))
        new-blocks (cons swap-blk (remove #{a b} blocks))]
    (assoc grid :blocks new-blocks)))

(defn block-at [{blocks :blocks} point]
  (first (filter (fn [{pt :position}] (and (not (nil? pt)) (= pt point)))
                 blocks)))

(defn add-row [{blocks :blocks
                  rows :rows
                  cols :cols}]
  (let [new-last (+ rows 1)
        new-block (fn [x]
                    (blk/new-simple (point x new-last) (blk/rand-type)))
        new-blocks (map new-block (range 1 (+ cols 1)))]
    {:blocks (concat blocks new-blocks)
     :rows new-last
     :cols cols}))

(defn default [cols rows]
  (let [xs (range 1 (+ cols 1))]
    {:blocks (for [x xs
                y (range 1 (+ rows 1))]
               (blk/new-simple (point x y) (blk/rand-type)))
     :cols cols
     :rows rows}))

(defn match-sets [{all-blocks :blocks :as grid}]
  "Returns a sequence of match sets. Only simple blocks may be matched"
  (let [simple-blocks (filter blk/simple? all-blocks)]
    (reduce (fn [matches block]
              (cons (find-matches-with-grid-block grid block)
                    matches))
            simple-blocks)))

(defn find-matches-with-grid-block [grid blk]
  "Returns all the matches in the grid using the block as the origin"
  (let [dirs (directions)
        fn-match-dir #(matches-in-direction-matching-block-with-quota grid % blk 3)]
    (map fn-match-dir dirs)))

(defn block-in-direction [grid {pos :position} dir]
  (block-at grid (point-add pos dir)))

(defn matches-in-direction-matching-block-with-quota [grid dir blk quota]
  (let [next-blk (block-in-direction grid blk dir)
        recurse? (and (not (nil? next-blk)) (blk/same-type? blk next-blk))]
    (if recurse?
      (cons blk (matches-in-direction-matching-block-with-quota grid dir next-blk (- quota 1)))
      [])))
  