(ns attack.display-math)

(defn pt-to-display-pt [{total-rows :total-rows
                         bheight :block-height
                         bwidth :block-width
                         dheight :display-height} [x y]]
  (let [diff (- total-rows y)
        adj-y (* (+ diff 1) bheight)
        y (- dheight adj-y)]
    [(* x bwidth) y]))
