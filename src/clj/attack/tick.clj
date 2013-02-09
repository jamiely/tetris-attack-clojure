(ns attack.tick)

(defn ticks0? [{ticks :ticks}]
  (and (not (nil? ticks))
       (zero? ticks)))

(defn dec-ticks [{ticks :ticks :as thing}]
  "If the thing has ticks, decrement the ticks"
  (if (nil? ticks)
    thing
    (assoc thing :ticks (- ticks 1))))

