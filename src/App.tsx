import "./App.css";
import { DebugProvider } from "./debugs/DebugProvider";
import { Failure } from "./forms/Failure";
import { Rebirth } from "./forms/Rebirth";
import { Success } from "./forms/Success";
import { Game } from "./games/Game";
import { GameProvider } from "./games/GameProvider";
import { Timer } from "./headers/Timer";
import { Menu } from "./menus/Menu";
import { MenuProvider } from "./menus/MenuProvider";
import { Scene } from "./scenes/Scene";
import { SceneProvider } from "./scenes/SceneProvider";

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
