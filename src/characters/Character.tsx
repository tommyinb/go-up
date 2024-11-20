import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useId } from "react";
import { DebugContext } from "../debugs/DebugContext";
import { useCharacter } from "../games/useCharacter";
import { Box } from "./Box";
import { useTarget } from "./useTarget";

export function Character() {
  const id = useId();
  const { character, updatePosition } = useCharacter(id);

  const target = useTarget();

  useFrame((_state, delta) => {
    const targetDistance = character.position.distanceTo(target);

    if (targetDistance <= 0) {
      return;
    }

    const speed = 30;
    const timeDistance = speed * delta;

    const proportion = timeDistance / targetDistance;

    const newPosition = character.position
      .clone()
      .lerp(target, Math.min(Math.max(proportion, 0), 1));

    updatePosition(newPosition);
  });

  const { debug } = useContext(DebugContext);

  return (
    <>
      {debug && <Sphere args={[0.1, 4, 2]} position={target} />}

      {character && (
        <Box position={character.position} opacity={debug ? 0.8 : 1} />
      )}
    </>
  );
}
