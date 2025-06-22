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
- Comprehensive test suite in `test/attack/` covering game mechanics
- Tests written for shared logic components
- Use `lein test` for single run or Guard for continuous testing

## Build Configuration
- Development build: Fast compilation, source maps enabled
- Production build: Advanced compilation with optimizations
- Crossover configuration ensures code sharing between Clojure and ClojureScript

## Browser Compatibility
- Optimized for Chrome with requestAnimationFrame
- Uses HTML5 Canvas for rendering
- Keyboard-driven input system