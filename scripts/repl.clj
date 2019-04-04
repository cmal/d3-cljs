(require
  '[cljs.repl :as repl]
  '[cljs.repl.node :as node])

(repl/repl (node/repl-env)

           ;; add node libs
           :language-in :ecmascript6
           :language-out :ecmascript6
           :foreign-libs [{:file        "../d3-array/src/ticks.js"
                           :provides    ["d3-array.ticks"]
                           :module-type :nodejs}]
           :output-dir "out"
           :cache-analysis false)
