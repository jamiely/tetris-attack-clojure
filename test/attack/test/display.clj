(ns attack.test.display
  (:require [attack.display-math :as dispm])
  (:use [clojure.test]))

(defn pt-to-display-pt [rows pt]
  (dispm/pt-to-display-pt {:total-rows rows
                           :block-height 20
                           :block-width 20
                           :display-height 500}
                          pt))

(deftest point-to-display-pt
  (is (= (pt-to-display-pt 1 [1 1])
         [20 480]))
  (is (= (pt-to-display-pt 2 [1 1])
         [20 460]))
  (is (= (pt-to-display-pt 3 [1 1])
         [20 440]))
  (is (= (pt-to-display-pt 2 [1 2])
         [20 480]))
  (is (= (pt-to-display-pt 3 [1 3])
         [20 480])))

