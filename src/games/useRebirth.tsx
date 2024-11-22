import { useContext, useEffect } from "react";
import { Vector3 } from "three";
import { SceneContext } from "../scenes/SceneContext";
import { GameContext } from "./GameContext";

export function useRebirth(enabled: boolean) {
  const { player, setPlayer, setComputers } = useContext(GameContext);

  const { setCameraTarget } = useContext(SceneContext);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (player.inputs.length <= 0) {
      return;
    }

    setComputers((computers) => [
      ...computers.slice(-5),
      {
        id: Math.max(...computers.map((computer) => computer.id), 0) + 1,
        ref: undefined,
        inputs: player.inputs,
      },
    ]);

    setPlayer((player) => ({
      ...player,
      inputs: [],
    }));

    setCameraTarget((target) => new Vector3(target.x, 0, target.z));
  }, [enabled, player.inputs, setCameraTarget, setComputers, setPlayer]);
}
