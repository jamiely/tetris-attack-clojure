(ns attack.game
  (:require [attack.grid :as grid]
            [attack.tick :as tick]
            [attack.block :as blk])
  (:use [attack.point :only [point point-add]]))

(defn default []
  (let [[rows cols] [6 6]]
    {:grid (grid/default cols rows)
     :status :active
     :max-lines 13
     ;; everything is based on the clock
     :clock 0
     ;; add a line after this many ticks
     :add-line-ticks 120}))

(defn game-over? [{grid :grid max-lines :max-lines :as game}]
  (> (grid/line-count grid) max-lines))

(defn tick [{clock :clock :as game}]
  "Increments the clock of a game"
  (assoc game :clock (+ clock 1)))

(defn mod-clock? [{clock :clock} operand]
  (= 0 (mod clock operand)))

(defn add-line [{grid :grid :as game}]
  (assoc game :grid (grid/add-row grid)))

(defn step-add-line [{add-line-ticks :add-line-ticks grid :grid :as game}]
  (if (mod-clock? game add-line-ticks)
    (add-line game)
    game))

(defn step [game]
  "Steps a game by 1"
  (if (game-over? game)
    (let [{status :status} game]
      (assoc game :status :game-over))
    (let [{grid :grid :as g} (tick game)
          new-grid (grid/resolve-grid grid)]
      (step-add-line (assoc g :grid new-grid)))))

