import { useRef, useEffect } from "react";
import Sketch from "react-p5";
import { EngineCore } from "./EngineCore";
const config = require("./config.json");

const Engine = (props) => {
  const Engine = new EngineCore();

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(config.view_width, config.view_height);
    Engine.Run(p5);
  };

  const draw = (p5) => {
    Engine.Update(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Engine;
