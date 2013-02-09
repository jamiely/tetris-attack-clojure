(ns attack.grid
  (:use [attack.point :only [point point-add]])
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
