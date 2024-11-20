import "./App.css";
import { Character } from "./characters/Character";
import { DebugProvider } from "./debugs/DebugProvider";
import { GameProvider } from "./games/GameProvider";
import { Scene } from "./scenes/Scene";
import { SceneProvider } from "./scenes/SceneProvider";
import { Stage } from "./stages/Stage";

function App() {
  return (
    <div className="App">
      <DebugProvider>
        <SceneProvider>
          <Scene>
            <GameProvider>
              <Stage />

              <Character />
            </GameProvider>
          </Scene>
        </SceneProvider>
      </DebugProvider>
    </div>
  );
}

export default App;
