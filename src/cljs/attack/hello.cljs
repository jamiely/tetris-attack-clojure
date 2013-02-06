(ns attack.hello)
(defn ^:export greet [n]
  (str "Hello " n))

; a point
(defn point [x y]
  [x y])

; a basic block, not to be confused with non-basic blocks
; such as garbage blocks
(defn simple-block [pos type]
  {:simple-block {
           :type type
           :position pos
           }
   })

; complex blocks must be all of a single type
(defn complex-block[blocks]
  {:complex-block {:blocks blocks}})

(defn grid [blocks]
  {:grid {
          :blocks blocks
          }})

