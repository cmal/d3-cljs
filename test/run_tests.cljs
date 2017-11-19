(ns d3-cljs.run-tests
  (:require
   [cljs.test :as t :include-macros true]
   [d3-cljs.core-tests]
   [d3-cljs.array-tests]))

(enable-console-print!)

#_(t/deftest my-first-test
    (t/is (= 1 2)))

#_(t/deftest amin-test
    (t/testing "test min in array")
    (t/is (= 4 (min [5 4 6])))
    (t/is (= 4 (min [nil 5 4 6])))
    (t/is (= 6 (min [nil 5 4 6] identity)))
    (t/is (= 4 (min [nil 6 5 4] dec))))

(set! *main-cli-fn* #(t/run-tests
                      'd3-cljs.core-tests
                      'd3-cljs.array-tests))
