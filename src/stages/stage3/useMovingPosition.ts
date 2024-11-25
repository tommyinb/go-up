import { useMemo } from "react";
import { Vector3, Vector3Tuple } from "three";

export function useMovingPosition(
  leftTuple: Vector3Tuple,
  rightTuple: Vector3Tuple,
  proportion: number
) {
  const leftX = leftTuple[0];
  const leftY = leftTuple[1];
  const leftZ = leftTuple[2];

  const rightX = rightTuple[0];
  const rightY = rightTuple[1];
  const rightZ = rightTuple[2];

  return useMemo(() => {
    const leftVector = new Vector3(leftX, leftY, leftZ);
    const rightVector = new Vector3(rightX, rightY, rightZ);

    return leftVector.clone().lerp(rightVector, proportion);
  }, [leftX, leftY, leftZ, proportion, rightX, rightY, rightZ]);
}
