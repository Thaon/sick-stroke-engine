import { useRef, useEffect } from "react";
import Sketch from "react-p5";
import { EngineCore } from "./EngineCore";
const config = require("./config.json");

const Engine = (props) => {
  const Game = new EngineCore();
  const canvasRef = useRef(null);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(config.view_width, config.view_height);
    Game.Run(props.assets, p5);
  };

  const draw = (p5) => {
    Game.Update(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Engine;
