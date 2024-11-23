import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./Timer.css";

export function Timer() {
  const { round } = useContext(GameContext);

  return (
    <div className={`headers-Timer ${round.time > 0 ? "active" : ""}`}>
      {round.time.toFixed(2)}
    </div>
  );
}
