(ns attack.test.block
  (:require [attack.block :as blk]
            [attack.point :as pt]
            [attack.tick :as tick])
  (:use [clojure.test]))

;; Test block type functions
(deftest test-types
  "Test that types returns a consistent list of block types"
  (let [types (blk/types)]
    (is (= 7 (count types)) "Should return 7 block types")
    (is (every? string? types) "All types should be strings")
    (is (= types ["#996633" "#FFFF00" "#FF6699" "#00FFFF" "#00FF00" "#9900CC" "#FF0000"])
        "Types should be in the expected order")))

(deftest test-rand-type
  "Test that rand-type returns a valid block type"
  (let [valid-types (set (blk/types))
        random-type (blk/rand-type)]
    (is (contains? valid-types random-type)
        "Random type should be one of the valid types")))

;; Test block creation functions
(deftest test-new-simple
  "Test creation of simple blocks"
  (let [pos (pt/point 1 2)
        type "#FF0000"
        block (blk/new-simple pos type)]
    (is (= block {:type type :position pos})
        "Simple block should have correct type and position")))

(deftest test-new-complex
  "Test creation of complex blocks"
  (let [blocks [(blk/new-simple (pt/point 1 1) "#FF0000")
                (blk/new-simple (pt/point 1 2) "#FF0000")]
        complex-block (blk/new-complex blocks)]
    (is (= complex-block {:blocks blocks})
        "Complex block should contain the provided blocks")))

(deftest test-new-swap
  "Test creation of swap blocks"
  (let [a (blk/new-simple (pt/point 1 1) "#FF0000")
        b (blk/new-simple (pt/point 2 2) "#00FF00")
        swap-block (blk/new-swap a b)]
    (is (= (:blocks swap-block) [a b]) "Swap block should contain both blocks")
    (is (= (:type swap-block) :swap) "Swap block should have :swap type")
    (is (= (:ticks swap-block) (blk/swap-block-default-ticks))
        "Swap block should have default ticks")))

(deftest test-swap-block-default-ticks
  "Test that swap block default ticks returns expected value"
  (is (= (blk/swap-block-default-ticks) 5)
      "Default swap ticks should be 5"))

(deftest test-new-swap-empty
  "Test creation of swap-empty blocks"
  (let [block (blk/new-simple (pt/point 1 1) "#FF0000")
        pos (pt/point 2 2)
        swap-empty (blk/new-swap-empty block pos)]
    (is (= (:type swap-empty) :swap-empty) "Should have :swap-empty type")
    (is (= (:block swap-empty) block) "Should contain the original block")
    (is (= (:into-position swap-empty) pos) "Should have correct target position")
    (is (= (:ticks swap-empty) (blk/swap-block-default-ticks))
        "Should have default ticks")))

(deftest test-new-garbage
  "Test creation of garbage blocks"
  (let [pos (pt/point 3 4)
        length 2
        height 3
        garbage (blk/new-garbage pos length height)]
    (is (= (:type garbage) :garbage) "Should have :garbage type")
    (is (= (:position garbage) pos) "Should have correct position")
    (is (= (:length garbage) length) "Should have correct length")
    (is (= (:height garbage) height) "Should have correct height")))

(deftest test-dissolve-block-default-ticks
  "Test dissolve block default ticks"
  (let [block (blk/new-simple (pt/point 1 1) "#FF0000")]
    (is (= (blk/dissolve-block-default-ticks block) 30)
        "Default dissolve ticks should be 30")))

