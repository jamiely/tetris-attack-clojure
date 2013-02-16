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
        grid {:blocks [fall target-block next-block]}
        uniq-blocks (fn [{bs :blocks}] (into #{} bs))]
    (is (= (grid/swap-empty grid target-block (p 1 3))
           grid))
    (is (= (grid/swap-empty grid next-block (p 1 4))
           grid))
    (is (= (uniq-blocks (grid/swap-empty grid
                                         (bpt 2 5)
                                         (p 1 5)))
           (uniq-blocks (assoc grid :blocks [fall
                                             target-block
                                             next-block
                                             (blk/new-swap-empty (bpt 2 5) (p 1 5))]))))))

