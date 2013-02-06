(ns attack.hello
  (:require [attack.game :as game]))
(defn ^:export greet [n]
  (str "Hello " n))
