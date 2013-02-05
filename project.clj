(defproject tetris-attack-clojure "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.4.0"]]
  :plugins [
            [lein-cljsbuild "0.3.0"]
            [lein-swank "1.4.5"]
            ]
  :cljsbuild {
              :builds [{
                        :source-paths ["src-cljs"]
                        :compiler {
                                   :output-to "war/javascripts/main.js"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   }
              }]})