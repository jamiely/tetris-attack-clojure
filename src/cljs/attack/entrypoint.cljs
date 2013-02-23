(ns attack.entrypoint
  (:require [attack.game-interface :as gi]
            [attack.cursor :as cursor]
            [attack.display :as disp]))

(def GI (atom (gi/default)))
  
(defn initial-render []
  (disp/draw-grid))

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
  ;;(js/setInterval step 29)
  )

(defn jstime []
  (.getTime (new js/Date)))

(defn begin-rendering []
  (let [current-time (jstime)]
    (js/setTimeout (fn []
                     (step)
                     (render current-time)
                     (begin-rendering))
                   31)))

(defn which [num]
  (case num
    13 :ENTER
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
               :QMARK disp/inspect
               identity)]
    (swap! GI func)))

(defn restart [_]
  (gi/default))

(defn bind-keys []
  (.keyup (js/$ "body") keyup))

(defn ^:export init []
  "Initializes all the functions required for the game"
  (.log js/console (str "Initializing " @GI))
  (initial-render)
  (begin-stepping)
  (begin-rendering)
  (bind-keys))
        
