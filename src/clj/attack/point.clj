(ns attack.point)

(defn point [x y]
  [x y])

(defn point-add [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(defn up []
  (point 0 1))

(defn down []
  (point 0 -1))

(defn left []
  (point -1 0))

(defn right []
  (point 1 0))

(defn above [pt]
  (point-add pt (up)))

(defn below [pt]
  (point-add pt (down)))

(defn after [pt]
  (point-add pt (right)))

(defn before [pt]
  (point-add pt (left)))

(defn horizontal []
  [(left) (right)])

(defn vertical []
  [(down) (up)])

(defn directions []
  (concat (horizontal) (vertical)))

