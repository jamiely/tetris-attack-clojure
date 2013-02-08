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
        {blocks :blocks :as new-grid-orig} (game/grid-add-block-row (game/grid-empty cols))
        ;; Use to change the type of the block (required since when we
        ;; add a row, the block values are random.
        swapped-blocks (map #(assoc % :type :red) blocks)
        new-grid (assoc new-grid-orig :blocks swapped-blocks)
        test-blocks (map #(game/simple-block (game/point % 1) :red)
                         (range 1 (+ cols 1)))]
    (is (= new-grid
           {:blocks test-blocks
            :rows 1
            :cols cols}))))

(deftest mod-clock
  (is (game/mod-clock {:clock 10} 10))
  (is (not (game/mod-clock {:clock 10} 9))))

(deftest step
  (let [g (game/default-game)
        c #(get % :clock)]
        (is (= (c g) 0))
        (is (= (c (game/step g)) 1))
        (is (= (c (game/step (game/step g))) 2))
        ))

(deftest stepline1
  (let [game (assoc (game/default-game) :add-line-ticks 1)
        r #(get (get % :grid) :rows)
        s game/step
        rows 6]
    (is (= (r game) rows))
    (is (= (r (s game)) (+ 1 rows)))
    (is (= (r (s (s game))) (+ 2 rows)))))

(deftest stepline2
  (let [game (assoc (game/default-game) :add-line-ticks 2)
        r #(get (get % :grid) :rows)
        s game/step
        rows 6]
    (is (= (r game) rows))
    (is (= (r (s game)) rows))
    (is (= (r (s (s game))) (+ 1 rows)))
    (is (= (r (s (s (s game)))) (+ 1 rows)))
    (is (= (r (s (s (s (s game))))) (+ 2 rows)))
    ))


