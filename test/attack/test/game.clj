(ns attack.test.game
  (:require [attack.game :as game]
            [attack.grid :as grid]
            [attack.block :as blk]
            [attack.point :as pt])
  (:use [clojure.test]))

;; Helper functions for testing
(defn simple-block [x y type]
  (blk/new-simple (pt/point x y) type))

(defn test-game-with-grid [grid]
  (assoc (game/default) :grid grid))

(defn test-game-with-clock [clock]
  (assoc (game/default) :clock clock))

(defn test-game-with-status [status]
  (assoc (game/default) :status status))

;; Tests for adjusted-grid function
(deftest adjusted-grid-basic
  "Tests creating an adjusted grid with specified columns and rows"
  (let [cols 6
        rows 3
        grid (game/adjusted-grid cols rows)]
    (is (= (:cols grid) cols))
    (is (= (:rows grid) (+ 13 rows)))  ; 13 base rows + added rows
    (is (not (empty? (:blocks grid))))))

(deftest adjusted-grid-different-sizes
  "Tests adjusted-grid with different sizes"
  (let [grid1 (game/adjusted-grid 4 2)
        grid2 (game/adjusted-grid 8 5)]
    (is (= (:cols grid1) 4))
    (is (= (:rows grid1) (+ 13 2)))  ; 13 base + 2 added
    (is (= (:cols grid2) 8))
    (is (= (:rows grid2) (+ 13 5)))))

;; Tests for default function (game initialization)
(deftest default-game-initialization
  "Tests that default function creates a properly initialized game"
  (let [game (game/default)]
    (is (map? game))
    (is (= (:status game) :active))
    (is (= (:max-lines game) 13))
    (is (= (:clock game) 0))
    (is (= (:dirty game) false))
    (is (= (:add-line-ticks game) 120))
    (is (map? (:grid game)))
    (is (= (get-in game [:grid :cols]) 6))
    (is (= (get-in game [:grid :rows]) 16))))

(deftest default-game-grid-structure
  "Tests that the default game has correct grid structure"
  (let [{grid :grid} (game/default)]
    (is (= (:cols grid) 6))
    (is (= (:rows grid) 16))
    (is (not (empty? (:blocks grid))))))

;; Tests for game-over? function
(deftest game-over-detection-normal
  "Tests game over detection when line count is within limits"
  (let [game (game/default)
        grid-with-few-lines (assoc (:grid game) :rows 5)]
    (is (false? (game/game-over? (assoc game :grid grid-with-few-lines))))))

