(defproject tetris-attack-clojure "1.0.3-SNAPSHOT"
  :description "Tetris Attack Implementation in Clojure"
  :dependencies [
                 [org.clojure/clojure "1.12.1"]
                 [org.clojure/clojurescript "1.11.132"]
                 [compojure "1.7.1"]
                 ]
  :source-paths ["src/clj"]
  :test-paths ["test"]
  :plugins [
            [lein-cljsbuild "1.1.8"]
            [lein-ring "0.12.6"]
            ]
  :profiles {:dev {:dependencies [[org.clojure/test.check "1.1.1"]
                                  [criterium "0.4.6"]]}}
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
                                   :pretty-print true}}
                       {:source-paths ["src/cljs", "src/cljs/attack"]
                        :compiler {:output-to "resources/public/js/game.prod.js"
                                   :optimizations :advanced}}]})
