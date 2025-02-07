import { useContext } from "react";
import { useStage } from "../forms/useStage";
import { GameContext } from "../games/GameContext";
import { HeartbeatPlay } from "./HeartbeatPlay";

export function Heartbeat() {
  const stage = useStage();
  const { round } = useContext(GameContext);

  return (
    <>{stage && round.index >= stage.config.round - 1 && <HeartbeatPlay />}</>
  );
}
