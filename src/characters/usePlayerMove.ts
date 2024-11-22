import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Group, Vector3 } from "three";

export function usePlayerMove(ref: RefObject<Group>, target: Vector3) {
  useFrame((_state, delta) => {
    const { current } = ref;
    if (!current) {
      return;
    }

    const targetDistance = current.position.distanceTo(target);

    if (targetDistance <= 0) {
      return;
    }

    const speed = 50;
    const timeDistance = speed * delta;

    const proportion = timeDistance / targetDistance;

    current.position.lerp(target, Math.min(Math.max(proportion, 0), 1));
  });
}
