# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Tetris Attack clone implemented in Clojure/ClojureScript. The game uses a unique architecture where core game logic is written in Clojure and shared between server and client via ClojureScript compilation.

## Development Commands

```bash
# Initial setup
lein install

# Compile ClojureScript for development
lein cljsbuild once

# Compile for production (advanced compilation)
lein cljsbuild once production

# Start development web server
lein ring server
# Game accessible at http://localhost:3000/game.html

# Run tests
lein test

# Auto-run tests with Guard (requires Ruby/Guard setup)
guard
```

## Dependencies

- **Clojure**: 1.12.1
- **ClojureScript**: 1.11.132 (explicitly added for lein-cljsbuild compatibility)
- **Compojure**: 1.7.1 (web routing)
- **lein-cljsbuild**: 1.1.8 (ClojureScript compilation)
- **lein-ring**: 0.12.6 (web server development)
- **lein-swank**: 1.4.5 (deprecated - modern projects use CIDER)

## Architecture

### Code Organization
- `src/clj/attack/` - Shared game logic (compiles to both JVM and JavaScript)
- `src/cljs/attack/` - Browser-specific code (rendering, input handling)
- `src/attack/` - Server-side only code (minimal Compojure web server)

### Key Architectural Patterns
- **Crossover Namespaces**: Core game logic in `src/clj/attack/` is shared between server and client
- **Immutable State**: Game state managed through atoms containing immutable data structures
- **Functional Updates**: All game logic uses pure functions that return new state
- **Separation of Concerns**: Game logic completely separate from rendering/input

### Core Components
- **Grid System**: 2D grid of blocks with efficient collision detection
- **Block Types**: Simple, swap, garbage, and complex blocks with different behaviors
- **Game Loop**: 30ms intervals with requestAnimationFrame for smooth rendering
- **Match Detection**: Recursive algorithms for finding and clearing matches
- **Cursor System**: Player-controlled cursor for block manipulation

## Key Files
- `project.clj` - Leiningen configuration with ClojureScript build settings
- `src/clj/attack/core.clj` - Main game state and logic
- `src/clj/attack/grid.clj` - Grid operations and collision detection
- `src/clj/attack/block.clj` - Block type definitions and behaviors
- `src/cljs/attack/main.cljs` - Browser entry point and game loop
- `src/cljs/attack/render.cljs` - HTML5 Canvas rendering
- `src/cljs/attack/input.cljs` - Keyboard input handling

## Testing

### Modern Testing Framework Overview
The project uses a modernized testing setup with **176+ tests containing 576+ assertions**, providing comprehensive coverage with advanced testing techniques:

- **Complete Coverage**: All shared logic components (`src/clj/attack/`) are thoroughly tested
- **Zero Failures**: Test suite consistently passes with 0 failures, 0 errors
- **Modern Libraries**: Property-based testing, performance benchmarks, and expressive assertions
- **Multiple Test Types**: Unit, integration, property-based, and performance tests

### Testing Dependencies & Libraries

The project now includes modern Clojure testing libraries:

