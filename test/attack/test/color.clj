(ns attack.test.color
  (:require [attack.color :as color])
  (:use [clojure.test]))

(deftest brighten-values
  (is (= (color/brighten-values '(44 22 00) 0.5)
         '(66 33 00))))

(deftest brighten
  (is (= (color/brighten "#AA0000" 1)
         "#FF0000"))
  (is (= (color/brighten "#880000" 0.5)
         "#CC0000"))
  (is (= (color/brighten "#880000" -0.5)
         "#440000")))

(deftest color-pieces
  (let [col "#FFAA11"]
    (is (= (color/color-parts col)
           '("FF" "AA" "11")))
    (is (= (color/color-values col)
           '(255, 170 17)))))
