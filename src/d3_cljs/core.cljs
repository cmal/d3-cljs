(ns d3-cljs.core
  (:require [cljs.test :refer (deftest is)])
  )

;; for mies
;; (ns d3-cljs.core
;;   (:require [clojure.browser.repl :as repl]))

;; ;; (defonce conn
;; ;;   (repl/connect "http://localhost:9000/repl"))

;; (enable-console-print!)

;; (println "Hello world!")


;; written tests in mies

;; for shadow-cljs

;; (shadow.cljs.devtools.api/nrepl-select :d3-cljs)
(defn hello []
  "hello")

#_(deftest test-hello
    (is (= "hello" (hello))))
