import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Group, Vector3 } from "three";

export function useMove(ref: RefObject<Group> | undefined, target: Vector3) {
  useFrame((_state, delta) => {
    const targetDistance = ref?.current?.position.distanceTo(target);

    if (!targetDistance) {
      return;
    }

    const speed = 50;
    const timeDistance = speed * delta;

    const proportion = timeDistance / targetDistance;

    ref?.current?.position.lerp(target, Math.min(Math.max(proportion, 0), 1));
  });
}
