(ns attack.game
  (:require [attack.grid :as grid]
            [attack.tick :as tick]
            [attack.block :as blk])
  (:use [attack.point :only [point point-add]]))

(defn default []
  (let [[rows cols] [6 6]]
    {:grid (grid/default cols rows)
     ;; everything is based on the clock
     :clock 0
     ;; add a line after this many ticks
     :add-line-ticks 120}))

(defn tick [{clock :clock :as game}]
  "Increments the clock of a game"
  (assoc game :clock (+ clock 1)))

(defn mod-clock? [{clock :clock} operand]
  (= 0 (mod clock operand)))

(defn step-add-line [{add-line-ticks :add-line-ticks grid :grid :as game}]
  (if (mod-clock? game add-line-ticks)
    (assoc game :grid (grid/add-row grid))
    game))

(defn step-blocks [blocks]
  (blk/resolve-swaps (map tick/dec-ticks blocks)))

(defn step-grid [{blocks :blocks :as grid}]
  (assoc grid :blocks (step-blocks blocks)))

(defn step [game]
  "Steps a game by 1"
  (let [{grid :grid :as g} (tick game)
        new-grid (step-grid grid)]
    (step-add-line (assoc g :grid new-grid))))

