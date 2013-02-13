(ns attack.compat
  (:require [cljs.reader :as reader]))

(defn compat-read-string [val]
  (reader/read-string val))
