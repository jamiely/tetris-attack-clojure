(ns attack.test.core
  (:use [attack.core])
  (:require [attack.game :as game])
  (:use [clojure.test]))

(deftest point
  (is (= (game/point 1 2) [1 2]) "No tests have been written."))

(deftest simple-block
  (is (= (game/simple-block (game/point 1 2) :red)
         {:type :red :position [1 2]})))

(deftest complex-block
  (is (= (game/complex-block [1 2 3])
         {:blocks [1 2 3]})))


(deftest grid-empty
  (is (= (game/grid-empty 6)
         {:blocks []
          :rows 0
          :cols 6})))

(deftest grid-add-row
  (let [cols 6
        grid (game/grid-empty cols)
        {new-blocks :blocks new-rows :rows new-cols :cols} (game/grid-add-block-row grid)
        ;; Use to change the type of the block (required since when we add a row, the block values
        ;; are random.
        swap-block-type (fn [new-type {pos :position type :type}] {:position pos :type new-type})
        swapped-blocks (map #(swap-block-type :red %) new-blocks)
        new-grid {:blocks swapped-blocks :rows new-rows :cols new-cols}
        test-blocks (map #(game/simple-block (game/point % 1) :red)
                         (range 1 (+ cols 1)))]
    (is (= new-grid
           {:blocks test-blocks
            :rows 1
            :cols cols}))))
