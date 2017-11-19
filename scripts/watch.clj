(require '[cljs.build.api :as b])

(b/watch (b/inputs "test" "src")
         {:main       'd3_cljs.run_tests
          :target     :nodejs
          :output-to  "out/d3_cljs.js"
          :output-dir "out"
          :verbose    true})
