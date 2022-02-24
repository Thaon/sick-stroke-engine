import { GameObject } from "../engine/EngineCore";

const Game = {
  Assets: [
    {
      name: "player",
      path: "./assets/circle.png",
    },
  ],

  Setup: (engine) => {
    let room = engine.CreateRoom("room0", 800, 600);
    let circle = new GameObject("circle")
    engine.Instantiate(circle)
    circle.sprites.push(engine.images[0])
    circle.scale = 0.1 
    console.log(engine);
  },
};


export default Game;
