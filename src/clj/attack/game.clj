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
     ;; is game dirty, meaning does it need to be checked for matches
     :dirty false
     ;; add a line after this many ticks
     :add-line-ticks 120}))

(defn add-garbage [{grid :grid :as game}]
  (let [garbage (blk/new-garbage (point 1 -3) 5 2)
        new-grid (grid/add-blocks grid #{garbage})] 
    (assoc game :grid new-grid)))

(defn game-over? [{grid :grid max-lines :max-lines :as game}]
  (> (grid/line-count grid) max-lines))

(defn tick [{clock :clock :as game}]
  "Increments the clock of a game"
  (assoc game :clock (+ clock 1)))

(defn mod-clock? [{clock :clock} operand]
  (= 0 (mod clock operand)))

(defn add-line [{grid :grid :as game}]
  (assoc game :grid (grid/add-row grid)))

(defn step-add-line [{add-line-ticks :add-line-ticks :as game}]
  (if (mod-clock? game add-line-ticks)
    (add-line game)
    game))

(defn mark-dirty [{old-grid :grid} {new-grid :grid :as new-game}]
  (assoc new-game
         :dirty
         (not (grid/simple-blocks-match? old-grid new-grid))))

(defn step [{dirty :dirty :as game}]
  "Steps a game by 1"
  (if (game-over? game)
    (let [{status :status} game]
      (assoc game :status :game-over))
    (let [{grid :grid dirty? :dirty :as g} (tick game)
          new-grid (grid/resolve-grid grid dirty?)
          new-game (step-add-line (assoc g :grid new-grid))]
      (mark-dirty game new-game))))


