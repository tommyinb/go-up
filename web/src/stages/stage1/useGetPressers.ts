import { RefObject, useCallback, useContext } from "react";
import { Group, Vector3 } from "three";
import { GameContext } from "../../games/GameContext";
import { Computer } from "../../games/computer";
import { Player } from "../../games/player";

export function useGetPressers(
  ref: RefObject<Group>,
  width: number,
  depth: number
) {
  const { player, computers } = useContext(GameContext);

  return useCallback(() => {
    if (!ref.current) {
      return [];
    }

    const position = new Vector3();
    ref.current.getWorldPosition(position);

    const characters: (Player | Computer)[] = [player, ...computers];

    const pressers = characters.filter((character) => {
      return (
        !!character.ref?.current &&
        Math.abs(character.ref.current.position.y - position.y) < 0.1 &&
        character.ref.current.position.x - 0.5 < position.x + width / 2 &&
        character.ref.current.position.x + 0.5 > position.x - width / 2 &&
        character.ref.current.position.z - 0.5 < position.z + depth / 2 &&
        character.ref.current.position.z + 0.5 > position.z - depth / 2
      );
    });

    return pressers.map((presser) => ("id" in presser ? presser.id : 0));
  }, [computers, depth, player, ref, width]);
}
