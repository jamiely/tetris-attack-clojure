(ns attack.entrypoint
  (:require [attack.game-interface :as gi]
            [attack.cursor :as cursor]
            [attack.display :as disp]
            [attack.screens :as screens]))

(def request-anim-fun
  "Use this to queue a drawing of the board"
  (first (filter (comp not nil?)
                 [(.-requestAnimationFrame js/window)
                  (.-mozRequestAnimationFrame js/window)
                  (.-msRequestAnimationFrame js/window)
                  (.-webkitRequestAnimationFrame js/window)])))

(defn request-anim [callback]
  (request-anim-fun callback))

(def GI (atom (gi/default)))
  
(defn initial-render []
  (disp/draw-grid))

(defn jstime []
  (.getTime (new js/Date)))

(defn restart [_]
  (gi/default))

;; (swap! GI (disp/step @GI))
(defn log [msg]
  (.log js/console msg))

(defn step []
  (swap! GI disp/step))
(defn floor [num]
  (.floor js/Math num))

(defn render [last-time]
  (let [time-delta (- (jstime) last-time)
        fps (floor (* (/ 1 time-delta) 1000))]
    (disp/render @GI fps)))

(def step-rate 30)

(defn begin-stepping []
  (js/setInterval step step-rate)
  )

(defn begin-rendering []
  (let [current-time (jstime)]
    (js/setTimeout (fn []
                     (render current-time)
                     (request-anim begin-rendering))
                   step-rate)))

(defn which [num]
  (case num
    13 :ENTER
    49 :EXCLAMATION
    39 :RIGHT
    37 :LEFT
    38 :UP
    32 :SPACE
    40 :DOWN
    78 :N
    80 :P
    82 :R
    191 :QMARK
    :UNSUPPORTED))

(defn inspect-key [event]
  (log event)
  identity)

(defn ^:export keyup-handler [event]
  "The handler for keys. Make sure to bind this specifically"
  (let [func (case (which (.-which event))
               :ENTER disp/cursor-swap
               :SPACE disp/cursor-swap
               :LEFT  disp/cursor-left
               :RIGHT disp/cursor-right
               :UP    disp/cursor-up
               :DOWN  disp/cursor-down
               :R     disp/add-line
               :N     restart
               :EXCLAMATION disp/add-garbage-block
               :QMARK disp/inspect
               (inspect-key event))]
    (swap! GI func)))

;; (defn bind-keys []
;;   (let [body (js/$ "body")]
;;     (.keyup body keyup-handlers)))

(def game-keyup-listener (atom nil))

(defn attach-game-keyup-handler []
  "Attach the game's keyup handler"
  (when-not @game-keyup-listener
    (let [handler (fn [event] (keyup-handler event))]
      (reset! game-keyup-listener handler)
      (.addEventListener (.-body js/document) "keyup" handler))))

(defn detach-game-keyup-handler []
  "Detach the game's keyup handler"
  (when @game-keyup-listener
    (.removeEventListener (.-body js/document) "keyup" @game-keyup-listener)
    (reset! game-keyup-listener nil)))

(defn init-game []
  "Initialize the game when starting from title screen"
  (log (str "Initializing game " @GI))
  (reset! GI (gi/default))
  (initial-render)
  (begin-stepping)
  (begin-rendering)
  (attach-game-keyup-handler))

(defn ^:export init []
  "Initialize the screen system and set up the application"
  (log "Initializing screen system")
  (screens/init-screen-system! init-game detach-game-keyup-handler))
        
