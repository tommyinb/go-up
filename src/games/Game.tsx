import { useContext, useEffect } from "react";
import { Computer } from "../computers/Computer";
import { Player } from "../players/Player";
import { Stage } from "../stages/stage1/Stage";
import { GameContext } from "./GameContext";
import { useRebirth } from "./useRebirth";

export function Game() {
  const { round, setRound, computers } = useContext(GameContext);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setRound((round) =>
          round.time > 0
            ? {
                index: round.index,
                time: Math.max(round.time - 0.02, 0),
              }
            : {
                index: round.index + 1,
                time: 5,
              }
        ),
      20
    );

    return () => clearInterval(timer);
  }, [setRound]);

  useRebirth(round.time <= 0);

  return (
    <>
      <Stage key={`stage-${round.index}`} />

      <Player key={`player-${round.index}`} />

      {computers.map(({ id }) => (
        <Computer key={`computer-${id}`} id={id} />
      ))}
    </>
  );
}
