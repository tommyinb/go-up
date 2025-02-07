import { RefObject, useContext, useEffect } from "react";
import { Group, Vector3 } from "three";
import { PlayerInput } from "../games/playerInput";
import { PlayerInputType } from "../games/playerInputType";
import { SceneContext } from "../scenes/SceneContext";

export function useAction(
  input: Omit<PlayerInput, "time"> | undefined,
  setTarget: (target: Vector3) => void,
  groupRef: RefObject<Group> | undefined
) {
  const { setCameraTarget, setCameraDistance } = useContext(SceneContext);

  useEffect(() => {
    if (!input) {
      return;
    }

    setTarget(input.target);

    switch (input.type) {
      case PlayerInputType.Move:
        setCameraTarget((target) =>
          target.y === input.target.y
            ? target
            : new Vector3(target.x, input.target.y, target.z)
        );

        setCameraDistance(new Vector3(3, 12, 8));
        break;

      case PlayerInputType.Smash:
        groupRef?.current?.position.setY(groupRef.current.position.y + 2);
        break;
    }
  }, [groupRef, input, setCameraDistance, setCameraTarget, setTarget]);
}
