import Main from "./engine/Main";
import { useEffect } from "react";

function App() {
  let assets = [
    {
      name: "player",
      path: "./assets/circle.png",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Sick Stroke Engine</h1>
      <Main assets={assets} />
    </div>
  );
}

export default App;
