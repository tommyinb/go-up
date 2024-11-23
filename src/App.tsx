import "./App.css";
import { DebugProvider } from "./debugs/DebugProvider";
import { Game } from "./games/Game";
import { GameProvider } from "./games/GameProvider";
import { Failure } from "./headers/Failure";
import { Rebirth } from "./headers/Rebirth";
import { Scene } from "./scenes/Scene";
import { SceneProvider } from "./scenes/SceneProvider";
import { Timer } from "./timers/Timer";

function App() {
  return (
    <div className="App">
      <DebugProvider>
        <SceneProvider>
          <GameProvider>
            <Scene>
              <Game />
            </Scene>

            <Timer />

            <Rebirth />
            <Failure />
          </GameProvider>
        </SceneProvider>
      </DebugProvider>
    </div>
  );
}

export default App;
