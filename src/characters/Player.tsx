import { Sphere } from "@react-three/drei";
import { useContext, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";
import { DebugContext } from "../debugs/DebugContext";
import { GameContext } from "../games/GameContext";
import { usePlayerInput } from "./usePlayerInput";
import { usePlayerMove } from "./usePlayerMove";
import { usePlayerOutput } from "./usePlayerOutput";

export function Player() {
  const { player } = useContext(GameContext);

  const meshRef = useRef<Mesh>(null);

  const input = usePlayerInput(meshRef);

  const [target, setTarget] = useState(new Vector3(0, 0, 0));

  usePlayerOutput(input, setTarget, player.ref);

  usePlayerMove(player.ref, target);

  const { debug } = useContext(DebugContext);

  return (
    <>
      {debug && <Sphere args={[0.1, 4, 2]} position={target} />}

      <group ref={player.ref}>
        <mesh ref={meshRef} position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />

          <meshStandardMaterial
            color="#444"
            transparent={true}
            opacity={debug ? 0.8 : 1}
          />
        </mesh>
      </group>
    </>
  );
}
