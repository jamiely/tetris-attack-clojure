(ns attack.color
  (:require [clojure.string :as str]
            [attack.compat :as compat]))

(defn no-hash [color-str]
  (str/replace-first color-str "#" ""))

(defn color-parts [color-str]
  "Given a string like `#FFAA11`, returns a seq of parts like '(\"FF\" \"AA\" \"11\")."
  (map str/join (partition 2 (no-hash color-str))))

(defn hex-to-int [hex-val]
  (compat/hex-to-int hex-val))

(defn color-values [color-str]
  "Given a string like `#FFAA11`, returns a seq of int values corresponding to each color like '(255 170 17)"
  (map hex-to-int (color-parts color-str)))

(defn color-parts-to-str [color-parts]
  "Given a seq of color parts like '(\"FF\" \"AA\" \"11\"), returns \"#FFAA11\""
  (str "#" (str/upper-case (str/join color-parts))))

(defn color-values-to-str [color-values]
  "Given a seq of color values like '(255 170 17) returns a string \"#FFAA11\""
  (color-parts-to-str (map compat/int-to-hex color-values)))

(defn increase-value-by-pct-with-cap [val pct cap]
  (min (* (+ 1 pct) (+ val 100)) cap))

(defn brighten-values [color-vals pct]
  (map int (map #(increase-value-by-pct-with-cap % pct 255) color-vals)))

(defn brighten [color-str pct]
  (color-values-to-str (brighten-values (color-values color-str)
                                        pct)))

