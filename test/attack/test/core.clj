(ns attack.test.core
  (:use [attack.core])
  (:require [attack.game :as game]
            [attack.point :as pt]
            [attack.block :as blk]
            [attack.grid :as grid]
            [attack.tick :as tick]
            [attack.cursor :as cursor]
            [attack.game-interface :as gi])
  (:use [clojure.test]))

(deftest point
  (is (= (pt/point 1 2) [1 2]) "No tests have been written."))

(deftest simple-block
  (is (= (blk/new-simple (pt/point 1 2) :red)
         {:type :red :position [1 2]})))

(deftest complex-block
  (is (= (blk/new-complex [1 2 3])
         {:blocks [1 2 3]})))

(deftest grid-empty
  (is (= (grid/empty-grid 6)
         {:blocks []
          :rows 0
          :cols 6})))

(deftest grid-add-row
  "Tests adding a new row to a grid"
  (let [cols 6
        {blocks :blocks :as new-grid-orig} (grid/add-row (grid/empty-grid cols))
        ;; Use to change the type of the block (required since when we
        ;; add a row, the block values are random.
        swapped-blocks (map #(assoc % :type :red) blocks)
        new-grid (assoc new-grid-orig :blocks swapped-blocks)
        test-blocks (map #(blk/new-simple (pt/point % 1) :red)
                         (range 1 (+ cols 1)))]
    (is (= new-grid
           {:blocks test-blocks
            :rows 1
            :cols cols}))))

(deftest mod-clock
  "Test an internal function that is used to test clock ticks"
  (is (game/mod-clock? {:clock 10} 10))
  (is (not (game/mod-clock? {:clock 10} 9))))

(deftest step-clock
  "Tests that the clock is incremented when the game steps"
  (let [g (game/default)
        c #(get % :clock)]
        (is (= (c g) 0))
        (is (= (c (game/step g)) 1))
        (is (= (c (game/step (game/step g))) 2))
        ))

(deftest stepline1
  "Tests that a line is added every 1 step"
  (let [game (assoc (game/default) :add-line-ticks 1)
        r #(get (get % :grid) :rows)
        s game/step
        rows 6]
    (is (= (r game) rows))
    (is (= (r (s game)) (+ 1 rows)))
    (is (= (r (s (s game))) (+ 2 rows)))))

(deftest stepline2
  "Tests that a line is added every 2 steps"
  (let [game (assoc (game/default) :add-line-ticks 2)
        r #(get (get % :grid) :rows)
        s game/step
        rows 6]
    (is (= (r game) rows))
    (is (= (r (s game)) rows))
    (is (= (r (s (s game))) (+ 1 rows)))
    (is (= (r (s (s (s game)))) (+ 1 rows)))
    (is (= (r (s (s (s (s game))))) (+ 2 rows)))
    ))

(deftest swap-block 
  (let [ticks 20
        blk #(blk/new-simple (pt/point %1 %2) :notype)
        a (blk 1 2)
        b (blk 3 4)
        new-block (blk/new-swap a b ticks)]
    (is (= new-block
           {:blocks [a b]
            :ticks ticks
            :type :swap}))))

(deftest dec-ticks
  (let [t #(get % :ticks)
        t! (fn [n] {:ticks n})
        things (map t! (range 1 6))]
    (is (= (map #(t (tick/dec-ticks %)) things)
           (range 0 5)))))
    
(deftest resolve-swap-blocks
  "When ticks reaches 0, any swap-blocks should split into regular blocks"
  (let [bt #(blk/new-simple (pt/point %1 %2) %3)
        b #(bt %1 %2 :notype)
        sb (fn [blks ticks] {:type :swap :ticks ticks :blocks blks})
        f-blks (fn [ticks] [(b 1 1) (b 1 2) (sb [(bt 3 4 :red)(bt 5 6 :blue)] ticks)])
        blocks (f-blks 0)
        nodissolve-blocks (f-blks 1)]
    (is (= (blk/resolve-swaps blocks)
           [(b 1 1) (b 1 2) (bt 5 6 :red) (bt 3 4 :blue)]))
    (is (= (blk/resolve-swaps nodissolve-blocks)
           nodissolve-blocks))))

(deftest grid-swap-blocks
  "Tests creating swap blocks out of two other blocks"
  (let [blk #(blk/new-simple (pt/point %1 %2) :notype)
        a (blk 1 2)
        b (blk 3 4)
        c (blk 5 6)
        grid {:blocks [a b c]}]
    (is (= (grid/swap-blocks grid a b)
           {:blocks [{:blocks [a b] :ticks 20 :type :swap} c]}))))

(deftest grid-block-at
  (let [blk #(blk/new-simple (pt/point %1 %2) :notype)
        [a b c] [(blk 1 2) (blk 2 3) (blk 4 5)]
        grid {:blocks [a b c]}
        blk-at #(grid/block-at grid (pt/point %1 %2))
        ]
    (is (= (blk-at 2 3) b))
    (is (= (blk-at 4 5) c))
    (is (= (blk-at 9 9) nil))))

(deftest gi-step
  (let [g (gi/default)]
    (is (not (nil? (gi/step g))))))
