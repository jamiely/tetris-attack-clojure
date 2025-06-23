(ns attack.display
  (:require [attack.game :as game]
            [attack.point :as pt]
            [attack.block :as blk]
            [attack.grid :as grid]
            [attack.color :as color]
            [attack.display-math :as dispm]
            [attack.game-interface :as gi]
            [attack.screens :as screens]))

(def BACKGROUND-COLOR "#f5f5f5")
(def BLUE "blue")

;; Base dimensions - these are reference sizes that will be scaled
(def BASE-BLOCKWIDTH 30)
(def BASE-BLOCKHEIGHT 30)
(def BASE-DISPLAYHEIGHT 400)
(def BASE-DISPLAYWIDTH (* 6 BASE-BLOCKWIDTH))
(def BASE-ASPECT-RATIO (/ BASE-DISPLAYWIDTH BASE-DISPLAYHEIGHT))

;; Scaling state
(def scale-factor (atom 1.0))
(def canvas-dimensions (atom {:width BASE-DISPLAYWIDTH :height BASE-DISPLAYHEIGHT}))
(def resize-handler-setup (atom false))

;; Scaled dimensions (computed dynamically)
(defn BLOCKWIDTH [] (* BASE-BLOCKWIDTH @scale-factor))
(defn BLOCKHEIGHT [] (* BASE-BLOCKHEIGHT @scale-factor))
(defn DISPLAYWIDTH [] (:width @canvas-dimensions))
(defn DISPLAYHEIGHT [] (:height @canvas-dimensions))

(defn disp-info [total-rows]
  {:total-rows total-rows
   :block-height (BLOCKHEIGHT)
   :block-width (BLOCKWIDTH)
   :display-height (DISPLAYHEIGHT)})

(defn orect [context color x y w h]
  (set! (.-lineWidth context) 3)
  (set! (.-strokeStyle context) color)
  (.strokeRect context x y w h))

(defn canvas []
  (.getElementById js/document "canvas"))

(defn draw-context []
  (.getContext (canvas) "2d"))

(defn update-canvas-size!
  "Updates canvas size based on viewport while maintaining aspect ratio"
  []
  (let [canvas-elem (canvas)
        viewport-width (.-innerWidth js/window)
        viewport-height (.-innerHeight js/window)
        ;; Calculate maximum size maintaining aspect ratio
        scale-by-width (/ viewport-width BASE-DISPLAYWIDTH)
        scale-by-height (/ viewport-height BASE-DISPLAYHEIGHT)
        chosen-scale (min scale-by-width scale-by-height) ; Allow scaling up or down
        new-width (* BASE-DISPLAYWIDTH chosen-scale)
        new-height (* BASE-DISPLAYHEIGHT chosen-scale)]
    ;; Debug logging
    (.log js/console (str "Updating canvas size: viewport=" viewport-width "x" viewport-height
                         ", scale=" chosen-scale ", canvas=" new-width "x" new-height))
    ;; Update canvas dimensions
    (set! (.-width canvas-elem) new-width)
    (set! (.-height canvas-elem) new-height)
    ;; Update scaling state
    (reset! scale-factor chosen-scale)
    (reset! canvas-dimensions {:width new-width :height new-height})
    ;; Set CSS size to match canvas size
    (set! (.. canvas-elem -style -width) (str new-width "px"))
    (set! (.. canvas-elem -style -height) (str new-height "px"))))

(defn setup-resize-handler!
  "Sets up window resize event handler"
  []
  (when-not @resize-handler-setup
    (.log js/console "Setting up resize handler")
    (.addEventListener js/window "resize" update-canvas-size!)
    (reset! resize-handler-setup true)))

(defn draw-block-fun [total-rows fun {pt :position color :type}]
  (let [[x y] (dispm/pt-to-display-pt (disp-info total-rows) pt)
        ;; Adjust x to account for 1-based grid coordinates
        adj-x (- x (BLOCKWIDTH))]
    (fun (draw-context) (name color) adj-x y (BLOCKWIDTH) (BLOCKHEIGHT))))

(defn render-cursor [total-rows {pt :origin :as cursor}]
  (let [context (draw-context)
        nofill-block (fn [pt]
                       (let [[x y] (dispm/pt-to-display-pt (disp-info total-rows) pt)
                             ;; Adjust x to account for 1-based grid coordinates
                             adj-x (- x (BLOCKWIDTH))]
                         (orect context "black" adj-x y (BLOCKWIDTH) (BLOCKHEIGHT))))]
    (nofill-block pt)
    (nofill-block (pt/point-add pt (pt/point 1 0)))))

(defn fill [context color]
  (set! (.-fillStyle context) color))

(defn rect [context color x y w h]
  (fill context color)
  (.fillRect context x y w h))

(defn create-gradient [context x y w h color1 color2]
  "Create a linear gradient from top to bottom"
  (let [gradient (.createLinearGradient context x y x (+ y h))]
    (.addColorStop gradient 0 color1)
    (.addColorStop gradient 1 color2)
    gradient))

