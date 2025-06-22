(ns attack.color-test
  (:require [attack.color :as color])
  (:use [clojure.test]))

(deftest brighten-values
  (is (= (color/brighten-values '(44 22 00) 0.5)
         '(216 183 150))))

(deftest brighten
  (is (= (color/brighten "#AA0000" 1)
         "#FFC8C8"))
  (is (= (color/brighten "#880000" 0.5)
         "#FF9696"))
  (is (= (color/brighten "#880000" -0.5)
         "#763232")))

(deftest color-pieces
  (let [col "#FFAA11"]
    (is (= (color/color-parts col)
           '("FF" "AA" "11")))
    (is (= (color/color-values col)
           '(255 170 17)))))