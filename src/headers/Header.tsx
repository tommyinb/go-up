import { useContext } from "react";
import { useStage } from "../forms/useStage";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { DownTimer } from "./DownTimer";
import "./Header.css";
import { SuccessTime } from "./SuccessTime";

export function Header() {
  const { mode, setMode } = useContext(MenuContext);

  const { round } = useContext(GameContext);

  const stage = useStage();

  return (
    <div
      className={`headers-Header ${mode === Mode.Game ? "active" : ""} ${
        round.time <= 0 ? "disabled" : ""
      }`}
    >
      <div className="name" onDoubleClick={() => setMode(Mode.Menu)}>
        {stage?.config.name}
      </div>

      <DownTimer />

      <SuccessTime />
    </div>
  );
}
