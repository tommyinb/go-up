import { useContext, useEffect } from "react";
import { DebugContext } from "../debugs/DebugContext";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import "./DownTimer.css";

export function DownTimer() {
  const { mode } = useContext(MenuContext);

  const { round, setRound, player } = useContext(GameContext);

  useEffect(() => {
    if (mode !== Mode.Game) {
      return;
    }

    if (round.index <= 0 && player.inputs.length <= 0) {
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
        const elapsedTime = currentTime - from.clockTime;

        const outputTime = Math.max(from.roundValue - elapsedTime / 1000, 0);
        if (outputTime === round.time) {
          return round;
        }

        return {
          ...round,
          time: outputTime,
        };
      });
    }, 10);

    return () => clearInterval(timer);
  }, [mode, player.inputs.length, round.index, setRound]);

  const { debug, setDebug } = useContext(DebugContext);

  return (
    <div className="headers-DownTimer" onDoubleClick={() => setDebug(!debug)}>
      {round.time.toFixed(2)}
    </div>
  );
}
