(ns attack.entrypoint
  (:require [attack.game-interface :as gi]
            [attack.cursor :as cursor]
            [attack.display :as disp]))

(def request-anim-fun
  "Use this to queue a drawing of the board"
  (first (filter (comp not nil?)
                 [(.-mozRequestAnimationFrame js/window)
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

(defn begin-stepping []
  (js/setInterval step 29)
  )

(defn begin-rendering []
  (let [current-time (jstime)]
    (js/setTimeout (fn []
                     (render current-time)
                     (request-anim begin-rendering))
                   33)))

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

(defn keyup [event]
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

(defn bind-keys []
  (.keyup (js/$ "body") keyup))

(defn ^:export init []
  "Initializes all the functions required for the game"
  (.log js/console (str "Initializing " @GI))
  (initial-render)
  (begin-stepping)
  (begin-rendering)
  (bind-keys))
        
