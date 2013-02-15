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
    (is (chk 1 4))
    (is (not (chk 1 1)))))
