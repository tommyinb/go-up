import { useContext, useEffect } from "react";
import { DebugContext } from "../debugs/DebugContext";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import "./Timer.css";

export function Timer() {
  const { mode } = useContext(MenuContext);

  const { round, setRound } = useContext(GameContext);

  useEffect(() => {
    if (mode !== Mode.Game) {
      return;
    }

    const from = {
      roundValue: round.index * 0,
      clockTime: performance.now(),
    };

    setRound((round) => {
      from.roundValue = round.time;
      return round;
    });

    const timer = setInterval(() => {
      setRound((round) => {
        const currentTime = performance.now();
        const elapsed = currentTime - from.clockTime;

        return {
          ...round,
          time: Math.max(from.roundValue - elapsed / 1000, 0),
        };
      });
    }, 10);

    return () => clearInterval(timer);
  }, [mode, round.index, setRound]);

  const { debug, setDebug } = useContext(DebugContext);

  return (
    <div className="headers-Timer" onDoubleClick={() => setDebug(!debug)}>
      {round.time.toFixed(2)}
    </div>
  );
}
