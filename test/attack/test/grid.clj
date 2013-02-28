(ns attack.test.grid
  (:require [attack.grid :as grid]
            [attack.block :as blk]
            [attack.point :as pt])
  (:use [clojure.test]))

(defn bpt [x y]
  (blk/new-simple (pt/point x y) :none)) 

(deftest occupied-at-simple
  (let [blocks [(bpt 1 1)]
        grid {:blocks blocks}]
    (is (grid/occupied-at? grid (pt/point 1 1)))
    (is (not (grid/occupied-at? grid (pt/point 1 2))))))

(deftest occupied-at-complex
  (let [fall (->> (bpt 1 1)
                  blk/new-falling)
        dis (blk/new-disappear [(bpt 1 2) (bpt 1 3)])
        simp (bpt 1 4)
        grid {:blocks [fall dis simp]}
        chk #(grid/occupied-at? grid (pt/point %1 %2))]
    (is (chk 1 2))
    (is (chk 1 3))
    (is (chk 1 4))))

(deftest occupied-points-falling
  (let [p pt/point
        fall (->> (bpt 1 1)
                  blk/new-falling)
        grid {:blocks [fall]}]
    (is (= (grid/all-occupied-pts grid)
           [(p 1 1) (p 1 2)]))))

(deftest occupied-at-falling
  (let [p pt/point
        fall (->> (bpt 1 1)
                  blk/new-falling)
        grid {:blocks [fall]}]
    (is (grid/occupied-at? grid (p 1 1)))
    (is (grid/occupied-at? grid (p 1 2)))
    (is (not (grid/occupied-at-without-falling? grid (p 1 1))))
    (is (not (grid/occupied-at-without-falling? grid (p 1 2))))))
  
(deftest swap-empty-into-falling
  "Test the behavior of swapping an empty block into the spot where a block is falling"
  (let [p pt/point
        target-block (bpt 2 3)
        next-block (bpt 2 4)
        fall (->> (bpt 1 3) blk/new-falling)
        grid (grid/replace-blocks (grid/empty-grid 6) [fall target-block next-block])
        uniq-blocks (fn [{bs :blocks}] (into #{} bs))]
    (is (= (grid/swap-empty grid target-block (p 1 3))
           grid))
    (is (= (grid/swap-empty grid next-block (p 1 4))
           grid))
    (is (= (uniq-blocks (grid/swap-empty grid
                                         (bpt 2 5)
                                         (p 1 5)))
           (uniq-blocks (grid/replace-blocks grid [fall
                                                   target-block
                                                   next-block
                                                   (blk/new-swap-empty (bpt 2 5) (p 1 5))]))))))


(deftest line-count
  (let [blocks [(bpt 1 1) (bpt 1 2) (bpt 1 3)]
        grid {:blocks blocks}]
    (is (= (grid/line-count grid)
           3))))

(deftest adding-blocks
  "Tests adding a block to the grid"
  (let [grid (grid/empty-grid 6)
        block (blk/new-simple (pt/point 1 1) :red)]
    (is (= (get (grid/add-blocks grid #{block}) :blocks)
           [block]))))

(deftest removing-blocks
  "Tests removing a block from the grid"
  (let [grid (grid/empty-grid 6)
        block (blk/new-simple (pt/point 1 1) :red)
        new-grid (grid/add-blocks grid #{block})]
    (is (= (get grid :blocks)
           (get (grid/remove-blocks new-grid #{block}) :blocks)))))

(deftest swap-blocks
  "Tests creating swap blocks out of two other blocks"
  (let [blk #(blk/new-simple (pt/point %1 %2) :notype)
        a (blk 1 2)
        b (blk 3 4)
        c (blk 5 6)
        grid {:blocks [a b c]}]
    (is (= (get (grid/swap-blocks grid a b) :blocks)
           [c {:blocks [a b] :ticks (blk/swap-block-default-ticks) :type :swap}]))))

(deftest block-at
  (let [blk #(blk/new-simple (pt/point %1 %2) :notype)
        [a b c] [(blk 1 2) (blk 2 3) (blk 4 5)]
        grid (-> (grid/empty-grid 6)
                 (grid/add-blocks #{a b c}))
        blk-at #(grid/block-at grid (pt/point %1 %2))]
    (is (= (blk-at 2 3) b))
    (is (= (blk-at 4 5) c))
    (is (= (blk-at 9 9) nil))))

(deftest match-blocks-horizontal
  "Tests removing matches from a grid"
  (let [b #(blk/new-simple (pt/point %1 %2) %3)
        blocks #{(b 1 1 :red) (b 2 1 :red) (b 3 1 :red) (b 4 1 :blue)}
        grid (-> (grid/empty-grid 6)
                 (grid/add-blocks blocks))
        matches #{#{(b 1 1 :red) (b 2 1 :red) (b 3 1 :red)}}]
    (is (= (grid/match-sets grid)
           matches))))

(deftest match-blocks-vertical
  "Tests removing matches from a grid"
  (let [b #(blk/new-simple (pt/point %1 %2) %3)
        blocks #{(b 1 1 :red) (b 1 2 :red) (b 1 3 :red) (b 1 4 :blue)}
        grid (-> (grid/empty-grid 6)
                 (grid/add-blocks blocks))
        matches #{#{(b 1 1 :red) (b 1 2 :red) (b 1 3 :red)}}]
    (is (= (grid/match-sets grid)
           matches))))


(deftest no-match-blocks-vertical
  "Tests removing matches from a grid"
  (let [b #(blk/new-simple (pt/point %1 %2) %3)
        blocks [(b 1 1 :red) (b 1 2 :blue) (b 1 3 :red) (b 1 4 :blue)]
        grid {:blocks blocks}
        matches #{}]
    (is (= (grid/match-sets grid)
           matches))))

(deftest match-blocks-vertical-and-horizontal
  "Tests removing matches from a grid"
  (let [b #(blk/new-simple (pt/point %1 %2) %3)
        blocks #{(b 1 1 :red)
                (b 1 2 :red) (b 1 3 :red) (b 1 4 :blue)
                (b 2 1 :red) (b 3 1 :red) (b 4 1 :blue)}
        grid (-> (grid/empty-grid 6)
                 (grid/add-blocks blocks))
        matches #{#{(b 1 1 :red) (b 1 2 :red) (b 1 3 :red) (b 2 1 :red) (b 3 1 :red)}}]
    (is (= (grid/match-sets grid)
           matches))))

(deftest condense-matchset
  (let [orig-match-set #{#{{:type :red, :position [3 1]}
                           {:type :red, :position [1 3]}
                           {:type :red, :position [1 2]}
                           {:type :red, :position [1 1]}
                           {:type :red, :position [2 1]}}
                         #{{:type :red, :position [3 1]}
                           {:type :red, :position [1 1]}
                           {:type :red, :position [2 1]}}
                         #{{:type :red, :position [1 3]}
                           {:type :red, :position [1 2]}
                           {:type :red, :position [1 1]}}}
        expected-match-set #{#{{:type :red, :position [3 1]}
                               {:type :red, :position [1 3]}
                               {:type :red, :position [1 2]}
                               {:type :red, :position [1 1]}
                               {:type :red, :position [2 1]}}}]
    (is (= (grid/condense-match-set2 orig-match-set)
           expected-match-set))))



(deftest empty
  (is (= (grid/empty-grid 6)
         {:blocks []
          :rows 0
          :cols 6
          :blocks-hash {}})))

(deftest add-row
  "Tests adding a new row to a grid"
  (let [cols 6
        {blocks :blocks :as new-grid-orig} (grid/add-row (grid/empty-grid cols))
        ;; Use to change the type of the block (required since when we
        ;; add a row, the block values are random.
        swapped-blocks (map #(assoc % :type :red) blocks)
        new-grid (assoc new-grid-orig :blocks swapped-blocks)
        test-blocks (map #(blk/new-simple (pt/point % 1) :red)
                         (range 1 (+ cols 1)))]
    (is (= (get new-grid :blocks)
           test-blocks))
    (is (= (get new-grid :rows)
           1))))

(deftest disappear-blocks
  "Tests creating disappear blocks"
  (let [[a b c d :as blocks] [(bpt 1 1) (bpt 2 2) (bpt 3 3) (bpt 4 4)]
        grid (-> (grid/empty-grid 6) (grid/replace-blocks blocks))
        new-grid (grid/disappear-blocks grid [b c])]
    (is (= (into #{} (get new-grid :blocks))
           #{(blk/new-disappear [b c]) a d}))))

(deftest garbage-block-bottoms
  (let [p pt/point
        gb (blk/new-garbage (p 2 2) 3 1)]
    (is (= (grid/garbage-block-bottom-points gb)
           [(p 2 2) (p 3 2) (p 4 2)]))))

(deftest should-garbage-block-fall-1
  "Tests whether a garbage block should fall"
  (let [gb (blk/new-garbage (pt/point 2 2) 1 1)
        grid (-> (grid/default 3 3)
                 (assoc :blocks []) ;; clear all the blocks (as if they've been matched)
                 (grid/add-blocks #{gb}))]
    (is (true? (grid/should-garbage-block-fall? grid gb)))))

(deftest should-garbage-block-fall-2
  "Tests whether a garbage block should fall"
  (let [orig (pt/point 2 2)
        gb (blk/new-garbage orig 1 1)
        simp (blk/new-simple (pt/below orig) :none)
        grid (-> (grid/default 3 3)
                 (assoc :blocks []) ;; clear all the blocks (as if they've been matched)
                 (grid/add-blocks #{gb simp}))]
    (is (false? (grid/should-garbage-block-fall? grid gb)))))

(deftest should-garbage-block-fall-3
  "Tests whether a garbage block should fall"
  (let [orig (pt/point 2 2)
        b (pt/after orig)
        c (pt/after b)
        gb (blk/new-garbage orig 3 1)
        block-below #(blk/new-simple (pt/below %) :none)
        blocks (into #{} (map block-below [b c]))
        grid (-> (grid/default 4 4)
                 (assoc :blocks []) ;; clear all the blocks (as if they've been matched)
                 (grid/add-blocks (conj blocks gb)))]
    (is (false? (grid/should-garbage-block-fall? grid gb)))))

(deftest should-garbage-block-fall-3
  "Tests whether a garbage block should fall. It shouldn't fall unless there's nothing below"
  (let [orig (pt/point 2 2)
        b (pt/after orig)
        c (pt/after b)
        gb (blk/new-garbage orig 3 1)
        block-below #(blk/new-simple (pt/below (pt/below %)) :none)
        blocks (into #{} (map block-below [orig b c]))
        grid (-> (grid/default 4 4)
                 (assoc :blocks []) ;; clear all the blocks (as if they've been matched)
                 (grid/add-blocks (conj blocks gb)))]
    (is (true? (grid/should-garbage-block-fall? grid gb)))))





