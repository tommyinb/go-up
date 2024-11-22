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

  const { player, computers } = useContext(GameContext);

  useFrame(() => {
    if (!ref.current) {
      return;
    }

    const position = new Vector3();
    ref.current.getWorldPosition(position);

    const pressing = [player, ...computers].some((character) => {
      return (
        !!character.ref?.current &&
        Math.abs(character.ref.current.position.y - position.y) < 0.1 &&
        character.ref.current.position.x - 0.5 < position.x + width / 2 &&
        character.ref.current.position.x + 0.5 > position.x - width / 2 &&
        character.ref.current.position.z - 0.5 < position.z + depth / 2 &&
        character.ref.current.position.z + 0.5 > position.z - depth / 2
      );
    });

    setPressing(pressing);
  });

  return pressing;
}
