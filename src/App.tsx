import "./App.css";
import { DebugProvider } from "./debugs/DebugProvider";
import { Game } from "./games/Game";
import { GameProvider } from "./games/GameProvider";
import { Header } from "./headers/Header";
import { Scene } from "./scenes/Scene";
import { SceneProvider } from "./scenes/SceneProvider";

function App() {
  return (
    <div className="App">
      <DebugProvider>
        <SceneProvider>
          <GameProvider>
            <Scene>
              <Game />
            </Scene>

            <Header />
          </GameProvider>
        </SceneProvider>
      </DebugProvider>
    </div>
  );
}

export default App;
