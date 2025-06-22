(ns attack.cursor-test
  (:require [attack.cursor :as cursor]
            [attack.point :as pt])
  (:use [clojure.test]))

(deftest default-cursor
  "Test that the default cursor is created with the correct structure"
  (let [default-cursor (cursor/default)]
    (is (map? default-cursor) "Cursor should be a map")
    (is (contains? default-cursor :origin) "Cursor should contain an :origin key")
    (is (= (:origin default-cursor) (pt/point 2 15)) "Default cursor origin should be at point [2, 15]")))

(deftest default-cursor-origin-type
  "Test that the cursor origin is a valid point"
  (let [cursor (cursor/default)
        origin (:origin cursor)]
    (is (vector? origin) "Origin should be a vector")
    (is (= (count origin) 2) "Origin should have exactly 2 elements")
    (is (every? number? origin) "Origin coordinates should be numbers")))

(deftest default-cursor-origin-coordinates
  "Test the specific coordinates of the default cursor"
  (let [cursor (cursor/default)
        [x y] (:origin cursor)]
    (is (= x 2) "Default cursor x-coordinate should be 2")
    (is (= y 15) "Default cursor y-coordinate should be 15")))

(deftest default-cursor-immutability
  "Test that calling default multiple times returns equivalent cursors"
  (let [cursor1 (cursor/default)
        cursor2 (cursor/default)]
    (is (= cursor1 cursor2) "Multiple calls to default should return equivalent cursors")
    (is (not (identical? cursor1 cursor2)) "Multiple calls should return different object instances")))

(deftest default-cursor-structure-completeness
  "Test that the default cursor contains all expected keys"
  (let [cursor (cursor/default)
        expected-keys #{:origin}]
    (is (= (set (keys cursor)) expected-keys) "Cursor should contain exactly the expected keys")))

(deftest cursor-origin-point-compatibility
  "Test that cursor origin is compatible with point operations"
  (let [cursor (cursor/default)
        origin (:origin cursor)]
    ; Test that origin works with point functions
    (is (= (pt/above origin) [2 14]) "Should be able to get point above cursor origin")
    (is (= (pt/below origin) [2 16]) "Should be able to get point below cursor origin")
    (is (= (pt/before origin) [1 15]) "Should be able to get point before cursor origin")
    (is (= (pt/after origin) [3 15]) "Should be able to get point after cursor origin")))

(deftest cursor-origin-boundary-position
  "Test that the default cursor origin is positioned appropriately for game boundaries"
  (let [cursor (cursor/default)
        [x y] (:origin cursor)]
    ; These tests assume reasonable game grid boundaries
    (is (>= x 0) "Cursor x-coordinate should be non-negative")
    (is (>= y 0) "Cursor y-coordinate should be non-negative")
    ; Test that coordinates are reasonable for a typical game grid
    (is (< x 20) "Cursor x-coordinate should be within reasonable grid bounds")
    (is (< y 30) "Cursor y-coordinate should be within reasonable grid bounds")))

(deftest cursor-serialization
  "Test that cursor can be serialized and maintains structure"
  (let [cursor (cursor/default)
        cursor-str (str cursor)]
    (is (string? cursor-str) "Cursor should be convertible to string")
    (is (not (empty? cursor-str)) "Cursor string representation should not be empty")))

(deftest cursor-with-point-operations
  "Test cursor origin with various point operations to ensure compatibility"
  (let [cursor (cursor/default)
        origin (:origin cursor)]
    ; Test point-add functionality
    (is (= (pt/point-add origin (pt/up)) [2 14]) "Should support point addition with up direction")
    (is (= (pt/point-add origin (pt/down)) [2 16]) "Should support point addition with down direction")
    (is (= (pt/point-add origin (pt/left)) [1 15]) "Should support point addition with left direction")
    (is (= (pt/point-add origin (pt/right)) [3 15]) "Should support point addition with right direction")))

(deftest cursor-edge-cases
  "Test cursor behavior with edge cases and boundary conditions"
  (let [cursor (cursor/default)]
    ; Test that cursor is not nil
    (is (not (nil? cursor)) "Cursor should not be nil")
    ; Test that origin is not nil
    (is (not (nil? (:origin cursor))) "Cursor origin should not be nil")
    ; Test that cursor can be used in conditional expressions
    (is (if cursor true false) "Cursor should be truthy in conditional expressions")))