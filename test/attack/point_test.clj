(ns attack.point-test
  (:use [attack.point])
  (:use [clojure.test]))

(deftest test-point-creation
  "Test basic point creation"
  (is (= (point 0 0) [0 0]) "Point creation with zeros")
  (is (= (point 1 2) [1 2]) "Point creation with positive values")
  (is (= (point -1 -2) [-1 -2]) "Point creation with negative values")
  (is (= (point 0 -5) [0 -5]) "Point creation with mixed signs")
  (is (= (point 100 200) [100 200]) "Point creation with large values"))

(deftest test-directional-vectors
  "Test basic directional vector functions"
  (is (= (up) [0 -1]) "Up direction vector")
  (is (= (down) [0 1]) "Down direction vector") 
  (is (= (left) [-1 0]) "Left direction vector")
  (is (= (right) [1 0]) "Right direction vector"))

(deftest test-point-add
  "Test point addition functionality"
  (is (= (point-add [0 0] [0 0]) [0 0]) "Adding zero points")
  (is (= (point-add [1 2] [3 4]) [4 6]) "Adding positive points")
  (is (= (point-add [-1 -2] [-3 -4]) [-4 -6]) "Adding negative points")
  (is (= (point-add [1 -2] [-3 4]) [-2 2]) "Adding mixed sign points")
  (is (= (point-add [0 0] [5 -3]) [5 -3]) "Adding with zero point")
  (is (= (point-add [100 200] [-50 -100]) [50 100]) "Adding large values"))

(deftest test-above
  "Test above function (moving point up)"
  (is (= (above [0 0]) [0 -1]) "Above origin")
  (is (= (above [5 5]) [5 4]) "Above positive point")
  (is (= (above [-3 -3]) [-3 -4]) "Above negative point")
  (is (= (above [0 -10]) [0 -11]) "Above point with negative y")
  (is (= (above [10 0]) [10 -1]) "Above point with zero y"))

(deftest test-below
  "Test below function (moving point down)"
  (is (= (below [0 0]) [0 1]) "Below origin")
  (is (= (below [5 5]) [5 6]) "Below positive point")
  (is (= (below [-3 -3]) [-3 -2]) "Below negative point")
  (is (= (below [0 10]) [0 11]) "Below point with positive y")
  (is (= (below [10 0]) [10 1]) "Below point with zero y"))

(deftest test-before
  "Test before function (moving point left)"
  (is (= (before [0 0]) [-1 0]) "Before origin")
  (is (= (before [5 5]) [4 5]) "Before positive point")
  (is (= (before [-3 -3]) [-4 -3]) "Before negative point")
  (is (= (before [-10 0]) [-11 0]) "Before point with negative x")
  (is (= (before [0 10]) [-1 10]) "Before point with zero x"))

(deftest test-after
  "Test after function (moving point right)"
  (is (= (after [0 0]) [1 0]) "After origin")
  (is (= (after [5 5]) [6 5]) "After positive point")
  (is (= (after [-3 -3]) [-2 -3]) "After negative point")
  (is (= (after [10 0]) [11 0]) "After point with positive x")
  (is (= (after [0 10]) [1 10]) "After point with zero x"))

