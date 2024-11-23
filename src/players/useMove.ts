import { useFrame, useThree } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import { Group, Vector3 } from "three";

export function useMove(ref: RefObject<Group> | undefined, target: Vector3) {
  const { clock } = useThree();
  const timeRef = useRef(clock.getElapsedTime());

  useFrame(() => {
    const position = ref?.current?.position;
    if (!position) {
      return;
    }

    const time = clock.getElapsedTime();
    const elapsed = time - timeRef.current;
    timeRef.current = time;

    const horizontalTarget = new Vector3(target.x, position.y, target.z);
    const horizontalDistance = position.distanceTo(horizontalTarget);
    if (horizontalDistance > 0) {
      const elapsedProportion = (50 * elapsed) / horizontalDistance;
      const outputProportion = Math.min(Math.max(elapsedProportion, 0), 1);

      position.lerp(horizontalTarget, outputProportion);
    }

    const verticalTarget = new Vector3(position.x, target.y, position.z);
    const verticalDistance = position.distanceTo(verticalTarget);
    if (verticalDistance > 0) {
      const elapsedProportion = (20 * elapsed) / verticalDistance;
      const outputProportion = Math.min(Math.max(elapsedProportion, 0), 1);

      position.lerp(verticalTarget, outputProportion);
    }
  });
}
