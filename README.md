# Simple Clojure Game (Tetris Attack/Panel de Pon Clone)

A game to practice clojure and clojurescript. Only works in Chrome.

[![Build Status](https://travis-ci.org/jamiely/simple-clojure-game.png)](https://travis-ci.org/jamiely/simple-clojure-game)

## Usage

    # Install plugins and dependencies based on project.clj
    bin/lein install
    # Compile Clojurescript and crossover code
    bin/lein cljsbuild once
    # Start an HTTP server on port 3000
    bin/lein ring server
    # Navigate to: http://localhost:3000/game.html

## Tests

    lein test

## Development

    bundle install
    guard

## Browser Repl

    # Starts a server listening on port 9000 which the game page 
    # can communicate with. Run after `lein ring server`
    lein trampoline cljsbuild repl-listen

## Media

![8c8eb47](media/8c8eb47.png)
![0b1d1da gameover](media/0b1d1da-gameover.png)

* 89aad03 - http://youtu.be/wasgwLAFmwY
* 27463f8 - http://youtu.be/WWK8RFEY04I
* 0a9ca69 - http://youtu.be/t9HijqwaZbs
* 2ed0943 - http://youtu.be/5W6ntRg5AjE
* 16c6402 - http://youtu.be/CuqilytlfJE
* 391bb24 - http://youtu.be/wai3ft4yHl8
* f349bbd - http://youtu.be/pUMlQips6o0
* 1e4683f - http://youtu.be/KoNOEXhocbw
* d6ef2ae - http://youtu.be/w4A6288J2x8

