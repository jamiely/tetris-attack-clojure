(ns attack.display
  (:require [attack.game :as game]))

(def WHITE "white")
(def BLUE "blue")

(def BLOCKWIDTH 20)
(def BLOCKHEIGHT 20)
(def BLOCKSIZE [BLOCKWIDTH BLOCKHEIGHT])

(defn ^:export init[]
  (draw-grid)
  (game/default-game))

(defn ^:export step [game]
  (game/step game))

(defn ^:export render[{grid :grid clock :clock :as game}]
  (js/console.log (str "Clock " clock))
  (render-grid grid))

(defn render-grid [grid]
    (doall (map draw-block (get grid :blocks))))

(defn canvas []
  (.getElementById js/document "canvas"))

(defn draw-context []
  (.getContext (canvas) "2d"))

(defn fill [context color]
  (set! (.-fillStyle context) color))

(defn rect [context color x y w h]
  (fill context color)
  (.fillRect context x y w h))

(defn draw-grid []
  (rect (draw-context) WHITE 20 20 100 100))

(defn draw-block [{[grid-x grid-y] :position color :type :as block}]
  (let [x (* grid-x BLOCKWIDTH)
        y (* grid-y BLOCKHEIGHT)]
    (rect (draw-context) (name color) x y BLOCKWIDTH BLOCKHEIGHT)))