(deftest test-garbage-block-points
  "Test generation of points for garbage blocks"
  (let [garbage (blk/new-garbage (pt/point 2 5) 3 2)
        points (blk/garbage-block-points garbage)]
    (is (= (count points) 6) "Should generate length * height points")
    (is (= (set points) #{[2 5] [3 5] [4 5] [2 4] [3 4] [4 4]})
        "Should generate correct points for 3x2 garbage block at [2,5]")))

(deftest test-new-dissolve
  "Test creation of dissolve blocks"
  (let [garbage (blk/new-garbage (pt/point 1 3) 2 2)
        dissolve (blk/new-dissolve garbage)]
    (is (= (:type dissolve) :dissolve) "Should have :dissolve type")
    (is (= (:garbage-block dissolve) garbage) "Should contain original garbage block")
    (is (= (:ticks dissolve) 30) "Should have default dissolve ticks")
    (is (= (:starting-ticks dissolve) 30) "Should record starting ticks")
    (is (= (count (:pending-blocks dissolve)) 4) "Should have 4 pending blocks for 2x2 garbage")
    (is (every? blk/simple? (:pending-blocks dissolve)) "All pending blocks should be simple")))

(deftest test-resolve-dissolve
  "Test resolution of dissolve blocks"
  (let [garbage (blk/new-garbage (pt/point 1 1) 1 1)
        dissolve-block (blk/new-dissolve garbage)
        dissolve-ready (assoc dissolve-block :ticks 0)
        dissolve-not-ready (assoc dissolve-block :ticks 5)]
    (is (= (count (blk/resolve-dissolve dissolve-ready)) 1)
        "Should return pending blocks when ticks reach 0")
    (is (= (blk/resolve-dissolve dissolve-not-ready) #{dissolve-not-ready})
        "Should return original block when ticks > 0")))

(deftest test-new-disappear
  "Test creation of disappear blocks"
  (let [blocks [(blk/new-simple (pt/point 1 1) "#FF0000")
                (blk/new-simple (pt/point 1 2) "#FF0000")]
        disappear (blk/new-disappear blocks)]
    (is (= (:type disappear) :disappear) "Should have :disappear type")
    (is (= (:blocks disappear) blocks) "Should contain the provided blocks")
    (is (= (:ticks disappear) 15) "Should have 15 ticks")))

(deftest test-falling-block-default-ticks
  "Test falling block default ticks"
  (is (= (blk/falling-block-default-ticks) 5)
      "Default falling ticks should be 5"))

(deftest test-new-falling
  "Test creation of falling blocks"
  (let [block (blk/new-simple (pt/point 2 3) "#FF0000")
        falling (blk/new-falling block)]
    (is (= (:type falling) :falling) "Should have :falling type")
    (is (= (:block falling) block) "Should contain the original block")
    (is (= (:position falling) (pt/point 2 3)) "Should have block's position")
    (is (= (:ticks falling) 5) "Should have default falling ticks")
    (is (= (:falling-to falling) (pt/point 2 4)) "Should fall to position below")))

;; Test block type predicates
(deftest test-compare-type?
  "Test the compare-type? utility function"
  (let [block {:type :test-type}]
    (is (blk/compare-type? block :test-type) "Should return true for matching type")
    (is (not (blk/compare-type? block :other-type)) "Should return false for non-matching type")))

(deftest test-falling?
  "Test falling? predicate"
  (let [falling-block {:type :falling}
        other-block {:type :simple}]
    (is (blk/falling? falling-block) "Should return true for falling blocks")
    (is (not (blk/falling? other-block)) "Should return false for non-falling blocks")))

(deftest test-dissolve?
  "Test dissolve? predicate"
  (let [dissolve-block {:type :dissolve}
        other-block {:type :simple}]
    (is (blk/dissolve? dissolve-block) "Should return true for dissolve blocks")
    (is (not (blk/dissolve? other-block)) "Should return false for non-dissolve blocks")))

(deftest test-swap-empty?
  "Test swap-empty? predicate"
  (let [swap-empty-block {:type :swap-empty}
        other-block {:type :simple}]
    (is (blk/swap-empty? swap-empty-block) "Should return true for swap-empty blocks")
    (is (not (blk/swap-empty? other-block)) "Should return false for non-swap-empty blocks")))

(deftest test-garbage?
  "Test garbage? predicate"
  (let [garbage-block {:type :garbage}
        other-block {:type :simple}]
    (is (blk/garbage? garbage-block) "Should return true for garbage blocks")
    (is (not (blk/garbage? other-block)) "Should return false for non-garbage blocks")))

(deftest test-simple?
  "Test simple? predicate"
  (let [simple-block (blk/new-simple (pt/point 1 1) "#FF0000")
        garbage-block (blk/new-garbage (pt/point 1 1) 1 1)
        falling-block (blk/new-falling simple-block)
        no-position-block {:type "#FF0000"}]
    (is (blk/simple? simple-block) "Should return true for simple blocks")
    (is (not (blk/simple? garbage-block)) "Should return false for garbage blocks")
    (is (not (blk/simple? falling-block)) "Should return false for falling blocks")
    (is (not (blk/simple? no-position-block)) "Should return false for blocks without position")))

(deftest test-disappear?
  "Test disappear? predicate"
  (let [disappear-block {:type :disappear}
        other-block {:type :simple}]
    (is (blk/disappear? disappear-block) "Should return true for disappear blocks")
    (is (not (blk/disappear? other-block)) "Should return false for non-disappear blocks")))

(deftest test-swap?
  "Test swap? predicate"
  (let [swap-block {:type :swap}
        other-block {:type :simple}]
    (is (blk/swap? swap-block) "Should return true for swap blocks")
    (is (not (blk/swap? other-block)) "Should return false for non-swap blocks")))

;; Test block resolution functions
(deftest test-unwrap-falling
  "Test unwrapping of falling blocks"
  (let [inner-block (blk/new-simple (pt/point 1 1) "#FF0000")
        falling-block (blk/new-falling inner-block)
        non-falling-block inner-block]
    (is (= (blk/unwrap-falling falling-block)
           (assoc inner-block :position (pt/point 1 2)))
        "Should unwrap falling block with updated position")
    (is (= (blk/unwrap-falling non-falling-block) non-falling-block)
        "Should return non-falling blocks unchanged")))

(deftest test-should-resolve-falling?
  "Test determination of when falling blocks should be resolved"
  (let [ready-block {:type :falling :ticks 0}
        not-ready-block {:type :falling :ticks 5}
        no-ticks-block {:type :falling}]
    (is (blk/should-resolve-falling? ready-block) "Should resolve when ticks = 0")
    (is (not (blk/should-resolve-falling? not-ready-block)) "Should not resolve when ticks > 0")
    (is (not (blk/should-resolve-falling? no-ticks-block)) "Should not resolve when no ticks")))

(deftest test-resolve-falling
  "Test resolution of falling blocks"
  (let [inner-block (blk/new-simple (pt/point 1 1) "#FF0000")
        falling-block (blk/new-falling inner-block)
        resolved (blk/resolve-falling falling-block)]
    (is (= resolved (assoc inner-block :position (pt/point 1 2)))
        "Should resolve to inner block with updated position")))

(deftest test-should-resolve-swap-empty?
  "Test determination of when swap-empty blocks should be resolved"
  (let [ready-block {:type :swap-empty :ticks 0 :block {} :into-position []}
        not-ready-block {:type :swap-empty :ticks 5 :block {} :into-position []}
        wrong-type-block {:type :other :ticks 0}]
    (is (blk/should-resolve-swap-empty? ready-block) "Should resolve swap-empty when ticks = 0")
    (is (not (blk/should-resolve-swap-empty? not-ready-block)) "Should not resolve when ticks > 0")
    (is (not (blk/should-resolve-swap-empty? wrong-type-block)) "Should not resolve wrong type")))

(deftest test-resolve-swap-empty
  "Test resolution of swap-empty blocks"
  (let [inner-block (blk/new-simple (pt/point 1 1) "#FF0000")
        target-pos (pt/point 3 3)
        swap-empty (blk/new-swap-empty inner-block target-pos)
        resolved (blk/resolve-swap-empty swap-empty)]
    (is (= resolved (assoc inner-block :position target-pos))
        "Should resolve to inner block with target position")))

(deftest test-blocks-swap!
  "Test swapping of block positions"
  (let [block-a (blk/new-simple (pt/point 1 1) "#FF0000")
        block-b (blk/new-simple (pt/point 2 2) "#00FF00")
        [swapped-a swapped-b] (blk/blocks-swap! [block-a block-b])]
    (is (= (:position swapped-a) (pt/point 2 2)) "Block A should have Block B's position")
    (is (= (:position swapped-b) (pt/point 1 1)) "Block B should have Block A's position")
    (is (= (:type swapped-a) (:type block-a)) "Block A should keep its type")
    (is (= (:type swapped-b) (:type block-b)) "Block B should keep its type")))

(deftest test-should-resolve-swap?
  "Test determination of when swap blocks should be resolved"
  (let [ready-swap {:type :swap :ticks 0}
        not-ready-swap {:type :swap :ticks 5}
        wrong-type {:type :other :ticks 0}]
    (is (blk/should-resolve-swap? ready-swap) "Should resolve swap when ticks = 0")
    (is (not (blk/should-resolve-swap? not-ready-swap)) "Should not resolve when ticks > 0")
    (is (not (blk/should-resolve-swap? wrong-type)) "Should not resolve wrong type")))

(deftest test-resolve-swaps
  "Test resolution of swap blocks in a collection"
  (let [block-a (blk/new-simple (pt/point 1 1) "#FF0000")
        block-b (blk/new-simple (pt/point 2 2) "#00FF00")
        regular-block (blk/new-simple (pt/point 3 3) "#0000FF")
        ready-swap (assoc (blk/new-swap block-a block-b) :ticks 0)
        not-ready-swap (assoc (blk/new-swap block-a block-b) :ticks 5)
        blocks [regular-block ready-swap not-ready-swap]
        resolved (blk/resolve-swaps blocks)]
    (is (= (count resolved) 4) "Should have 4 blocks after resolving one swap")
    (is (some #(= % regular-block) resolved) "Should keep regular blocks unchanged")
    (is (some #(= % not-ready-swap) resolved) "Should keep not-ready swaps unchanged")
    (is (some #(and (= (:type %) "#FF0000") (= (:position %) (pt/point 2 2))) resolved)
        "Should have swapped block A")
    (is (some #(and (= (:type %) "#00FF00") (= (:position %) (pt/point 1 1))) resolved)
        "Should have swapped block B")))

(deftest test-same-type?
  "Test comparison of block types"
  (let [block-a {:type "#FF0000"}
        block-b {:type "#FF0000"}
        block-c {:type "#00FF00"}]
    (is (blk/same-type? block-a block-b) "Should return true for same types")
    (is (not (blk/same-type? block-a block-c)) "Should return false for different types")))

;; Edge cases and error conditions
(deftest test-edge-cases-empty-collections
  "Test functions with empty collections"
  (let [empty-blocks []]
    (is (= (blk/resolve-swaps empty-blocks) []) "resolve-swaps should handle empty collections")
    (is (= (blk/new-complex empty-blocks) {:blocks []}) "new-complex should handle empty collections")))

(deftest test-edge-cases-nil-values
  "Test functions with nil values"
  (let [block-with-nil-ticks {:type :test}]
    (is (not (blk/should-resolve-falling? block-with-nil-ticks)) "Should handle nil ticks in falling resolution")
    (is (not (blk/should-resolve-swap? block-with-nil-ticks)) "Should handle nil ticks in swap resolution")))

(deftest test-edge-cases-zero-dimensions
  "Test garbage blocks with zero dimensions"
  (let [zero-width (blk/new-garbage (pt/point 1 1) 0 2)
        zero-height (blk/new-garbage (pt/point 1 1) 2 0)
        zero-both (blk/new-garbage (pt/point 1 1) 0 0)]
    (is (empty? (blk/garbage-block-points zero-width)) "Should handle zero width")
    (is (empty? (blk/garbage-block-points zero-height)) "Should handle zero height")
    (is (empty? (blk/garbage-block-points zero-both)) "Should handle zero dimensions")))

(deftest test-integration-block-lifecycle
  "Integration test for a complete block lifecycle"
  (let [;; Create a simple block
        simple-block (blk/new-simple (pt/point 1 1) "#FF0000")
        
        ;; Make it fall
        falling-block (blk/new-falling simple-block)
        
        ;; Resolve the fall
        resolved-falling (blk/resolve-falling falling-block)
        
        ;; Create another block and swap them
        other-block (blk/new-simple (pt/point 2 2) "#00FF00")
        swap-block (assoc (blk/new-swap resolved-falling other-block) :ticks 0)
        
        ;; Resolve the swap
        [swapped-a swapped-b] (blk/blocks-swap! (:blocks swap-block))]
    
    (is (blk/simple? resolved-falling) "Resolved falling block should be simple")
    (is (= (:position resolved-falling) (pt/point 1 2)) "Should have fallen one position down")
    (is (= (:position swapped-a) (pt/point 2 2)) "First block should be at second position")
    (is (= (:position swapped-b) (pt/point 1 2)) "Second block should be at first position")))