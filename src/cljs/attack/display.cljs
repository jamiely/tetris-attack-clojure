(ns attack.display
  (:require [attack.game :as game]
            [attack.point :as pt]
            [attack.block :as blk]
            [attack.grid :as grid]
            [attack.color :as color]
            [attack.display-math :as dispm]
            [attack.game-interface :as gi]
            [attack.screens :as screens]))

(def WHITE "white")
(def BLUE "blue")

(def BLOCKWIDTH 30)
(def BLOCKHEIGHT 30)
(def BLOCKSIZE [BLOCKWIDTH BLOCKHEIGHT])
(def DISPLAYHEIGHT 400)
(def DISPLAYWIDTH (* 9 BLOCKWIDTH))

(defn disp-info [total-rows]
  {:total-rows total-rows
   :block-height BLOCKHEIGHT
   :block-width BLOCKWIDTH
   :display-height DISPLAYHEIGHT})

(defn orect [context color x y w h]
  (set! (.-lineWidth context) 3)
  (set! (.-strokeStyle context) color)
  (.strokeRect context x y w h))

(defn canvas []
  (.getElementById js/document "canvas"))

(defn draw-context []
  (.getContext (canvas) "2d"))

(defn draw-block-fun [total-rows fun {pt :position color :type}]
  (let [[x y] (dispm/pt-to-display-pt (disp-info total-rows) pt)]
    (fun (draw-context) (name color) x y BLOCKWIDTH BLOCKHEIGHT)))

(defn render-cursor [total-rows {pt :origin :as cursor}]
  (let [context (draw-context)
        nofill-block (fn [pt]
                       (let [[x y] (dispm/pt-to-display-pt (disp-info total-rows) pt)]
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
    (set! (.-font context) "bold 12px sans-serif")
    (.fillText context (str "Clock " clock), BLOCKWIDTH, 10)))

(defn render-fps [fps]
  (let [context (draw-context)]
    (fill context "red")
    (set! (.-font context) "bold 12px sans-serif")
    (.fillText context (str "FPS " fps), (* 5 BLOCKWIDTH), 10)))


(defn draw-grid []
  (rect (draw-context) WHITE 0 0 DISPLAYWIDTH DISPLAYHEIGHT))

(declare draw-block)

(defn brighten-block [{type :type :as blk} factor]
  (assoc blk :type (color/brighten (str type)
                                   factor)))

(defn draw-disappear-block [total-rows {blocks :blocks ticks :ticks}]
  (let [alter1 #(assoc %1 :type :black)
        alter (fn [{type :type :as blk}]
                (let [color (str type)
                      max-ticks 20
                      factor (+ (/ (- max-ticks ticks) 20) 0.2)]
                  (brighten-block blk factor)))
        bs (doall (map alter blocks))]
    (doall (map (partial draw-block total-rows) bs))))

(defn make-gray [block]
  (assoc block :type :gray))

(defn draw-swap-block [total-rows {blocks :blocks ticks :ticks}]
  (let [bs (doall (map make-gray blocks))]
    (doall (map (partial draw-block total-rows) bs))))

(defn draw-falling-block [total-rows {inner-block :block}]
  (draw-block total-rows inner-block))

(defn draw-swap-empty-block [total-rows {block :block into-pos :into-position}]
  (map (partial draw-block total-rows) [(make-gray block)]))
   
(defn draw-garbage-block-with-color [total-rows
                                     block
                                     color]
  (let [points (blk/garbage-block-points block)
        blocks (doall (map #(blk/new-simple % color) points))]
    (doall (map (partial draw-block total-rows) blocks))))

(defn draw-dissolve-block [total-rows {{pos :position
                                        length :length height :height
                                        :as inner} :garbage-block
                                       pending :pending-blocks
                                       :as dissolve}]
  (let [[ox oy] (pt/below pos)
        apos (pt/point (+ ox length) (+ oy height))
        [ox' oy'] (dispm/pt-to-display-pt (disp-info total-rows) [ox oy])
        [ax' ay'] (dispm/pt-to-display-pt (disp-info total-rows) apos)
        width (- ax' ox')
        height (- oy' ay')
        context (draw-context)]
  (draw-garbage-block-with-color total-rows inner :AAA)
  (doall (map #(draw-block total-rows (brighten-block % 0.9))
              pending))
  (orect context "black" ox' oy' width height)))
   
(defn draw-garbage-block [total-rows block]
  (draw-garbage-block-with-color total-rows block :black))

(defn draw-block [total-rows {type :type :as block}]
  (let [fn-draw (case type
                  :dissolve (partial draw-dissolve-block total-rows)
                  :garbage (partial draw-garbage-block total-rows)
                  :swap (partial draw-swap-block total-rows)
                  :swap-empty (partial draw-swap-empty-block total-rows)
                  :disappear (partial draw-disappear-block total-rows)
                  :falling (partial draw-falling-block total-rows)
                  (partial draw-block-fun total-rows rect))]
    (fn-draw block)))

(defn out-of-bounds? [{{rows :rows cols :cols} :grid} [x y]]
  (not (and (< 0 x)
            (< 0 y)
            (>= rows y)
            (> cols x))))

(defn cursor-mod [{game :game {origin :origin :as cursor} :cursor :as gi} pt]
  (let [new-orig (pt/point-add origin pt)
        new-cursor (assoc cursor :origin new-orig)]
    (if (out-of-bounds? game new-orig)
      gi
      (assoc gi :cursor new-cursor))))

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
                         [block after-pos]]
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
                           (first (filter (fn [[blk pt]] (not (nil? blk)))
                                          [[a b-pt] [b origin]])))))))

(defn add-line [{g :game :as gi}]
  (assoc gi :game (game/add-line g)))

(defn add-garbage-block[{g :game :as gi}]
  (assoc gi :game (game/add-garbage g)))

(defn inspect [gi]
  (let [log #(.log js/console (str %))
        log-blks (fn [thing]
                   (log thing)
                   (let [blocks (:blocks thing)]
                     (if (not (nil? blocks))
                       (doall (map log blocks)))))
        grid (:grid (:game gi))
        blocks (:blocks grid)
        fallers (grid/fallers grid)]
    ;;(doall (map log-blks blocks)))
    (log (str "Game interface"))
    (log gi)
    (log (str "Fallers"))
    (log fallers))
  gi)

(defn render-grid [{total-rows :rows :as grid}]
    (doall (map (partial draw-block total-rows) (:blocks grid))))

(defn init[]
  (draw-grid)
  (gi/default))

(defn step [game-interface]
  (gi/step game-interface))

;; Track if we've already shown the game over screen
(def game-over-shown (atom false))

(defn render-game-over [gi]
  (when-not @game-over-shown
    ;; Show the game over screen only once
    (reset! game-over-shown true)
    (screens/show-game-over-screen!)))

(defn render-game-active [{{clock :clock {rows :rows} :grid} :game cursor :cursor}]
  (render-clock clock)
  (render-cursor rows cursor))

(defn render[{{{rows :rows :as grid} :grid clock :clock :as game} :game cursor :cursor :as gi} fps]
  (draw-grid)
  (render-grid grid)
  (render-fps fps)
  (if (game/game-over? game)
    (render-game-over gi)
    (render-game-active gi)))

