(ns d3-cljs.array-tests
  (:require [d3-cljs.array :as a]
            [cljs.test :refer [deftest is testing] :as t :include-macros true]))

(deftest array-min-test
  (testing "min test"
    (is (= 4 (a/array-min [5 4 6])))
    (is (= 4 (a/array-min [nil 5 4 6])))
    (is (= 4 (a/array-min [nil 5 4 6] identity)))
    (is (= 4 (a/array-min [nil 6 5 4] dec))))  )

(deftest array-max-test
  (testing "max test"
    (is (= 6 (a/array-max [5 4 6])))
    (is (= 6 (a/array-max [nil 5 4 6])))
    (is (= 6 (a/array-max [nil 5 4 6] identity)))
    (is (= 6 (a/array-max [nil 6 5 4] dec)))))

(deftest array-extent-test
  (testing "extent test"
    (is (= [4 6] (a/array-extent [5 4 6])))
    (is (= [4 6] (a/array-extent [nil 5 4 6])))
    (is (= [4 6] (a/array-extent [nil 5 4 6] identity)))
    (is (= [4 6] (a/array-extent [nil 5 4 6] dec)))))

(deftest array-sum-test
  (testing "sum test"
    (is (= 15 (a/array-sum [5 4 6])))
    (is (= 15 (a/array-sum [nil 5 4 6])))
    (is (= 0 (a/array-sum [])))
    (is (= 18 (a/array-sum [nil 5 4 6] inc)))
    (is (= 0 (a/array-sum [] inc)))))

