import "./App.css";
import { DebugProvider } from "./debugs/DebugProvider";
import { Game } from "./games/Game";
import { GameProvider } from "./games/GameProvider";
import { Failure } from "./headers/Failure";
import { Rebirth } from "./headers/Rebirth";
import { Success } from "./headers/Success";
import { Menu } from "./menus/Menu";
import { MenuProvider } from "./menus/MenuProvider";
import { Scene } from "./scenes/Scene";
import { SceneProvider } from "./scenes/SceneProvider";
import { Timer } from "./timers/Timer";

function App() {
  return (
    <div className="App">
      <DebugProvider>
        <MenuProvider>
          <SceneProvider>
            <GameProvider>
              <Scene>
                <Game />
              </Scene>

              <Menu />

              <Timer />

              <Rebirth />
              <Failure />
              <Success />
            </GameProvider>
          </SceneProvider>
        </MenuProvider>
      </DebugProvider>
    </div>
  );
}

export default App;
