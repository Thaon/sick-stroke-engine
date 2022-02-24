const Game = {
  Assets: [
    {
      name: "player",
      path: "./assets/circle.png",
    },
  ],

  Setup: (engine) => {
    let room = engine.CreateRoom("room0", 800, 600);
    console.log(engine);
  },
};

export default Game;
