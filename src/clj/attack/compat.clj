(ns attack.compat)

(defn log [msg]
  (println (str msg)))

(defn compat-read-string [val]
  (read-string val))

(defn hex-to-int [hex-str]
  (read-string (str "0x" hex-str)))

(defn int-to-hex [int]
  (format "%02x" int))