(deftest array-mean-test
  (testing "mean test"
    (is (= 1.5 (a/array-mean [1 2])))
    (is (= 1.5 (a/array-mean [1 2 nil])))
    (is (= nil (a/array-mean [nil])))
    (is (= nil (a/array-mean [])))
    ;; (is (= 1 (inc nil)))
    (is (= 1 (a/array-mean [nil] inc)))
    (is (= (reduce + (map #(/ % 3) [2 3 1])) (a/array-mean [1 2 nil] inc)))
    (is (= 1 (a/array-mean [nil nil 1] #(when-not % 1)))))
  (testing "mean can handle large numbers without overflowing"
    (let [inf (.-MAX_VALUE js/Number)]
      (is (= inf (a/array-mean [inf inf])))
      (is (= (- inf) (a/array-mean [(- inf) (- inf)])))))
  (testing "mean can handle large numbers without overflowing if given f"
    (let [inf (.-MAX_VALUE js/Number)]
      (is (= inf (a/array-mean [(dec inf) (dec inf)] inc)))
      (is (= (- inf) (a/array-mean [(- 1 inf) (- 1 inf)] dec))))))

(deftest array-quantile-test
  (testing "quantile returns first when p=0, last when p=1"
    (let [data [1 2 3 4]]
      (is (= 1 (a/array-quantile data 0)))
      (is (= 4 (a/array-quantile data 1))))
    (let [data [4 3 2 1]]
      (is (= 4 (a/array-quantile data 0)))
      (is (= 1 (a/array-quantile data 1)))))
  (testing "quantile uses the R-7 method"
    (let [data [3 6 7 8 8 10 13 15 16 20]]
      (is (= 3 (a/array-quantile data 0)))
      (is (= 7.25 (a/array-quantile data 0.25)))
      (is (= 9 (a/array-quantile data 0.5)))
      (is (= 14.5 (a/array-quantile data 0.75)))
      (is (= 20 (a/array-quantile data 1))))
    (let [data [3 6 7 8 8 9 10 13 15 16 20]]
      (is (= 3 (a/array-quantile data 0)))
      (is (= 7.5 (a/array-quantile data 0.25)))
      (is (= 9 (a/array-quantile data 0.5)))
      (is (= 14 (a/array-quantile data 0.75)))
      (is (= 20 (a/array-quantile data 1)))))
  (testing "quantile works when given a function"
    (is (= 1 (a/array-quantile [0 1 2 3] 0 inc)))
    (is (= 4 (a/array-quantile [3 2 1 0] 0 inc)))
    (is (= 7.25 (a/array-quantile [2 5 6 7 7 9 12 14 15 19] 0.25 inc)))
    (is (= 9 (a/array-quantile [2 5 6 7 7 9 12 14 15 19] 0.5 inc)))
    (is (= 7.5 (a/array-quantile [2 5 6 7 7 8 9 12 14 15 19] 0.25 inc)))
    (is (= 14 (a/array-quantile [2 5 6 7 7 8 9 12 14 15 19] 0.75 inc)))))

(deftest array-median-test
  (testing "median returns the median value"
    (is (= 1 (a/array-median [1])))
    (is (= 3 (a/array-median [5 1 2 3 4])))
    (is (= 11.5 (a/array-median [20 3])))
    (is (= 11.5 (a/array-median [3 20]))))
  (testing "median ignores nil"
    (is (= 1 (a/array-median [1 nil])))
    (is (= 11.5 (a/array-median [20 nil 3]))))
  (testing "median can handle large numbers without overflowing"
    (let [inf (.-MAX_VALUE js/Number)]
      (is (= inf (a/array-median [inf inf])))
      (is (= (- inf) (a/array-median [(- inf) (- inf)])))))
  (testing "median returns nil when array contains no observed values"
    (is (nil? (a/array-median [])))
    (is (nil? (a/array-median [nil]))))
  (testing "median works when given a function"
    (is (= 1 (a/array-median [0] inc)))
    (is (= 3 (a/array-median [4 0 1 2 3] inc)))
    (is (= 11.5 (a/array-median [19 2] inc)))
    (is (= 11.5 (a/array-median [2 19] inc))))
  (testing "median ignores nil when given a function"
    (is (= 1 (a/array-median [0 nil] inc)))
    (is (= 11.5 (a/array-median [19 nil 2] inc))))
  (testing "median can handle large numbers without overflowing when given a function"
    (let [inf (.-MAX_VALUE js/Number)]
      (is (= inf (a/array-median [(dec inf) (dec inf)] inc)))
      (is (= (- inf) (a/array-median [(dec (- inf)) (dec (- inf))] inc)))))
  (testing "median returns nil when array contains no observed values when given a function"
    (is (nil? (a/array-median [] inc)))
    (is (nil? (a/array-median [nil] inc)))))


(deftest array-variance-test
  (testing "variance returns variance value"
    (is (= 2.5 (a/array-variance [5 1 2 3 4])))
    (is (= 144.5 (a/array-variance [20 3])))
    (is (= 144.5 (a/array-variance [3 20]))))
  (testing "variance ignores nil"
    (is (= 2.5 (a/array-variance [nil 1 2 3 4 5])))
    (is (= 2.5 (a/array-variance [1 2 3 4 5 nil])))
    (is (= 13 (a/array-variance [10 nil 3 nil 5 nil]))))
  (testing "variance can handle large numbers without overflowing"
    (let [inf (.-MAX_VALUE js/Number)]
      (is (zero? (a/array-variance [inf inf])))
      (is (zero? (a/array-variance [(- inf) (- inf)])))))
  (testing "variance returns nil if array has < 2 numbers"
    (is (nil? (a/array-variance [1])))
    (is (nil? (a/array-variance [])))
    (is (nil? (a/array-variance [nil])))
    (is (nil? (a/array-variance [nil nil]))))

  (testing "variance returns variance value when given f"
    (is (= 2.5 (a/array-variance [5 1 2 3 4] inc)))
    (is (= 144.5 (a/array-variance [20 3] inc)))
    (is (= 144.5 (a/array-variance [3 20] inc))))
  (testing "variance ignores nil when given f"
    (is (= 2.5 (a/array-variance [nil 1 2 3 4 5] inc)))
    (is (= 2.5 (a/array-variance [1 2 3 4 5 nil] inc)))
    (is (= 13 (a/array-variance [10 nil 3 nil 5 nil] inc))))
  (testing "variance can handle large numbers without overflowing when given f"
    (let [inf (.-MAX_VALUE js/Number)]
      (is (zero? (a/array-variance [(dec inf) (dec inf)] inc)))
      (is (zero? (a/array-variance [(- 1 inf) (- 1 inf)] dec)))))
  (testing "variance returns nil if array has < 2 numbers when given f"
    (is (nil? (a/array-variance [1] inc)))
    (is (nil? (a/array-variance [] inc)))
    (is (nil? (a/array-variance [nil] inc)))
    (is (nil? (a/array-variance [nil nil 1] inc)))))


(deftest array-deviation-test
  (let [sqrt #(.sqrt js/Math %)]
    (testing "deviation returns deviation value"
      (is (= (sqrt 2.5) (a/array-deviation [5 1 2 3 4])))
      (is (= (sqrt 144.5) (a/array-deviation [20 3])))
      (is (= (sqrt 144.5) (a/array-deviation [3 20]))))
    (testing "deviation ignores nil"
      (is (= (sqrt 2.5) (a/array-deviation [nil 1 2 3 4 5])))
      (is (= (sqrt 2.5) (a/array-deviation [1 2 3 4 5 nil])))
      (is (= (sqrt 13) (a/array-deviation [10 nil 3 nil 5 nil]))))
    (testing "deviation can handle large numbers without overflowing"
      (let [inf (.-MAX_VALUE js/Number)]
        (is (zero? (a/array-deviation [inf inf])))
        (is (zero? (a/array-deviation [(- inf) (- inf)])))))
    (testing "deviation returns nil if array has < 2 numbers"
      (is (nil? (a/array-deviation [1])))
      (is (nil? (a/array-deviation [])))
      (is (nil? (a/array-deviation [nil])))
      (is (nil? (a/array-deviation [nil nil]))))

    (testing "deviation returns deviation value when given f"
      (is (= (sqrt 2.5) (a/array-deviation [5 1 2 3 4] inc)))
      (is (= (sqrt 144.5) (a/array-deviation [20 3] inc)))
      (is (= (sqrt 144.5) (a/array-deviation [3 20] inc))))
    (testing "deviation ignores nil when given f"
      (is (= (sqrt 2.5) (a/array-deviation [nil 1 2 3 4 5] inc)))
      (is (= (sqrt 2.5) (a/array-deviation [1 2 3 4 5 nil] inc)))
      (is (= (sqrt 13) (a/array-deviation [10 nil 3 nil 5 nil] inc))))
    (testing "deviation can handle large numbers without overflowing when given f"
      (let [inf (.-MAX_VALUE js/Number)]
        (is (zero? (a/array-deviation [(dec inf) (dec inf)] inc)))
        (is (zero? (a/array-deviation [(- 1 inf) (- 1 inf)] dec)))))
    (testing "deviation returns nil if array has < 2 numbers when given f"
      (is (nil? (a/array-deviation [1] inc)))
      (is (nil? (a/array-deviation [] inc)))
      (is (nil? (a/array-deviation [nil] inc)))
      (is (nil? (a/array-deviation [nil nil 1] inc))))))
