import { useContext, useMemo } from "react";
import { Vector3 } from "three";
import { GameContext } from "../games/GameContext";

export function useInput(id: number) {
  const { round, computers, floors } = useContext(GameContext);

  const computer = useMemo(
    () => computers.find((computer) => computer.id === id),
    [computers, id]
  );

  const input = useMemo(() => {
    if (!computer) {
      return;
    }

    const inputs = computer.inputs.filter((input) => input.time >= round.time);
    if (inputs.length <= 0) {
      return;
    }

    return inputs[inputs.length - 1];
  }, [computer, round.time]);

  return useMemo(() => {
    if (!input) {
      return undefined;
    }

    const floorItems = floors.map((floor) => {
      const position = new Vector3();
      floor.groupRef.current?.getWorldPosition(position);

      return {
        floor,
        position,
      };
    });

    const validItems = floorItems.filter(
      (item) =>
        Math.abs(item.position.x - input.target.x) <= item.floor.width / 2 &&
        Math.abs(item.position.z - input.target.z) <= item.floor.depth / 2
    );
    if (validItems.length <= 0) {
      return;
    }

    const matchedItem = validItems.find(
      (item) => Math.abs(item.position.y - input.target.y) <= 0.1
    );
    if (matchedItem) {
      return input;
    } else {
      const lowerItems = validItems.filter(
        (item) => item.position.y < input.target.y
      );
      if (lowerItems.length <= 0) {
        return;
      }

      const sortedItems = [...lowerItems].sort(
        (a, b) => a.position.y - b.position.y
      );
      const lastItem = sortedItems[sortedItems.length - 1];

      return {
        ...input,
        target: new Vector3(
          input.target.x,
          lastItem.position.y,
          input.target.z
        ),
      };
    }
  }, [floors, input]);
}