(deftest test-horizontal
  "Test horizontal direction collection"
  (let [h (horizontal)]
    (is (= (count h) 2) "Horizontal collection has 2 elements")
    (is (some #(= % (left)) h) "Contains left direction")
    (is (some #(= % (right)) h) "Contains right direction")
    (is (= h [[-1 0] [1 0]]) "Correct horizontal directions")))

(deftest test-vertical
  "Test vertical direction collection"
  (let [v (vertical)]
    (is (= (count v) 2) "Vertical collection has 2 elements")
    (is (some #(= % (down)) v) "Contains down direction")
    (is (some #(= % (up)) v) "Contains up direction")
    (is (= v [[0 1] [0 -1]]) "Correct vertical directions")))

(deftest test-directions
  "Test all directions collection"
  (let [dirs (directions)]
    (is (= (count dirs) 4) "Directions collection has 4 elements")
    (is (some #(= % (left)) dirs) "Contains left direction")
    (is (some #(= % (right)) dirs) "Contains right direction")
    (is (some #(= % (up)) dirs) "Contains up direction")
    (is (some #(= % (down)) dirs) "Contains down direction")
    (is (= dirs [[-1 0] [1 0] [0 1] [0 -1]]) "Correct order of all directions")))

(deftest test-directional-consistency
  "Test that directional functions work consistently with point-add"
  (let [origin [0 0]
        test-point [5 5]]
    (is (= (above test-point) (point-add test-point (up))) "Above consistent with point-add and up")
    (is (= (below test-point) (point-add test-point (down))) "Below consistent with point-add and down")
    (is (= (before test-point) (point-add test-point (left))) "Before consistent with point-add and left")
    (is (= (after test-point) (point-add test-point (right))) "After consistent with point-add and right")))

(deftest test-movement-chains
  "Test chaining multiple movements"
  (let [start [0 0]]
    (is (= (-> start above above) [0 -2]) "Moving up twice")
    (is (= (-> start below below) [0 2]) "Moving down twice")
    (is (= (-> start before before) [-2 0]) "Moving left twice")
    (is (= (-> start after after) [2 0]) "Moving right twice")
    (is (= (-> start above after) [1 -1]) "Moving up then right")
    (is (= (-> start below before) [-1 1]) "Moving down then left")))

(deftest test-roundtrip-movements
  "Test that opposite movements cancel out"
  (let [test-point [3 7]]
    (is (= (-> test-point above below) test-point) "Up then down returns to original")
    (is (= (-> test-point below above) test-point) "Down then up returns to original")
    (is (= (-> test-point before after) test-point) "Left then right returns to original")
    (is (= (-> test-point after before) test-point) "Right then left returns to original")))

(deftest test-boundary-conditions
  "Test behavior with extreme values"
  (let [large-pos [Integer/MAX_VALUE Integer/MAX_VALUE]
        large-neg [Integer/MIN_VALUE Integer/MIN_VALUE]]
    ; Note: These tests may overflow, but we test the behavior
    (is (vector? (above large-pos)) "Above works with large positive values")
    (is (vector? (below large-neg)) "Below works with large negative values")
    (is (vector? (before large-pos)) "Before works with large positive values")
    (is (vector? (after large-neg)) "After works with large negative values")))

(deftest test-edge-case-zero-handling
  "Test behavior with zero coordinates"
  (let [zero-x [0 5]
        zero-y [5 0]
        zero-both [0 0]]
    (is (= (above zero-x) [0 4]) "Above with zero x coordinate")
    (is (= (below zero-y) [5 1]) "Below with zero y coordinate")
    (is (= (before zero-both) [-1 0]) "Before with both coordinates zero")
    (is (= (after zero-both) [1 0]) "After with both coordinates zero")))

(deftest test-point-add-identity
  "Test point addition identity properties"
  (let [test-points [[0 0] [1 2] [-3 4] [100 -200]]]
    (doseq [p test-points]
      (is (= (point-add p [0 0]) p) (str "Adding zero point to " p " is identity"))
      (is (= (point-add [0 0] p) p) (str "Adding " p " to zero point is identity")))))

(deftest test-point-add-commutativity
  "Test that point addition is commutative"
  (let [test-pairs [[[1 2] [3 4]]
                    [[-1 -2] [5 6]]
                    [[0 0] [7 8]]
                    [[-10 15] [-5 -20]]]]
    (doseq [[p1 p2] test-pairs]
      (is (= (point-add p1 p2) (point-add p2 p1)) 
          (str "Point addition is commutative for " p1 " and " p2)))))

(deftest test-point-add-associativity
  "Test that point addition is associative"
  (let [test-triples [[[1 2] [3 4] [5 6]]
                      [[-1 -2] [0 0] [7 8]]
                      [[10 -5] [-3 2] [1 1]]]]
    (doseq [[p1 p2 p3] test-triples]
      (is (= (point-add (point-add p1 p2) p3) 
             (point-add p1 (point-add p2 p3)))
          (str "Point addition is associative for " p1 ", " p2 ", and " p3)))))