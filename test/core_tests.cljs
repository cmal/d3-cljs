(ns d3-cljs.core-tests
  (:require [d3-cljs.core :refer [hello]]
            [cljs.test :refer [deftest testing is] :as t :include-macros true]))

(deftest hello-test
  (testing "hello is working")
  (is (= "hello" (hello))))
