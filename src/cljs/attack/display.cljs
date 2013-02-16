(ns attack.display
  (:require [attack.game :as game]
            [attack.point :as pt]
            [attack.grid :as grid]
            [attack.color :as color]
            [attack.game-interface :as gi]))

(def WHITE "white")
(def BLUE "blue")

(def BLOCKWIDTH 20)
(def BLOCKHEIGHT 20)
(def BLOCKSIZE [BLOCKWIDTH BLOCKHEIGHT])
(def DISPLAYHEIGHT 500)

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

(defn draw-disappear-block [{blocks :blocks ticks :ticks}]
  (let [alter1 #(assoc %1 :type :black)
        alter (fn [{type :type :as blk}]
                (let [color (str type)
                      max-ticks 20
                      factor (+ (/ (- max-ticks ticks) 20) 0.2)]
                  (assoc blk :type (color/brighten color factor))))
        bs (doall (map alter blocks))]
    (doall (map draw-block bs))))

(defn draw-swap-block [{blocks :blocks ticks :ticks}]
  (let [alter #(assoc %1 :type :gray)
        bs (doall (map alter blocks))]
    (doall (map draw-block bs))))

(defn draw-falling-block [{inner-block :block}]
  (draw-block inner-block))

(defn draw-block [{type :type :as block}]
  (let [fn-draw (case type
                  :swap draw-swap-block
                  :disappear draw-disappear-block
                  :falling draw-falling-block
                  (partial draw-block-fun rect))]
    (fn-draw block)))

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

(defn cursor-swap-fill [{{gr :grid :as game} :game :as gi}
                        a b]
  (let [new-grid (grid/swap-blocks gr a b)]
    (assoc gi :game (assoc game :grid new-grid))))

(defn cursor-swap-empty [{{gr :grid :as game} :game :as gi}
                         block
                         after-pos]
  (assoc gi :game (assoc game :grid (grid/swap-empty gr
                                                     block
                                                     after-pos))))

(defn cursor-swap [{{gr :grid} :game {origin :origin} :cursor :as gi}] 
  (let [b-pt (pt/after origin)
        [a b] (doall (map #(grid/block-at gr %)
                          [origin b-pt]))]
    (if (every? nil? [a b])
      gi
      (if (every? (comp not nil?) [a b])
        (cursor-swap-fill gi a b)
        (cursor-swap-empty gi
                           (first (filter (comp not nil?) [a b]))
                           b-pt)))))

(defn inspect [gi]
  (let [log #(.log js/console (str %))
        log-blks (fn [thing]
                   (log thing)
                   (let [blocks (get thing :blocks)]
                     (if (not (nil? blocks))
                       (doall (map log blocks)))))
        grid (get (get gi :game) :grid)
        blocks (get grid :blocks)]
    (doall (map log-blks blocks)))
  gi)

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
