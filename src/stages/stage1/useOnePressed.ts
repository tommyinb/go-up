import { useFrame } from "@react-three/fiber";
import { RefObject, useState } from "react";
import { Group } from "three";
import { useGetPressers } from "./useGetPressers";

export function useOnePressed(
  ref: RefObject<Group>,
  width: number,
  depth: number
) {
  const [pressed, setPressed] = useState(false);

  const getPressers = useGetPressers(ref, width, depth);
  useFrame(() => {
    if (!pressed) {
      const pressers = getPressers();

      if (pressers.length > 0) {
        setPressed(true);
      }
    }
  });

  return pressed;
}
