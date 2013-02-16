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
  
(defn render []
  (disp/render @GI))

(defn begin-stepping []
  (js/setInterval step 25))

(defn begin-rendering []
  (js/setInterval render 100))

(defn which [num]
  (case num
    13 :ENTER
    39 :RIGHT
    37 :LEFT
    38 :UP
    32 :SPACE
    40 :DOWN
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
               :QMARK disp/inspect
               identity)]
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
        
