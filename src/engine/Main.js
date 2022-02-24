import { useRef, useEffect } from "react";
import Sketch from "react-p5";
const config = require("./config.json");

const Engine = (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(config.view_width, config.view_height);
    props.game.Run(props.assets, p5);
  };

  const draw = (p5) => {
    props.game.Update(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Engine;
