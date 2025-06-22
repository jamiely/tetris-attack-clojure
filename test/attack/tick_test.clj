(ns attack.tick-test
  (:require [attack.tick :as tick])
  (:use [clojure.test]))

(deftest ticks0?-with-zero-ticks
  (testing "ticks0? returns true when ticks is zero"
    (is (= true (tick/ticks0? {:ticks 0})))
    (is (= true (tick/ticks0? {:ticks 0 :other-key "value"})))))

(deftest ticks0?-with-positive-ticks
  (testing "ticks0? returns false when ticks is positive"
    (is (= false (tick/ticks0? {:ticks 1})))
    (is (= false (tick/ticks0? {:ticks 5})))
    (is (= false (tick/ticks0? {:ticks 100})))))

(deftest ticks0?-with-negative-ticks
  (testing "ticks0? returns false when ticks is negative"
    (is (= false (tick/ticks0? {:ticks -1})))
    (is (= false (tick/ticks0? {:ticks -5})))
    (is (= false (tick/ticks0? {:ticks -100})))))

(deftest ticks0?-with-nil-ticks
  (testing "ticks0? returns false when ticks is nil"
    (is (= false (tick/ticks0? {:ticks nil})))
    (is (= false (tick/ticks0? {})))))

(deftest ticks0?-with-missing-ticks-key
  (testing "ticks0? returns false when ticks key is missing"
    (is (= false (tick/ticks0? {})))
    (is (= false (tick/ticks0? {:other-key "value"})))))

(deftest ticks0?-with-complex-objects
  (testing "ticks0? works with complex objects containing ticks"
    (is (= true (tick/ticks0? {:ticks 0 :x 10 :y 20 :color "red"})))
    (is (= false (tick/ticks0? {:ticks 1 :x 10 :y 20 :color "red"})))
    (is (= false (tick/ticks0? {:x 10 :y 20 :color "red"})))))

(deftest dec-ticks-with-positive-ticks
  (testing "dec-ticks decrements positive ticks by 1"
    (is (= {:ticks 4} (tick/dec-ticks {:ticks 5})))
    (is (= {:ticks 0} (tick/dec-ticks {:ticks 1})))
    (is (= {:ticks 99} (tick/dec-ticks {:ticks 100})))))

(deftest dec-ticks-with-zero-ticks
  (testing "dec-ticks decrements zero ticks to -1"
    (is (= {:ticks -1} (tick/dec-ticks {:ticks 0})))))

(deftest dec-ticks-with-negative-ticks
  (testing "dec-ticks decrements negative ticks further"
    (is (= {:ticks -2} (tick/dec-ticks {:ticks -1})))
    (is (= {:ticks -6} (tick/dec-ticks {:ticks -5})))
    (is (= {:ticks -101} (tick/dec-ticks {:ticks -100})))))

(deftest dec-ticks-with-nil-ticks
  (testing "dec-ticks returns unchanged object when ticks is nil"
    (is (= {:ticks nil} (tick/dec-ticks {:ticks nil})))
    (is (= {:ticks nil :other-key "value"} 
           (tick/dec-ticks {:ticks nil :other-key "value"})))))

(deftest dec-ticks-with-missing-ticks-key
  (testing "dec-ticks returns unchanged object when ticks key is missing"
    (is (= {} (tick/dec-ticks {})))
    (is (= {:other-key "value"} (tick/dec-ticks {:other-key "value"})))))

(deftest dec-ticks-preserves-other-keys
  (testing "dec-ticks preserves all other keys in the object"
    (let [original {:ticks 5 :x 10 :y 20 :color "red" :active true}
          expected {:ticks 4 :x 10 :y 20 :color "red" :active true}]
      (is (= expected (tick/dec-ticks original))))
    
    (let [original {:ticks 0 :name "block" :weight 100}
          expected {:ticks -1 :name "block" :weight 100}]
      (is (= expected (tick/dec-ticks original))))))

(deftest dec-ticks-with-complex-nested-structures
  (testing "dec-ticks works with complex nested data structures"
    (let [original {:ticks 3 
                    :position {:x 5 :y 10} 
                    :properties {:color "blue" :size "large"}
                    :animations [{:type "fade" :duration 500}]}
          expected {:ticks 2 
                    :position {:x 5 :y 10} 
                    :properties {:color "blue" :size "large"}
                    :animations [{:type "fade" :duration 500}]}]
      (is (= expected (tick/dec-ticks original))))))

(deftest dec-ticks-immutability
  (testing "dec-ticks doesn't modify the original object"
    (let [original {:ticks 5 :x 10}
          result (tick/dec-ticks original)]
      (is (= {:ticks 5 :x 10} original))
      (is (= {:ticks 4 :x 10} result))
      (is (not (identical? original result))))))

(deftest tick-integration-workflow
  (testing "Integration of tick functions in a typical workflow"
    (let [block {:ticks 3 :color "red" :x 0 :y 0}]
      ; Start with 3 ticks
      (is (= false (tick/ticks0? block)))
      
      ; Decrement to 2 ticks
      (let [block1 (tick/dec-ticks block)]
        (is (= false (tick/ticks0? block1)))
        (is (= 2 (:ticks block1)))
        
        ; Decrement to 1 tick
        (let [block2 (tick/dec-ticks block1)]
          (is (= false (tick/ticks0? block2)))
          (is (= 1 (:ticks block2)))
          
          ; Decrement to 0 ticks
          (let [block3 (tick/dec-ticks block2)]
            (is (= true (tick/ticks0? block3)))
            (is (= 0 (:ticks block3)))
            
            ; Decrement to -1 ticks
            (let [block4 (tick/dec-ticks block3)]
              (is (= false (tick/ticks0? block4)))
              (is (= -1 (:ticks block4))))))))))

(deftest tick-boundary-conditions
  (testing "Boundary conditions for tick values"
    ; Test with maximum integer values
    (let [max-int Integer/MAX_VALUE
          min-int Integer/MIN_VALUE]
      
      ; Test ticks0? with extreme values
      (is (= false (tick/ticks0? {:ticks max-int})))
      (is (= false (tick/ticks0? {:ticks min-int})))
      
      ; Test dec-ticks with large positive number
      (is (= {:ticks (- max-int 1)} (tick/dec-ticks {:ticks max-int})))
      
      ; Test dec-ticks approaching minimum integer (careful with overflow)
      (when (> min-int (- Integer/MIN_VALUE 1))
        (is (= {:ticks (- min-int 1)} (tick/dec-ticks {:ticks min-int})))))))

(deftest tick-type-safety
  (testing "Functions handle different data types gracefully"
    ; Test with string ticks - should throw ClassCastException
    (is (thrown? ClassCastException (tick/ticks0? {:ticks "5"})))
    (is (thrown? ClassCastException (tick/dec-ticks {:ticks "5"})))
    
    ; Test with double ticks - these actually work in Clojure arithmetic
    (is (= false (tick/ticks0? {:ticks 5.5})))
    (is (= {:ticks 4.5} (tick/dec-ticks {:ticks 5.5})))))

(deftest tick-multiple-operations
  (testing "Multiple tick operations maintain consistency"
    (let [original {:ticks 10 :id "test-block"}
          operations 5]
      (loop [current original
             remaining operations]
        (if (zero? remaining)
          (is (= 5 (:ticks current)))
          (recur (tick/dec-ticks current) (dec remaining)))))))