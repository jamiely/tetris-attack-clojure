(ns attack.game
  (:require [attack.grid :as grid]
            [attack.tick :as tick]
            [attack.block :as blk])
  (:use [attack.point :only [point point-add]]))

(defn adjusted-grid [cols rows]
  (let [def (grid/default cols 13)
        removed (grid/remove-blocks def (into #{} (get def :blocks)))]
    (reduce (fn [grid f] (f grid)) removed (repeat rows grid/add-row))))

(defn default []
  (let [[rows cols] [3 6]]
    {:grid (adjusted-grid cols rows)
     :status :active
     :max-lines 13
     ;; everything is based on the clock
     :clock 0
     ;; is game dirty, meaning does it need to be checked for matches
     :dirty false
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

(defn step-add-line [{add-line-ticks :add-line-ticks :as game}]
  (if (mod-clock? game add-line-ticks)
    (add-line game)
    game))

(defn mark-dirty [{old-grid :grid} {new-grid :grid :as new-game}]
  (assoc new-game
         :dirty
         (not (grid/simple-blocks-match? old-grid new-grid))))


(defn add-garbage-block [{grid :grid :as game} garbage]
  (let [new-grid (grid/add-blocks grid #{garbage})] 
    (assoc game :grid new-grid)))

(defn add-garbage [{grid :grid :as game}]
  (let [garbage (blk/new-garbage (point 1 1) 5 1)] 
    (add-garbage-block game garbage)))

(defn random-garbage-block [{cols :cols rows :rows :as grid}]
  (let [length (+ 3 (rand-int (- cols 3)))
        x (+ 1 (rand-int (- cols length -1)))]
    (blk/new-garbage (point x (- rows 11))
                     length
                     (+ 1 (rand-int 2)))))

(defn add-random-garbage-every-n-steps [{grid :grid clock :clock :as game} n-steps]
  (if (= 0 (mod clock n-steps))
    (add-garbage-block game (random-garbage-block grid))
    game))

(defn step [{dirty :dirty :as game}]
  "Steps a game by 1"
  (if (game-over? game)
    (let [{status :status} game]
      (assoc game :status :game-over))
    (let [{grid :grid dirty? :dirty :as g} (tick game)
          new-grid (grid/resolve-grid grid dirty?)
          new-game (add-random-garbage-every-n-steps
                    (step-add-line (assoc g :grid new-grid))
                    101)]
      (mark-dirty game new-game))))


