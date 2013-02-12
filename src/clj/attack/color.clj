(ns attack.color
  (:require [clojure.string :as str]))

(defn no-hash [color-str]
  (str/replace-first color-str "#" ""))

(defn color-parts [color-str]
  (map str/join (partition 2 (no-hash color-str))))

(defn hex-to-int [hex-val]
  (read-string hex-val))

(defn color-values [color-str]
  (map #(hex-to-int (str "0x" %)) (color-parts color-str)))

(defn color-parts-to-str [color-parts]
  (str "#" (str/upper-case (str/join color-parts))))

(defn color-values-to-str [color-values]
  (color-parts-to-str (map #(format "%02x" %) color-values)))

(defn increase-value-by-pct-with-cap [val pct cap]
  (min (* (+ 1 pct) val) cap))

(defn brighten-values [color-vals pct]
  (map int (map #(increase-value-by-pct-with-cap % pct 255) color-vals)))

(defn brighten [color-str pct]
  (color-values-to-str (brighten-values (color-values color-str)
                                        pct)))

