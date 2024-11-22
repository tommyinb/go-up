import { useFrame } from "@react-three/fiber";
import { RefObject, useContext, useState } from "react";
import { Group, Vector3 } from "three";
import { GameContext } from "../../games/GameContext";

export function usePressing(
  ref: RefObject<Group>,
  width: number,
  depth: number
) {
  const [pressing, setPressing] = useState(false);

  const { player } = useContext(GameContext);
  useFrame(() => {
    if (!ref.current) {
      return;
    }

    const position = new Vector3();
    ref.current.getWorldPosition(position);

    const pressing =
      !!player.ref.current &&
      Math.abs(player.ref.current.position.y - position.y) < 0.1 &&
      player.ref.current.position.x - 0.5 < position.x + width / 2 &&
      player.ref.current.position.x + 0.5 > position.x - width / 2 &&
      player.ref.current.position.z - 0.5 < position.z + depth / 2 &&
      player.ref.current.position.z + 0.5 > position.z - depth / 2;

    setPressing(pressing);
  });

  return pressing;
}
