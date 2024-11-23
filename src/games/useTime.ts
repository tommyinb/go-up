import { useThree } from "@react-three/fiber";
import { useContext, useEffect, useMemo } from "react";
import { GameContext } from "./GameContext";

export function useTime() {
  const { round, setRound } = useContext(GameContext);

  const { clock } = useThree();

  const start = useMemo(
    () => clock.getElapsedTime() + round.index * 0,
    [clock, round.index]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const time = Math.max(30 - (clock.getElapsedTime() - start), 0);

      setRound((round) => (round.time !== time ? { ...round, time } : round));
    }, 10);

    return () => clearInterval(timer);
  }, [clock, setRound, start]);
}
