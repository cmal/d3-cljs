(ns d3-cljs.array
  )

;; ==== Statistics ====

(comment
  {:d3
   "Returns the minimum value in the given array using natural order. If the array is empty, returns undefined. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the minimum value.

Unlike the built-in Math.min, this method ignores undefined, null and NaN values; this is useful for ignoring missing data. In addition, elements are compared using natural order rather than numeric order. For example, the minimum of the strings [“20”, “3”] is “20”, while the minimum of the numbers [20, 3] is 3."
   :d3-cljs
   "Returns the minimum value in the given array using `numeric` order. If the array is empty, returns undefined. An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the minimum value.

Unlike the built-in Math.min, this method ignores `nil` values; this is useful for ignoring missing data."
   })

(defn array-min
  ([v]
   (apply min (remove nil? v)))
  ([v f]
   (apply (partial min-key f) (remove nil? v))))

(comment
  {:d3
   "Returns the maximum value in the given array using natural order. If the array is empty, returns undefined. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the maximum value.

  Unlike the built-in Math.max, this method ignores undefined values; this is useful for ignoring missing data. In addition, elements are compared using natural order rather than numeric order. For example, the maximum of the strings [“20”, “3”] is “3”, while the maximum of the numbers [20, 3] is 20."
   :d3-cljs
   "Returns the maximum value in the given array using `numeric` order. If the array is empty, returns undefined. An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the maximum value.

  Unlike the built-in Math.max, this method ignores undefined values; this is useful for ignoring missing data."})

(defn array-max
  ([v]
   (apply max (remove nil? v)))
  ([v f]
   (apply (partial max-key f) (remove nil? v))))


(comment
  {:d3
   "Returns the minimum and maximum value in the given array using natural order. If the array is empty, returns [undefined, undefined]. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the extent."
   :d3-cljs
   "Returns the minimum and maximum value in the given array using `numeric` order. If the array is empty, returns [`nil`, `nil`]. An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the extent."})

(defn array-extent
  [& args]
  [(apply array-min args) (apply array-max args)])


(comment
  {:d3
   "Returns the sum of the given array of numbers. If the array is empty, returns 0. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the sum. This method ignores undefined and NaN values; this is useful for ignoring missing data."
   :d3-cljs
   "Returns the sum of the given array of numbers. If the array is empty, returns 0. An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the sum. This method ignores `nil` values; this is useful for ignoring missing data."})

(defn array-sum
  ([v]
   (apply + (remove nil? v)))
  ([v f]
   (apply + (map f (remove nil? v)))))

(comment
  {:d3
   "Returns the mean of the given array of numbers. If the array is empty, returns undefined. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the mean. This method ignores undefined and NaN values; this is useful for ignoring missing data."
   :d3-cljs
   "Returns the mean of the given array of numbers. If the array is empty, returns undefined. An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the mean. This method ignores `nil` values; this is useful for ignoring missing data."})

(defn array-mean
  ([v]
   (let [v1  (remove nil? v)
         cnt (count v1)]
     (when-not (zero? cnt)
       (apply + (map #(/ % cnt) v1)))))
  ([v f]
   (let [v1  (remove nil? (map f v))
         cnt (count v1)]
     (when-not (zero? cnt)
       (apply + (map #(/ % cnt) v1))))))

(comment
  {:d3
   "Returns the p-quantile of the given sorted array of numbers, where p is a number in the range [0, 1]. For example, the median can be computed using p = 0.5, the first quartile at p = 0.25, and the third quartile at p = 0.75. This particular implementation uses the R-7 method, which is the default for the R programming language and Excel. For example:

var a = [0, 10, 30];
d3.quantile(a, 0); // 0
d3.quantile(a, 0.5); // 10
d3.quantile(a, 1); // 30
d3.quantile(a, 0.25); // 5
d3.quantile(a, 0.75); // 20
d3.quantile(a, 0.1); // 2
An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the quantile."
   :d3-cljs
   "Returns the p-quantile of the given sorted array of numbers, where p is a number in the range [0, 1]. For example, the median can be computed using p = 0.5, the first quartile at p = 0.25, and the third quartile at p = 0.75. This particular implementation uses the R-7 method, which is the default for the R programming language and Excel. For example:

(def a [0 10 30])
(array-quantile a 0)    ;; => 0
(array-quantile a 0.5)  ;; => 10
(array-quantile a 1)    ;; => 30
(array-quantile a 0.25) ;; => 5
(array-quantile a 0.75) ;; => 20
(array-quantile a 0.1)  ;; => 2
An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the quantile."})

(defn array-quantile
  ([v p]
   (when-not (empty? v)
     (let [cnt (count v)]
       (cond
         (or (<= p 0) (< cnt 2)) (first v)
         (>= p 1)                (last v)
         :else                   (let [tmp   (* p (dec cnt))
                                       index (Math/floor tmp)
                                       val0  (nth v index)
                                       val1  (nth v (inc index))]
                                   (+ val0 (* (- val1 val0) (- tmp index))))))))
  ([v p f]
   (array-quantile (map f v) p)))


(comment
  {:d3
   "Returns the median of the given array of numbers using the R-7 method. If the array is empty, returns undefined. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the median. This method ignores undefined and NaN values; this is useful for ignoring missing data."
   :d3-cljs
   "Returns the median of the given array of numbers using the R-7 method. If the array is empty, returns undefined. An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the median. This method ignores `nil` values; this is useful for ignoring missing data."})

(defn array-median
  ([v]
   (array-median v identity))
  ([v f]
   (array-quantile (map f (sort (remove nil? v))) 0.5)))


(comment
  {:d3
   "Returns an unbiased estimator of the population variance of the given array of numbers. If the array has fewer than two values, returns undefined. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the variance. This method ignores undefined and NaN values; this is useful for ignoring missing data."
   :d3-cljs
   "Returns an unbiased estimator of the population variance of the given array of numbers. If the array has fewer than two values, returns undefined. An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the variance. This method ignores `nil` values; this is useful for ignoring missing data."})

(defn array-variance
  ([v]
   (array-variance v identity))
  ([v f]
   (let [v1     (map f (remove nil? v))
         cnt    (count v1)
         mean   (array-mean v1)
         square #(* % %)]
     (when (>= cnt 2)
       (/ (apply + (map (comp square -) v1 (repeat mean)))
          (dec cnt))))))

(comment
  {:d3
   "Returns the standard deviation, defined as the square root of the bias-corrected variance, of the given array of numbers. If the array has fewer than two values, returns undefined. An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the standard deviation. This method ignores undefined and NaN values; this is useful for ignoring missing data."
   :d3-cljs
   "Returns the standard deviation, defined as the square root of the bias-corrected variance, of the given array of numbers. If the array has fewer than two values, returns undefined. An optional function `f` may be specified, which is equivalent to calling (map f array) before computing the standard deviation. This method ignores `nil` values; this is useful for ignoring missing data."})

(defn array-deviation
  [& args]
  (when-let [variance (apply array-variance args)]
    (.sqrt js/Math variance)))


;; ==== End Statistics ====