- **[test.check](https://github.com/clojure/test.check)** (1.1.1): Property-based testing for discovering edge cases
- **[criterium](https://github.com/hugoduncan/criterium)** (0.4.6): Precise performance benchmarking
- **[expectations](https://github.com/clojure-expectations/expectations)** (2.2.0): More expressive test assertions
- **[midje](https://github.com/marick/Midje)** (1.10.9): Behavior-driven testing framework

### Running Tests

```bash
# Run all tests (176+ tests, ~2-3 seconds)
bin/lein test

# Run tests with modern libraries (dev profile)
lein with-profile dev test

# Run property-based tests specifically
lein with-profile property-test test property.attack-property-tests

# Run performance benchmarks
lein with-profile perf-test test perf.attack-performance-tests

# Run specific test modules
bin/lein test attack.test.block
bin/lein test attack.test.grid
bin/lein test attack.test.game

# Modern testing examples and showcase
lein test attack.test.modern-examples
```

**Expected Output**: Tests complete successfully with timing information, assertion counts per module, and optional performance metrics.

### Test Organization

Tests are organized into multiple directories with both traditional and modern testing approaches:

#### Core Test Suite (`test/attack/test/`)
Traditional unit and integration tests for all game components:

- **`test/attack/test/block.clj`** (330 lines, 36 tests, 91 assertions)
  - Block creation, types, and lifecycle management
  - Block resolution (falling, swapping, dissolving)
  - Complex block behaviors (garbage, swap, disappear)
  - Type predicates and edge cases

- **`test/attack/test/grid.clj`** (386 lines, extensive coverage)
  - Grid operations and collision detection
  - Match detection algorithms (horizontal/vertical)
  - Block placement and removal
  - Advanced grid mechanics (falling, garbage handling)

- **`test/attack/test/game.clj`** (470 lines, comprehensive integration)
  - Game state management and initialization
  - Game loop mechanics and clock timing
  - Line addition algorithms
  - Game status and progression logic

- **`test/attack/test/tick.clj`** (155 lines)
  - Time-based mechanics and tick management
  - Block animation timing
  - Tick resolution and decrementation

- **`test/attack/test/point.clj`** (158 lines)
  - 2D coordinate system operations
  - Directional movement and adjacency
  - Point arithmetic and transformations

- **`test/attack/test/cursor.clj`** (86 lines)
  - Player cursor positioning and movement
  - Cursor state management
  - Input handling integration

- **`test/attack/test/core.clj`** (95 lines)
  - High-level game integration tests
  - Cross-module interaction testing
  - Game interface functionality

- **`test/attack/test/color.clj`** (22 lines)
  - Color system validation
  - Block color assignment

- **`test/attack/test/display.clj`** (23 lines)
  - Display and rendering utilities

#### Modern Testing Infrastructure
New files providing advanced testing capabilities:

- **`test/attack/test/utils.clj`** (500+ lines)
  - Test data factories and generators
  - Game state fixtures and helpers
  - Custom assertions and matchers
  - Performance testing utilities
  - Debugging and visualization tools

- **`test/attack/test/fixtures.clj`** (400+ lines)
  - Pre-built complex game scenarios
  - Match detection test cases
  - Falling and physics scenarios
  - Garbage block interactions
  - Game-over and edge cases

- **`test/attack/test/modern_examples.clj`** (300+ lines)
  - Examples demonstrating all modern features
  - Best practices showcase
  - Integration testing patterns
  - Advanced assertion techniques

#### Property-Based Tests (`test/property/`)
Automated discovery of edge cases through property-based testing:

- **`test/property/attack_property_tests.clj`** (400+ lines)
  - Game clock invariants and timing properties
  - Grid operation consistency checks
  - Block behavior verification
  - Performance regression detection
  - Complex scenario validation

#### Performance Tests (`test/perf/`)
Benchmark suite for performance monitoring and regression detection:

- **`test/perf/attack_performance_tests.clj`** (300+ lines)
  - Core operation benchmarks
  - Memory usage analysis
  - Performance regression detection
  - Complex scenario timing
  - Detailed performance reporting

### Test Categories

**Unit Tests**: Isolated testing of individual functions and components
- Block type creation and validation
- Point arithmetic operations  
- Tick management utilities
- Color system functions

**Integration Tests**: Cross-component interaction testing
- Grid operations with block placement
- Game state transitions
- Match detection with grid updates
- Cursor interaction with grid state

**Property-Based Tests**: Automated discovery of edge cases through randomized testing
- Game clock invariants (never decreases, always advances correctly)
- Grid integrity (blocks found at stated positions, consistent counts)
- Block behavior verification (swap resolution, falling mechanics)
- Point system consistency (navigation functions are inverse operations)
- Performance bounds (operations complete within time limits)

**Performance Tests**: Benchmarking and regression detection
- Core operation timing (game step, tick, match detection)
- Memory usage analysis and GC impact monitoring
- Complex scenario performance validation
- Regression detection with configurable thresholds

**Edge Case & Boundary Testing**: Robust error handling validation
- Empty collections and nil values
- Zero-dimension garbage blocks
- Clock overflow conditions
- Grid boundary violations

**Fixture-Based Testing**: Pre-built scenarios for complex game states
- Match detection scenarios (horizontal, vertical, overlapping)
- Falling and physics simulations
- Garbage block interactions
- Game-over conditions and edge cases

### Adding New Tests

**Modern Test Creation Patterns**:

```clojure
;; Traditional unit test
(ns attack.test.new-module
  (:require [attack.new-module :as new-mod]
            [attack.test.utils :as tu]
            [attack.test.fixtures :as fixtures])
  (:use [clojure.test]))

(deftest traditional-test
  "Clear description of what this tests"
  (is (= expected-result (new-mod/function input))))

;; Property-based test
(defspec property-test 50
  "Property: describe the invariant being tested"
  (prop/for-all [input tu/gen-game]
    (let [result (new-mod/function input)]
      (invariant-check result))))

;; Fixture-based test
(deftest fixture-test
  (fixtures/with-fixture :horizontal-match game
    (is (some-assertion (:grid game)))))

;; Performance test
(deftest performance-test
  (let [[result time-ms] (tu/time-operation new-mod/function input)]
    (is (< time-ms 10.0) "Should complete in under 10ms")))
```

**Modern Testing Conventions**:
- **Use Test Utilities**: Leverage `attack.test.utils` for common patterns
- **Property-Based Testing**: Use `defspec` for invariant testing with generated data
- **Fixtures**: Use pre-built scenarios from `attack.test.fixtures`
- **Performance Awareness**: Include timing assertions for critical operations
- **Custom Matchers**: Use utilities like `tu/in-range`, `tu/roughly` for flexible assertions

**Advanced Testing Patterns**:

```clojure
;; Testing with custom generators
(deftest generated-data-test
  (let [games (gen/sample tu/gen-game 10)]
    (doseq [game games]
      (is (tu/valid-game-state? game)))))

;; Integration testing with invariants
(deftest integration-with-invariants
  (tu/testing-game-invariants initial-game
    game/step
    game/add-line
    (partial game/add-garbage-block (blk/new-garbage ...))))

;; Fixture-based scenario testing
(tu/deftest-with-fixture complex-scenario-test fixtures/fixture-complex-scenario
  (is (complex-assertion fixture)))
```

**Game Mechanics Testing with Modern Tools**:
- **Use Generators**: Create varied test data with `tu/gen-game`, `tu/gen-simple-block`
- **Test Invariants**: Use `tu/testing-game-invariants` for state consistency
- **Visual Debugging**: Use `tu/print-grid`, `tu/print-game-state` for complex scenarios
- **Performance Testing**: Include `tu/time-operation` and `tu/benchmark` for critical paths

**Integration with Modern Suite**:
- **Multiple Test Types**: Unit tests in `test/attack/test/`, property tests in `test/property/`, performance in `test/perf/`
- **Profile-Specific Execution**: Use profiles for different test categories
- **Modern Dependencies**: Leverage test.check, criterium, expectations for advanced features

### Test Quality Metrics

**Current Coverage Areas**:
- ✅ **Core Game Logic**: Complete coverage of game mechanics
- ✅ **Block System**: All block types and behaviors tested
- ✅ **Grid Operations**: Comprehensive collision and match detection
- ✅ **State Management**: Game state transitions and consistency
- ✅ **Edge Cases**: Boundary conditions and error states

**Performance Considerations**:
- Full test suite completes in 2-3 seconds
- Tests are lightweight and focused
- No external dependencies or slow I/O operations
- Efficient test data creation using helper functions

**Known Areas of Strength**:
- Excellent separation between unit and integration tests
- Comprehensive edge case coverage
- Clear test organization and naming
- Strong integration testing for complex game mechanics

### Troubleshooting

**Common Issues**:
- **Namespace Errors**: Ensure test namespaces match directory structure
- **Missing Dependencies**: Check that all required modules are properly required
- **Test Isolation**: Tests should not depend on execution order

**Debugging Failing Tests**:
```bash
# Run with verbose output
bin/lein test :verbose

# Run single test for detailed analysis
bin/lein test attack.test.specific-module

# Check test-specific output
bin/lein test 2>&1 | grep -A 5 -B 5 "FAIL"
```

**Performance Issues**:
- Large test suites: All 176 tests complete quickly due to efficient design
- Memory usage: Tests use lightweight data structures and clean up properly
- Parallel execution: Tests are designed to be independent and thread-safe

## Build Configuration
- Development build: Fast compilation, source maps enabled
- Production build: Advanced compilation with optimizations
- Crossover configuration ensures code sharing between Clojure and ClojureScript

## Browser Compatibility
- Optimized for Chrome with requestAnimationFrame
- Uses HTML5 Canvas for rendering
- Keyboard-driven input system