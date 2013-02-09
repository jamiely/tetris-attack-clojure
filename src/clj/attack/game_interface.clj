(ns attack.game-interface
  (:require [attack.game :as game]
            [attack.cursor :as cursor]))

(defn default []
  {:game (game/default)
   :cursor (cursor/default)})

(defn step [{game :game :as gi}]
  (assoc gi :game (game/step game)))
