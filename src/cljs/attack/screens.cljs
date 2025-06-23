(ns attack.screens)

(def current-screen (atom :title))

(defn hide-element [element]
  (.add (.-classList element) "hidden"))

(defn show-element [element]
  (.remove (.-classList element) "hidden"))

(defn show-screen! [screen-id title-screen-el instructions-screen-el canvas-el cleanup-game-fn]
  "Show the specified screen and hide others"
  ;; Clean up game when leaving game screen
  (when (and (= @current-screen :game) (not= screen-id :game))
    (when cleanup-game-fn (cleanup-game-fn)))
  
  ;; Hide all screens and canvas
  (hide-element title-screen-el)
  (hide-element instructions-screen-el)
  (hide-element canvas-el)
  
  ;; Show the requested screen
  (case screen-id
    :title (do
             (show-element title-screen-el)
             (reset! current-screen :title))
    :instructions (do
                    (show-element instructions-screen-el)
                    (reset! current-screen :instructions))
    :game (do
            ;; Hide all overlays and show the canvas
            (show-element canvas-el)
            (reset! current-screen :game)
            ;; Game initialization will be handled by entrypoint
            )))

(defn setup-button-listeners! [start-btn instructions-btn back-btn title-screen-el instructions-screen-el canvas-el init-game-fn cleanup-game-fn]
  "Set up click event listeners for all buttons"
  ;; Start Game button
  (.addEventListener start-btn "click" 
    (fn [_] 
      (show-screen! :game title-screen-el instructions-screen-el canvas-el cleanup-game-fn)
      (when init-game-fn (init-game-fn))))
  
  ;; Show Instructions button  
  (.addEventListener instructions-btn "click"
    (fn [_] (show-screen! :instructions title-screen-el instructions-screen-el canvas-el cleanup-game-fn)))
  
  ;; Back to Title button
  (.addEventListener back-btn "click"
    (fn [_] (show-screen! :title title-screen-el instructions-screen-el canvas-el cleanup-game-fn))))

(defn setup-keyboard-listeners! [title-screen-el instructions-screen-el canvas-el init-game-fn cleanup-game-fn]
  "Set up keyboard event listeners for navigation and game controls"
  ;; General keyboard navigation
  (.addEventListener js/document "keydown"
    (fn [event]
      (let [key (.-key event)
            screen @current-screen]
        (cond
          ;; ESC from instructions -> title
          (and (= screen :instructions) (= key "Escape"))
          (show-screen! :title title-screen-el instructions-screen-el canvas-el cleanup-game-fn)
          
          ;; Enter/Space from title -> start game
          (and (= screen :title) (or (= key "Enter") (= key " ")))
          (do
            (.preventDefault event)
            (show-screen! :game title-screen-el instructions-screen-el canvas-el cleanup-game-fn)
            (when init-game-fn (init-game-fn)))))))
  
  ;; Game ESC handling (only ESC key for returning to title)
  (.addEventListener (.-body js/document) "keyup"
    (fn [event]
      (when (and (= @current-screen :game) (= (.-key event) "Escape"))
        ;; ESC from game -> return to title
        (show-screen! :title title-screen-el instructions-screen-el canvas-el cleanup-game-fn)))))

(defn init-screen-system! [init-game-fn cleanup-game-fn]
  "Initialize the entire screen management system"
  (let [title-screen-el (.getElementById js/document "title-screen")
        instructions-screen-el (.getElementById js/document "instructions-screen")
        canvas-el (.getElementById js/document "canvas")
        start-btn (.getElementById js/document "start-game-btn")
        instructions-btn (.getElementById js/document "show-instructions-btn")
        back-btn (.getElementById js/document "back-to-title-btn")]
    
    ;; Set up all event listeners
    (setup-button-listeners! start-btn instructions-btn back-btn 
                           title-screen-el instructions-screen-el canvas-el init-game-fn cleanup-game-fn)
    (setup-keyboard-listeners! title-screen-el instructions-screen-el canvas-el
                             init-game-fn cleanup-game-fn)
    
    ;; Start with title screen visible
    (show-screen! :title title-screen-el instructions-screen-el canvas-el cleanup-game-fn)))

(defn get-current-screen []
  "Get the current screen state"
  @current-screen)