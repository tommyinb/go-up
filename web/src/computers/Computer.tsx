import { Sphere, Text } from "@react-three/drei";
import { useContext, useEffect, useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { DebugContext } from "../debugs/DebugContext";
import { GameContext } from "../games/GameContext";
import { Hand } from "../players/Hand";
import { useMove } from "../players/useMove";
import { useAction } from "./useAction";
import { useInput } from "./useInput";

export function Computer({ id }: Props) {
  const ref = useRef<Group>(null);
  const { setComputers } = useContext(GameContext);
  useEffect(
    () =>
      setComputers((computers) =>
        computers.map((computer) =>
          computer.id === id ? { ...computer, ref } : computer
        )
      ),
    [id, setComputers]
  );

  const input = useInput(id);

  const [target, setTarget] = useState(new Vector3(0, 0, 0));
  useAction(input, setTarget, ref);
  useMove(ref, target);

  const { debug } = useContext(DebugContext);

  return (
    <>
      {debug && <Sphere args={[0.1, 4, 2]} position={target} />}

      <group ref={ref}>
        <Hand />

        <mesh position={[0, 0.5, 0]} visible={debug}>
          <boxGeometry args={[1, 1, 1]} />

          <meshStandardMaterial color="#888" wireframe={true} />
        </mesh>

        {debug && (
          <Text color="#888" position={[0, 1.5, 0]}>
            {id}
          </Text>
        )}
      </group>
    </>
  );
}

interface Props {
  id: number;
}