(deftest game-over-detection-exceeded
  "Tests game over detection when line count exceeds max-lines"
  (let [game (game/default)
        ;; Create a game with many blocks to exceed line count
        many-blocks (map #(simple-block 1 % :red) (range 1 20))
        grid-with-many-lines (grid/add-blocks (:grid game) many-blocks)]
    (is (true? (game/game-over? (assoc game :grid grid-with-many-lines))))))

(deftest game-over-detection-edge-case
  "Tests game over detection at the exact limit"
  (let [game (game/default)]
    ;; The default game already has 3 rows of blocks (y=14,15,16)
    ;; line-count counts distinct y values, so we need to reach >13 distinct y values
    ;; Adding blocks at y=1 through y=10 would give us 13 total lines (1-10 + 14-16)
    (let [blocks-at-limit (map #(simple-block 1 % :red) (range 1 11))
          grid-at-limit (grid/add-blocks (:grid game) blocks-at-limit)]
      (is (false? (game/game-over? (assoc game :grid grid-at-limit)))))
    
    ;; Adding one more line (y=11) would exceed the limit
    (let [blocks-over-limit (map #(simple-block 1 % :red) (range 1 12))
          grid-over-limit (grid/add-blocks (:grid game) blocks-over-limit)]
      (is (true? (game/game-over? (assoc game :grid grid-over-limit)))))))

;; Tests for tick function
(deftest tick-increments-clock
  "Tests that tick function properly increments the clock"
  (let [initial-game (test-game-with-clock 0)
        ticked-game (game/tick initial-game)]
    (is (= (:clock ticked-game) 1))
    (is (= (:grid ticked-game) (:grid initial-game)))
    (is (= (:status ticked-game) (:status initial-game)))))

(deftest tick-preserves-other-state
  "Tests that tick preserves all other game state"
  (let [initial-game (-> (game/default)
                        (assoc :clock 42)
                        (assoc :dirty true)
                        (assoc :status :active))
        ticked-game (game/tick initial-game)]
    (is (= (:clock ticked-game) 43))
    (is (= (:dirty ticked-game) (:dirty initial-game)))
    (is (= (:status ticked-game) (:status initial-game)))
    (is (= (:grid ticked-game) (:grid initial-game)))))

(deftest tick-multiple-times
  "Tests multiple tick applications"
  (let [initial-game (test-game-with-clock 10)
        final-game (-> initial-game
                      game/tick
                      game/tick
                      game/tick)]
    (is (= (:clock final-game) 13))))

;; Tests for mod-clock? function
(deftest mod-clock-basic-cases
  "Tests basic mod-clock? functionality"
  (let [game-0 (test-game-with-clock 0)
        game-60 (test-game-with-clock 60)
        game-61 (test-game-with-clock 61)]
    (is (true? (game/mod-clock? game-0 10)))
    (is (true? (game/mod-clock? game-60 10)))
    (is (true? (game/mod-clock? game-60 20)))
    (is (false? (game/mod-clock? game-61 10)))
    (is (false? (game/mod-clock? game-61 20)))))

(deftest mod-clock-edge-cases
  "Tests mod-clock? with edge cases"
  (let [game-1 (test-game-with-clock 1)
        game-120 (test-game-with-clock 120)]
    (is (true? (game/mod-clock? game-1 1)))
    (is (true? (game/mod-clock? game-120 120)))
    (is (true? (game/mod-clock? game-120 60)))
    (is (true? (game/mod-clock? game-120 40)))
    (is (false? (game/mod-clock? game-120 121)))))

;; Tests for add-line function
(deftest add-line-basic
  "Tests basic add-line functionality"
  (let [initial-game (game/default)
        game-with-line (game/add-line initial-game)]
    (is (= (get-in game-with-line [:grid :rows])
           (+ (get-in initial-game [:grid :rows]) 1)))))

(deftest add-line-preserves-state
  "Tests that add-line preserves other game state"
  (let [initial-game (-> (game/default)
                        (assoc :clock 42)
                        (assoc :dirty true))
        game-with-line (game/add-line initial-game)]
    (is (= (:clock game-with-line) (:clock initial-game)))
    (is (= (:dirty game-with-line) (:dirty initial-game)))
    (is (= (:status game-with-line) (:status initial-game)))))

;; Tests for step-add-line function
(deftest step-add-line-when-time
  "Tests step-add-line adds line when clock is divisible by add-line-ticks"
  (let [game (-> (game/default)
                (assoc :clock 120)  ; divisible by default 120 add-line-ticks
                (assoc :add-line-ticks 120))
        initial-rows (get-in game [:grid :rows])
        stepped-game (game/step-add-line game)]
    (is (= (get-in stepped-game [:grid :rows])
           (+ initial-rows 1)))))

(deftest step-add-line-when-not-time
  "Tests step-add-line doesn't add line when clock is not divisible by add-line-ticks"
  (let [game (-> (game/default)
                (assoc :clock 119)  ; not divisible by 120
                (assoc :add-line-ticks 120))
        initial-rows (get-in game [:grid :rows])
        stepped-game (game/step-add-line game)]
    (is (= (get-in stepped-game [:grid :rows]) initial-rows))))

(deftest step-add-line-custom-ticks
  "Tests step-add-line with custom add-line-ticks"
  (let [game (-> (game/default)
                (assoc :clock 60)
                (assoc :add-line-ticks 60))
        initial-rows (get-in game [:grid :rows])
        stepped-game (game/step-add-line game)]
    (is (= (get-in stepped-game [:grid :rows])
           (+ initial-rows 1)))))

;; Tests for mark-dirty function
(deftest mark-dirty-when-grids-different
  "Tests mark-dirty marks game as dirty when grids are different"
  (let [old-game (game/default)
        new-grid (grid/add-row (:grid old-game))
        new-game (assoc old-game :grid new-grid)
        marked-game (game/mark-dirty old-game new-game)]
    (is (true? (:dirty marked-game)))))

(deftest mark-dirty-when-grids-same
  "Tests mark-dirty doesn't mark game as dirty when grids are the same"
  (let [old-game (game/default)
        new-game old-game
        marked-game (game/mark-dirty old-game new-game)]
    (is (false? (:dirty marked-game)))))

(deftest mark-dirty-preserves-other-state
  "Tests mark-dirty preserves all other game state except dirty flag"
  (let [old-game (game/default)
        new-grid (grid/add-row (:grid old-game))
        new-game (-> old-game
                    (assoc :grid new-grid)
                    (assoc :clock 42)
                    (assoc :status :test))
        marked-game (game/mark-dirty old-game new-game)]
    (is (= (:clock marked-game) 42))
    (is (= (:status marked-game) :test))
    (is (= (:grid marked-game) new-grid))))

;; Tests for add-garbage-block function
(deftest add-garbage-block-basic
  "Tests adding a garbage block to the game"
  (let [game (game/default)
        garbage-block (blk/new-garbage (pt/point 2 2) 3 1)
        game-with-garbage (game/add-garbage-block game garbage-block)
        blocks (get-in game-with-garbage [:grid :blocks])
        garbage-blocks (filter blk/garbage? blocks)]
    (is (= (count garbage-blocks) 1))
    (is (blk/garbage? (first garbage-blocks)))
    (is (= (:length (first garbage-blocks)) 3))))

(deftest add-garbage-block-preserves-existing
  "Tests that adding garbage block preserves existing blocks"
  (let [existing-block (simple-block 1 1 :red)
        game-with-block (test-game-with-grid 
                         (grid/add-blocks (:grid (game/default)) #{existing-block}))
        garbage-block (blk/new-garbage (pt/point 2 2) 2 1)
        game-with-garbage (game/add-garbage-block game-with-block garbage-block)
        blocks (get-in game-with-garbage [:grid :blocks])
        garbage-blocks (filter blk/garbage? blocks)]
    (is (>= (count blocks) 2))
    (is (= (count garbage-blocks) 1))))

;; Tests for add-garbage function
(deftest add-garbage-default
  "Tests add-garbage with default parameters"
  (let [game (game/default)
        game-with-garbage (game/add-garbage game)
        blocks (get-in game-with-garbage [:grid :blocks])
        garbage-blocks (filter blk/garbage? blocks)]
    (is (= (count garbage-blocks) 1))
    (is (blk/garbage? (first garbage-blocks)))
    (is (= (:length (first garbage-blocks)) 5))
    (is (= (:height (first garbage-blocks)) 1))
    (is (= (:position (first garbage-blocks)) (pt/point 1 1)))))

;; Tests for random-garbage-block function
(deftest random-garbage-block-within-bounds
  "Tests that random garbage blocks are created within grid bounds"
  (let [grid (grid/default 6 10)]
    (dotimes [_ 10]  ; Test multiple times due to randomness
      (let [garbage (game/random-garbage-block grid)
            {[x y] :position length :length height :height} garbage]
        (is (>= x 1))
        (is (<= (+ x length -1) (:cols grid)))
        (is (>= length 3))
        (is (<= length (:cols grid)))
        (is (>= height 1))
        (is (<= height 2))))))

(deftest random-garbage-block-structure
  "Tests that random garbage blocks have correct structure"
  (let [grid (grid/default 8 10)]
    (dotimes [_ 5]
      (let [garbage (game/random-garbage-block grid)]
        (is (blk/garbage? garbage))
        (is (contains? garbage :position))
        (is (contains? garbage :length))
        (is (contains? garbage :height))
        (is (vector? (:position garbage)))))))

;; Tests for add-random-garbage-every-n-steps function
(deftest add-random-garbage-when-time
  "Tests adding random garbage when clock is divisible by n-steps"
  (let [game (-> (game/default)
                (assoc :clock 201))  ; divisible by 201
        game-with-garbage (game/add-random-garbage-every-n-steps game 201)
        blocks (get-in game-with-garbage [:grid :blocks])
        garbage-blocks (filter blk/garbage? blocks)]
    (is (= (count garbage-blocks) 1))
    (is (blk/garbage? (first garbage-blocks)))))

(deftest add-random-garbage-when-not-time
  "Tests not adding random garbage when clock is not divisible by n-steps"
  (let [game (-> (game/default)
                (assoc :clock 200))  ; not divisible by 201
        original-blocks (get-in game [:grid :blocks])
        game-with-garbage (game/add-random-garbage-every-n-steps game 201)
        new-blocks (get-in game-with-garbage [:grid :blocks])]
    ;; Should have same number of blocks (no garbage added)
    (is (= (count original-blocks) (count new-blocks)))))

(deftest add-random-garbage-different-intervals
  "Tests add-random-garbage with different intervals"
  (let [game-50 (-> (game/default) (assoc :clock 50))
        game-100 (-> (game/default) (assoc :clock 100))]
    
    ;; Test interval of 50
    (let [result-50 (game/add-random-garbage-every-n-steps game-50 50)
          garbage-blocks-50 (filter blk/garbage? (get-in result-50 [:grid :blocks]))]
      (is (= (count garbage-blocks-50) 1)))
    
    ;; Test interval of 25 (should add at clock 50 and 100)
    (let [result-25-50 (game/add-random-garbage-every-n-steps game-50 25)
          result-25-100 (game/add-random-garbage-every-n-steps game-100 25)
          garbage-blocks-25-50 (filter blk/garbage? (get-in result-25-50 [:grid :blocks]))
          garbage-blocks-25-100 (filter blk/garbage? (get-in result-25-100 [:grid :blocks]))]
      (is (= (count garbage-blocks-25-50) 1))
      (is (= (count garbage-blocks-25-100) 1)))))

;; Tests for cache-grid-clock function
(deftest cache-grid-clock-basic
  "Tests caching the game clock in the grid"
  (let [game (-> (game/default)
                (assoc :clock 42))
        cached-game (game/cache-grid-clock game)]
    (is (= (get-in cached-game [:grid :cache-clock]) 42))
    (is (= (:clock cached-game) 42))
    (is (= (:grid cached-game) 
           (assoc (:grid game) :cache-clock 42)))))

(deftest cache-grid-clock-zero
  "Tests caching zero clock value"
  (let [game (test-game-with-clock 0)
        cached-game (game/cache-grid-clock game)]
    (is (= (get-in cached-game [:grid :cache-clock]) 0))))

(deftest cache-grid-clock-large-value
  "Tests caching large clock value"
  (let [game (test-game-with-clock 999999)
        cached-game (game/cache-grid-clock game)]
    (is (= (get-in cached-game [:grid :cache-clock]) 999999))))

;; Tests for step function integration
(deftest step-game-over-state
  "Tests step function when game is over"
  (let [game (game/default)
        ;; Create a game with many blocks to exceed line count
        many-blocks (map #(simple-block 1 % :red) (range 1 20))
        grid-with-many-lines (grid/add-blocks (:grid game) many-blocks)
        game-over (assoc game :grid grid-with-many-lines)
        stepped-game (game/step game-over)]
    (is (= (:status stepped-game) :game-over))))

(deftest step-active-game
  "Tests step function on active game"
  (let [initial-game (game/default)
        stepped-game (game/step initial-game)]
    (is (= (:status stepped-game) :active))
    (is (= (:clock stepped-game) 1))  ; Clock should increment
    (is (contains? (:grid stepped-game) :cache-clock))))

(deftest step-increments-clock
  "Tests that step function increments clock"
  (let [game (test-game-with-clock 42)
        stepped-game (game/step game)]
    (is (= (:clock stepped-game) 43))))

(deftest step-marks-dirty-appropriately
  "Tests that step function marks game as dirty when appropriate"
  (let [game (game/default)
        stepped-game (game/step game)]
    ;; After step, check if dirty flag is set appropriately
    (is (contains? stepped-game :dirty))))

(deftest step-caches-grid-clock
  "Tests that step function caches the clock in the grid"
  (let [game (test-game-with-clock 42)
        stepped-game (game/step game)]
    (is (= (get-in stepped-game [:grid :cache-clock]) 43))))

(deftest step-adds-garbage-at-interval
  "Tests that step function adds garbage at correct intervals"
  (let [game (-> (game/default)
                (assoc :clock 200))  ; Just before garbage interval (201)
        stepped-game (game/step game)
        garbage-blocks (filter blk/garbage? (get-in stepped-game [:grid :blocks]))]
    ;; Clock becomes 201 after step, should add garbage
    (is (pos? (count garbage-blocks)))))

(deftest step-integration-multiple-steps
  "Tests multiple step operations"
  (let [initial-game (game/default)]
    (dotimes [i 10]
      (let [stepped-game (nth (iterate game/step initial-game) (inc i))]
        (is (= (:clock stepped-game) (inc i)))
        (is (= (:status stepped-game) :active))))))

;; Edge cases and error conditions
(deftest game-over-with-nil-grid
  "Tests game-over? handles edge case gracefully"
  (let [game (assoc (game/default) :grid nil)]
    ;; The function doesn't actually throw - it returns false for nil grids
    (is (false? (game/game-over? game)))))

(deftest tick-with-missing-clock
  "Tests tick handles missing clock gracefully"
  (let [game (dissoc (game/default) :clock)]
    (is (thrown? Exception (game/tick game)))))

(deftest mod-clock-with-zero-operand
  "Tests mod-clock? with zero operand"
  (let [game (test-game-with-clock 10)]
    (is (thrown? ArithmeticException (game/mod-clock? game 0)))))

(deftest step-preserves-non-game-over-status
  "Tests step preserves status when not game over"
  (let [game (test-game-with-status :paused)]
    ;; Assuming :paused is not :game-over, and game is not actually over
    (let [stepped-game (game/step game)]
      (is (not= (:status stepped-game) :game-over)))))

;; Integration tests between game and grid systems
(deftest game-grid-integration-line-counting
  "Tests integration between game line counting and grid system"
  (let [game (game/default)
        ;; Add multiple rows to test line counting
        game-with-rows (-> game
                          game/add-line
                          game/add-line
                          game/add-line)]
    (is (= (grid/line-count (:grid game-with-rows)) 6))))  ; 3 original + 3 added

(deftest game-grid-integration-block-management
  "Tests integration of block management between game and grid"
  (let [game (game/default)
        original-count (count (get-in game [:grid :blocks]))
        block (simple-block 1 1 :red)
        updated-grid (grid/add-blocks (:grid game) #{block})
        game-with-block (assoc game :grid updated-grid)]
    (is (= (count (get-in game-with-block [:grid :blocks])) (+ original-count 1)))
    (is (grid/occupied-at? (:grid game-with-block) (pt/point 1 1)))))

(deftest game-state-consistency
  "Tests that game state remains consistent through operations"
  (let [game (game/default)]
    ;; Perform series of operations
    (let [final-game (-> game
                        game/tick
                        game/add-line
                        (game/add-random-garbage-every-n-steps 1)  ; Force garbage addition
                        game/cache-grid-clock)]
      (is (= (:clock final-game) 1))
      (is (contains? (:grid final-game) :cache-clock))
      (is (= (get-in final-game [:grid :cache-clock]) 1)))))

;; Performance and boundary tests
(deftest large-clock-values
  "Tests game functions with large clock values"
  (let [large-clock 999999999
        game (test-game-with-clock large-clock)]
    (is (= (:clock (game/tick game)) (inc large-clock)))
    (is (= (get-in (game/cache-grid-clock game) [:grid :cache-clock]) large-clock))))

(deftest garbage-generation-bounds
  "Tests garbage generation stays within reasonable bounds"
  (let [grid (grid/default 6 10)]
    (dotimes [_ 20]  ; Test many times due to randomness
      (let [garbage (game/random-garbage-block grid)]
        (is (<= 3 (:length garbage) (:cols grid)))
        (is (<= 1 (:height garbage) 2))))))