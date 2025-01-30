import { useFrame, useThree } from "@react-three/fiber";
import { RefObject, useContext, useMemo, useRef } from "react";
import { Group, Vector3 } from "three";
import { GameContext } from "../games/GameContext";

export function useMove(ref: RefObject<Group> | undefined, target: Vector3) {
  const { floors } = useContext(GameContext);
  const flooredTarget = useMemo(() => {
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
        Math.abs(item.position.x - target.x) <= item.floor.width / 2 &&
        Math.abs(item.position.z - target.z) <= item.floor.depth / 2
    );
    if (validItems.length <= 0) {
      return undefined;
    }

    const matchedItem = validItems.find(
      (item) => Math.abs(item.position.y - target.y) <= 0.1
    );
    if (matchedItem) {
      return target;
    } else {
      const lowerItems = validItems.filter(
        (item) => item.position.y < target.y
      );
      if (lowerItems.length <= 0) {
        return undefined;
      }

      const sortedItems = [...lowerItems].sort(
        (a, b) => a.position.y - b.position.y
      );
      const lastItem = sortedItems[sortedItems.length - 1];

      return new Vector3(target.x, lastItem.position.y, target.z);
    }
  }, [floors, target]);

  const { clock } = useThree();
  const timeRef = useRef(clock.getElapsedTime());
  useFrame(() => {
    const position = ref?.current?.position;
    if (!position) {
      return;
    }

    if (!flooredTarget) {
      return;
    }

    const time = clock.getElapsedTime();
    const elapsed = time - timeRef.current;
    timeRef.current = time;

    const horizontalTarget = new Vector3(
      flooredTarget.x,
      position.y,
      flooredTarget.z
    );
    const horizontalDistance = position.distanceTo(horizontalTarget);
    if (horizontalDistance > 0) {
      const elapsedProportion = (50 * elapsed) / horizontalDistance;
      const outputProportion = Math.min(Math.max(elapsedProportion, 0), 1);

      position.lerp(horizontalTarget, outputProportion);
    }

    const verticalTarget = new Vector3(position.x, flooredTarget.y, position.z);
    const verticalDistance = position.distanceTo(verticalTarget);
    if (verticalDistance > 0) {
      const elapsedProportion = (20 * elapsed) / verticalDistance;
      const outputProportion = Math.min(Math.max(elapsedProportion, 0), 1);

      position.lerp(verticalTarget, outputProportion);
    }
  });
}
