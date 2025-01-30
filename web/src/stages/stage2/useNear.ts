import { useFrame } from "@react-three/fiber";
import { RefObject, useState } from "react";
import { Group } from "three";
import { useGetPressers } from "../stage1/useGetPressers";

export function useNear(
  ref: RefObject<Group>,
  width: number,
  depth: number,
  enabled: boolean
) {
  const [near, setNear] = useState(false);

  const getPressers = useGetPressers(ref, width, depth);
  useFrame(() => {
    if (!enabled) {
      return;
    }

    const pressers = getPressers();

    setNear(pressers.length > 0);
  });

  return near;
}
