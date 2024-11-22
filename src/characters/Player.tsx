import { Sphere } from "@react-three/drei";
import { useContext, useState } from "react";
import { Vector3 } from "three";
import { DebugContext } from "../debugs/DebugContext";
import { usePlayerCharacter } from "./usePlayerCharacter";
import { usePlayerInput } from "./usePlayerInput";
import { usePlayerMove } from "./usePlayerMove";
import { usePlayerOutput } from "./usePlayerOutput";

export function Player() {
  const character = usePlayerCharacter();

  const input = usePlayerInput(character.id, character.meshRef);

  const [target, setTarget] = useState(new Vector3(0, 0, 0));

  usePlayerOutput(input, setTarget, character.groupRef);

  usePlayerMove(character.groupRef, target);

  const { debug } = useContext(DebugContext);

  return (
    <>
      {debug && <Sphere args={[0.1, 4, 2]} position={target} />}

      {character && (
        <group ref={character.groupRef}>
          <mesh ref={character.meshRef} position={[0, 0.5, 0]}>
            <boxGeometry args={[1, 1, 1]} />

            <meshStandardMaterial
              color="#444"
              transparent={true}
              opacity={debug ? 0.8 : 1}
            />
          </mesh>
        </group>
      )}
    </>
  );
}
