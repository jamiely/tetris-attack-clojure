(ns attack.display
  (:require [attack.game :as game]
            [attack.point :as pt]
            [attack.grid :as grid]
            [attack.game-interface :as gi]))

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

(defn draw-block-fun [fun {pt :position color :type}]
  (let [[x y] (pt-to-display-pt pt)]
    (fun (draw-context) (name color) x y BLOCKWIDTH BLOCKHEIGHT)))

(defn render-cursor [{pt :origin :as cursor}]
  (let [context (draw-context)
        nofill-block (fn [pt]
                       (let [[x y] (pt-to-display-pt pt)]
                         (orect context "black" x y BLOCKWIDTH BLOCKHEIGHT)))]
    (nofill-block pt)
    (nofill-block (pt/point-add pt (pt/point 1 0)))))

(defn fill [context color]
  (set! (.-fillStyle context) color))

(defn rect [context color x y w h]
  (fill context color)
  (.fillRect context x y w h))

(defn render-clock [clock]
  (let [context (draw-context)]
    (fill context "black")
    (set! (.-font context) "bold 12px sans-serid")
    (.fillText context (str "Clock " clock), 0, 10)))

(defn draw-grid []
  (rect (draw-context) WHITE 0 0 200 300))

(defn draw-block [{type :type :as block}]
  (if (= type :swap)
    (draw-swap-block block)
    (draw-block-fun rect block)))

(defn draw-swap-block [{blocks :blocks ticks :ticks}]
  (let [alter #(assoc %1 :type :gray)
        bs (doall (map alter blocks))]
    (doall (map draw-block bs))))

(defn cursor-mod [{{origin :origin :as cursor} :cursor :as gi} pt]
  (let [new-orig (pt/point-add origin pt)
        new-cursor (assoc cursor :origin new-orig)]
    (assoc gi :cursor new-cursor)))

(defn cursor-down [gi]
  (cursor-mod gi (pt/point 0 1)))

(defn cursor-up [gi]
  (cursor-mod gi (pt/point 0 -1)))

(defn cursor-left [gi]
  (cursor-mod gi (pt/point -1 0)))

(defn cursor-right [gi]
  (cursor-mod gi (pt/point 1 0)))

(defn cursor-swap [{{gr :grid :as game} :game {origin :origin} :cursor :as gi}] 
  (let [blk-at #(grid/block-at gr %)
        b-pt (pt/point-add origin (pt/point 1 0))
        [a b] (doall (map blk-at [origin b-pt]))
        new-grid (grid/swap-blocks gr a b)]
    (.log js/console (str new-grid))
    (if (some nil? [a b])
      gi
      (assoc gi :game (assoc game :grid new-grid)))))

(defn render-grid [grid]
    (doall (map draw-block (get grid :blocks))))

(defn init[]
  (draw-grid)
  (gi/default))

(defn step [game-interface]
  (gi/step game-interface))
  
(defn render[{{grid :grid clock :clock :as game} :game cursor :cursor :as thing}]
  ;;(js/console.log (str "Clock " clock " Game: " game))
  (draw-grid)
  (render-clock clock)
  (render-grid grid)
  (render-cursor cursor))
