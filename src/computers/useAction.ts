import { RefObject, useEffect } from "react";
import { Group, Vector3 } from "three";
import { PlayerInput } from "../games/playerInput";
import { PlayerInputType } from "../games/playerInputType";

export function useAction(
  input: PlayerInput | undefined,
  setTarget: (target: Vector3) => void,
  groupRef: RefObject<Group> | undefined
) {
  useEffect(() => {
    if (!input) {
      return;
    }

    setTarget(input.target);

    if (input.type === PlayerInputType.Smash) {
      groupRef?.current?.position.setY(groupRef.current.position.y + 2);
    }
  }, [groupRef, input, setTarget]);
}
