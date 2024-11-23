import { useContext, useEffect } from "react";
import { Vector3 } from "three";
import { SceneContext } from "../scenes/SceneContext";
import { GameContext } from "./GameContext";

export function useReset() {
  const { round, setRound, player, setPlayer, setComputers } =
    useContext(GameContext);

  const reset = round.time <= 0;

  const { setCameraTarget } = useContext(SceneContext);

  useEffect(() => {
    if (reset) {
      setRound((round) => ({ index: round.index + 1, time: 30 }));

      if (player.inputs.length > 0) {
        setComputers((computers) => [
          ...computers.slice(-5),
          {
            id: Math.max(...computers.map((computer) => computer.id), 0) + 1,
            ref: undefined,
            inputs: player.inputs,
          },
        ]);
      }

      setPlayer((player) => ({
        ...player,
        inputs: [],
      }));

      setCameraTarget((target) => new Vector3(target.x, 0, target.z));
    }
  }, [
    player.inputs,
    reset,
    setCameraTarget,
    setComputers,
    setPlayer,
    setRound,
  ]);
}
