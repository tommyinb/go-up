import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./Timer.css";

export function Timer() {
  const { roundTime } = useContext(GameContext);

  return <div className="headers-Timer">{roundTime.toFixed(2)}</div>;
}
