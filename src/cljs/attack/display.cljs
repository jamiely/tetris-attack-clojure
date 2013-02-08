(ns attack.display
  (:require [attack.game :as game]))

(def WHITE "white")
(def BLUE "blue")

(def BLOCKWIDTH 20)
(def BLOCKHEIGHT 20)
(def BLOCKSIZE [BLOCKWIDTH BLOCKHEIGHT])


(defn pt-to-display-pt [[x y]]
  [(* x BLOCKWIDTH) (* y BLOCKHEIGHT)])

(defn orect [context color x y w h]
  (set! (.-lineWidth context) 3)
  (set! (.-strokeStyle context) color)
  (.strokeRect context x y w h))

(defn canvas []
  (.getElementById js/document "canvas"))

(defn draw-context []
  (.getContext (canvas) "2d"))


(defn render-cursor [{pt :origin :as cursor}]
  (let [[x y] (pt-to-display-pt pt)
        [ax ay] (pt-to-display-pt (game/point-add pt (game/point 1 0)))]
    (orect (draw-context) "black" x y BLOCKWIDTH BLOCKHEIGHT)
    (orect (draw-context) "black" ax ay BLOCKWIDTH BLOCKHEIGHT)))


(defn fill [context color]
  (set! (.-fillStyle context) color))

(defn rect [context color x y w h]
  (fill context color)
  (.fillRect context x y w h))

(defn draw-grid []
  (rect (draw-context) WHITE 20 20 100 100))

(defn draw-block [{pt :position color :type :as block}]
  (let [[x y] (pt-to-display-pt pt)]
    (rect (draw-context) (name color) x y BLOCKWIDTH BLOCKHEIGHT)))

(defn cursor-mod [{{origin :origin :as cursor} :cursor :as gi} pt]
  (let [new-orig (game/point-add origin pt)
        new-cursor (assoc cursor :origin new-orig)]
    (assoc gi :cursor new-cursor)))

(defn ^:export cursor-down [gi]
  (cursor-mod gi (game/point 0 1)))

(defn ^:export cursor-up [gi]
  (cursor-mod gi (game/point 0 -1)))

(defn ^:export cursor-left [gi]
  (cursor-mod gi (game/point -1 0)))

(defn ^:export cursor-right [gi]
  (cursor-mod gi (game/point 1 0)))

(defn render-grid [grid]
    (doall (map draw-block (get grid :blocks))))

(defn ^:export init[]
  (draw-grid)
  {:game (game/default-game)
   :cursor (game/default-cursor)})

(defn ^:export step [{game :game :as gi}]
  (assoc gi :game (game/step game)))
  
(defn ^:export render[{{grid :grid clock :clock} :game cursor :cursor :as thing}]
  (js/console.log (str "Clock " clock))
  (render-grid grid)
  (render-cursor cursor))
