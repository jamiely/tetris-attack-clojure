(defproject tetris-attack-clojure "1.0.0-SNAPSHOT"
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
  :cljsbuild {
              :builds [{
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/game.js"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   }
              }]})