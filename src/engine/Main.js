import { useRef, useEffect } from "react";

const config = require("./config.json");

const PIXI = require("pixi.js");
const Keyboard = require("pixi.js-keyboard");
const Mouse = require("pixi.js-mouse");

const Engine = (props) => {
  //Create a Pixi Application
  var app = new PIXI.Application({
    width: config.view_width,
    height: config.view_height,
    antialiasing: config.antialiasing,
    backgroundAlpha: config.backgroundAlpha,
    resolution: config.resolution,
  });

  //listen for window resize and resize renderer
  window.addEventListener("resize", function () {
    app.renderer.resize(config.view_width, config.view_height);
  });

  //disable right click menu in game window
  app.view.addEventListener("contextmenu", (e) => {
    window.wasRightClick = true;
    e.preventDefault();
  });

  // Start the game loop
  app.ticker.add((delta) => gameLoop(delta));

  Mouse.events.on(
    "released",
    null,
    (
      buttonCode,
      event,
      mouseX,
      mouseY,
      mouseOriginX,
      mouseOriginY,
      mouseMoveX,
      mouseMoveY
    ) => {
      console.log(
        buttonCode,
        mouseOriginX,
        mouseOriginY,
        mouseX,
        mouseY,
        mouseMoveX,
        mouseMoveY
      );
    }
  );

  function gameLoop(delta) {
    // Update input
    Keyboard.update();
    Mouse.update();

    // Update game logic

    // Render the stage
  }

  //attach PixiJS canvas to the react application
  const container = useRef(null);
  useEffect(() => {
    container.current.innerHTML = "";
    container.current.append(app.view);
  }, [container, app.view]);

  return (
    <div>
      <div ref={container} />
    </div>
  );
};

export default Engine;
