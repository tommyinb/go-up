import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useContext, useState } from "react";
import { Vector3 } from "three";
import { DebugContext } from "../debugs/DebugContext";
import { useCharacter } from "../games/useCharacter";
import { Box } from "./Box";
import { useGroundClick } from "./useGroundClick";

export function Character() {
  const character = useCharacter();

  const [target, setTarget] = useState(new Vector3(0, 0, 0));
  useGroundClick(setTarget);

  const smash = useCallback(() => {
    const { current } = character.ref;
    if (!current) {
      return;
    }

    current.getWorldPosition(current.position);

    setTarget(current.position);

    current.position.setY(current.position.y + 2);
  }, [character.ref]);

  useFrame((_state, delta) => {
    const { current } = character.ref;
    if (!current) {
      return;
    }

    const targetDistance = current.position.distanceTo(target);

    if (targetDistance <= 0) {
      return;
    }

    const speed = 30;
    const timeDistance = speed * delta;

    const proportion = timeDistance / targetDistance;

    current.position.lerp(target, Math.min(Math.max(proportion, 0), 1));
  });

  const { debug } = useContext(DebugContext);

  return (
    <>
      {debug && <Sphere args={[0.1, 4, 2]} position={target} />}

      {character && (
        <Box
          characterRef={character.ref}
          opacity={debug ? 0.8 : 1}
          onClick={smash}
        />
      )}
    </>
  );
}
