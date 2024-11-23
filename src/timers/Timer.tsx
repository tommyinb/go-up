import { useContext } from "react";
import { DebugContext } from "../debugs/DebugContext";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import "./Timer.css";

export function Timer() {
  const { mode } = useContext(MenuContext);

  const { round } = useContext(GameContext);

  const { debug, setDebug } = useContext(DebugContext);

  return (
    <div
      className={`headers-Timer ${mode === Mode.Game ? "active" : ""} ${
        round.time <= 0 ? "disabled" : ""
      }`}
      onDoubleClick={() => setDebug(!debug)}
    >
      {round.time.toFixed(2)}
    </div>
  );
}
