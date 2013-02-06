(ns attack.display
  (:require [attack.game :as game]))

(defn ^:export init[]
  (game/default-game))

(defn ^:export render[game]
  (js/console.log (str "Hello " game)))