(defn draw-3d-block [context color x y w h]
  "Draw a block with enhanced depth effect, gradients, and beveled edges"
  (let [bevel-size 3
        inner-x (+ x bevel-size)
        inner-y (+ y bevel-size)
        inner-w (- w (* 2 bevel-size))
        inner-h (- h (* 2 bevel-size))
        base-colors {"#FF0000" {:light "#FF6666" :dark "#990000" :highlight "#FFAAAA" :shadow "#660000"}
                     "#00FF00" {:light "#66FF66" :dark "#009900" :highlight "#AAFFAA" :shadow "#006600"}
                     "#0000FF" {:light "#6666FF" :dark "#000099" :highlight "#AAAAFF" :shadow "#000066"}
                     "#FFFF00" {:light "#FFFF66" :dark "#999900" :highlight "#FFFFAA" :shadow "#666600"}
                     "#FF6699" {:light "#FFAACC" :dark "#CC3366" :highlight "#FFDDEE" :shadow "#992244"}
                     "#00FFFF" {:light "#66FFFF" :dark "#009999" :highlight "#AAFFFF" :shadow "#006666"}
                     "#9900CC" {:light "#CC66FF" :dark "#660099" :highlight "#DDAAFF" :shadow "#440066"}
                     "#996633" {:light "#CC9966" :dark "#663300" :highlight "#DDBB88" :shadow "#442200"}
                     "black" {:light "#666666" :dark "#000000" :highlight "#999999" :shadow "#000000"}
                     "gray" {:light "#AAAAAA" :dark "#555555" :highlight "#CCCCCC" :shadow "#333333"}}
        colors (get base-colors color {:light "#AAAAAA" :dark "#555555" :highlight "#CCCCCC" :shadow "#333333"})]
    
    ;; Main block gradient fill
    (let [gradient (create-gradient context inner-x inner-y inner-w inner-h 
                                   (:light colors) (:dark colors))]
      (set! (.-fillStyle context) gradient)
      (.fillRect context inner-x inner-y inner-w inner-h))
    
    ;; Top highlight edge
    (set! (.-fillStyle context) (:highlight colors))
    (.fillRect context x y w bevel-size)
    
    ;; Left highlight edge  
    (.fillRect context x y bevel-size h)
    
    ;; Bottom shadow edge
    (set! (.-fillStyle context) (:shadow colors))
    (.fillRect context x (+ y h (- bevel-size)) w bevel-size)
    
    ;; Right shadow edge
    (.fillRect context (+ x w (- bevel-size)) y bevel-size h)
    
    ;; Inner border for definition
    (set! (.-strokeStyle context) (:dark colors))
    (set! (.-lineWidth context) 1)
    (.strokeRect context (+ inner-x 0.5) (+ inner-y 0.5) (- inner-w 1) (- inner-h 1))
    
    ;; Outer border
    (set! (.-strokeStyle context) "#333333")
    (set! (.-lineWidth context) 1)
    (.strokeRect context (+ x 0.5) (+ y 0.5) (- w 1) (- h 1))))

(defn render-clock [clock]
  (let [context (draw-context)]
    (fill context "black")
    (set! (.-font context) "bold 12px sans-serif")
    (.fillText context (str "Clock " clock), (BLOCKWIDTH), 10)))

(defn debug-mode? []
  "Check if debug query parameter is present"
  (let [url-params (js/URLSearchParams. (.-search (.-location js/window)))]
    (.has url-params "debug")))

(defn render-fps [fps]
  (let [context (draw-context)]
    (fill context "red")
    (set! (.-font context) "bold 12px sans-serif")
    (.fillText context (str "FPS " fps), (* 5 (BLOCKWIDTH)), 10)))


(defn draw-grid []
  (rect (draw-context) BACKGROUND-COLOR 0 0 (DISPLAYWIDTH) (DISPLAYHEIGHT)))

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
        ;; Adjust x coordinates to account for 1-based grid coordinates
        adj-ox' (- ox' (BLOCKWIDTH))
        adj-ax' (- ax' (BLOCKWIDTH))
        width (- adj-ax' adj-ox')
        height (- oy' ay')
        context (draw-context)]
  (draw-garbage-block-with-color total-rows inner :AAA)
  (doall (map #(draw-block total-rows (brighten-block % 0.9))
              pending))
  (orect context "black" adj-ox' oy' width height)))
   
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
                  (partial draw-block-fun total-rows draw-3d-block))]
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
  (update-canvas-size!)
  (setup-resize-handler!)
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
  (when (debug-mode?)
    (render-clock clock))
  (render-cursor rows cursor))

(defn render[{{{rows :rows :as grid} :grid clock :clock :as game} :game cursor :cursor :as gi} fps]
  (draw-grid)
  (render-grid grid)
  (when (debug-mode?)
    (render-fps fps))
  (if (game/game-over? game)
    (render-game-over gi)
    (render-game-active gi)))

