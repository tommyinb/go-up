import { useThree } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";

export function useTime() {
  const { mode } = useContext(MenuContext);

  const { setRound } = useContext(GameContext);

  const { clock } = useThree();

  useEffect(() => {
    if (mode !== Mode.Game) {
      return;
    }

    const lastTime = { time: performance.now() };

    const timer = setInterval(() => {
      setRound((round) => {
        const currentTime = performance.now();
        const elapsed = (currentTime - lastTime.time) / 1000;

        lastTime.time = currentTime;

        return {
          ...round,
          time: Math.max(round.time - elapsed, 0),
        };
      });
    }, 10);

    return () => clearInterval(timer);
  }, [clock, mode, setRound]);
}
