import { useThree } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import { useStage } from "../headers/useStage";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { GameContext } from "./GameContext";

export function useTime() {
  const { mode } = useContext(MenuContext);

  const { round, setRound } = useContext(GameContext);

  const { clock } = useThree();

  const stage = useStage();

  useEffect(() => {
    const start =
      clock.getElapsedTime() + (mode === Mode.Game ? round.index * 0 : 0);

    const timer = setInterval(() => {
      const time = Math.max(
        (stage?.config.time ?? 30) - (clock.getElapsedTime() - start),
        0
      );

      setRound((round) => (round.time !== time ? { ...round, time } : round));
    }, 10);

    return () => clearInterval(timer);
  }, [clock, mode, round.index, setRound, stage?.config.time]);
}
