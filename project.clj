(defproject tetris-attack-clojure "1.0.3-SNAPSHOT"
  :description "Tetris Attack Implementation in Clojure"
  :dependencies [
                 [org.clojure/clojure "1.12.1"]
                 ]
  :source-paths ["src/clj"]
  :test-paths ["test"]
  :profiles {:dev {:dependencies [[org.clojure/test.check "1.1.1"]
                                  [criterium "0.4.6"]]}}
)
