import { useContext, useMemo } from "react";
import { Vector3 } from "three";
import { GameContext } from "../games/GameContext";

export function usePressing(width: number, depth: number, position: Vector3) {
  const { characters } = useContext(GameContext);

  return useMemo(
    () =>
      !!characters.find(
        (character) =>
          Math.abs(character.position.y - position.y) < 0.1 &&
          character.position.x - 0.5 < position.x + width / 2 &&
          character.position.x + 0.5 > position.x - width / 2 &&
          character.position.z - 0.5 < position.z + depth / 2 &&
          character.position.z + 0.5 > position.z - depth / 2
      ),
    [characters, depth, position.x, position.y, position.z, width]
  );
}
