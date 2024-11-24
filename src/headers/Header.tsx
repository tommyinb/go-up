import { useContext } from "react";
import { DebugContext } from "../debugs/DebugContext";
import { useStage } from "../forms/useStage";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import "./Header.css";
import { Timer } from "./Timer";

export function Header() {
  const { mode } = useContext(MenuContext);

  const { round } = useContext(GameContext);

  const stage = useStage();

  const { debug, setDebug } = useContext(DebugContext);

  return (
    <div
      className={`headers-Header ${mode === Mode.Game ? "active" : ""} ${
        round.time <= 0 ? "disabled" : ""
      }`}
      onDoubleClick={() => setDebug(!debug)}
    >
      <div className="name">{stage?.config.name}</div>

      <Timer />
    </div>
  );
}
