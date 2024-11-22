import "./App.css";
import { Player } from "./characters/Player";
import { DebugProvider } from "./debugs/DebugProvider";
import { Game } from "./games/Game";
import { GameProvider } from "./games/GameProvider";
import { Header } from "./headers/Header";
import { Scene } from "./scenes/Scene";
import { SceneProvider } from "./scenes/SceneProvider";
import { Stage } from "./stages/stage1/Stage";

function App() {
  return (
    <div className="App">
      <DebugProvider>
        <SceneProvider>
          <GameProvider>
            <Scene>
              <Game>
                <Stage />

                <Player />
              </Game>
            </Scene>

            <Header />
          </GameProvider>
        </SceneProvider>
      </DebugProvider>
    </div>
  );
}

export default App;
