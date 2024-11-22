import { RefObject, useContext, useEffect } from "react";
import { Group, Vector3 } from "three";
import { CharacterInput } from "../games/playerInput";
import { CharacterInputType } from "../games/playerInputType";
import { SceneContext } from "../scenes/SceneContext";

export function usePlayerOutput(
  input: Omit<CharacterInput, "time"> | undefined,
  setTarget: (target: Vector3) => void,
  groupRef: RefObject<Group>
) {
  const { setCameraTarget } = useContext(SceneContext);

  useEffect(() => {
    if (!input) {
      return;
    }

    setTarget(input.target);

    switch (input.type) {
      case CharacterInputType.Move:
        setCameraTarget((target) =>
          target.y === input.target.y
            ? target
            : new Vector3(target.x, input.target.y, target.z)
        );
        break;

      case CharacterInputType.Smash:
        groupRef.current?.position.setY(groupRef.current.position.y + 2);
        break;
    }
  }, [groupRef, input, setCameraTarget, setTarget]);
}
