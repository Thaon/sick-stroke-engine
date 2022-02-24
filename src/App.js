import Main from "./engine/Main";
import { EngineCore } from "./engine/EngineCore";
import Game from "./Game/Game";

import { useEffect } from "react";

function App() {
  const Engine = new EngineCore();

  console.log(Game.Assets);

  useEffect(() => {
    Game.Setup(Engine);
  }, []);

  return (
    <div className="App">
      <h1>Sick Stroke Engine</h1>
      <Main game={Engine} assets={Game.Assets} />
    </div>
  );
}

export default App;
