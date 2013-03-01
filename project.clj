(defproject tetris-attack-clojure "1.0.3-SNAPSHOT"
  :description "Tetris Attack Implementation in Clojure"
  :dependencies [
                 [org.clojure/clojure "1.4.0"]
                 [compojure "1.1.3"]
                 ]
  :source-paths ["src/clj"]
  :plugins [
            [lein-cljsbuild "0.3.0"]
            [lein-swank "1.4.5"]
            [lein-ring "0.8.2"]
            ]
  :ring {:handler attack.core/handler }
  :cljsbuild {:crossovers [attack.point
                           attack.color
                           attack.tick
                           attack.block
                           attack.grid
                           attack.display-math
                           attack.cursor
                           attack.game
                           attack.game-interface]
              :crossover-path "src/cljs/crossovers"
              :builds [{:source-paths ["src/cljs", "src/cljs/attack"]
                        :compiler {:output-to "resources/public/js/game.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]})
