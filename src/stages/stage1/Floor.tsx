import { Text } from "@react-three/drei";
import {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Group, Mesh } from "three";
import { DebugContext } from "../../debugs/DebugContext";
import { Floor as GameFloor } from "../../games/floor";
import { GameContext } from "../../games/GameContext";
import { FloorContext } from "./FloorContext";
import { useVisiting } from "./useVisiting";

export function Floor({ index, width, depth, children }: Props) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  const floor = useMemo<GameFloor>(
    () => ({ groupRef, meshRef, width, depth }),
    [depth, width]
  );

  const { setFloors } = useContext(GameContext);
  useEffect(() => {
    setFloors((floors) => [...floors, floor]);

    return () => setFloors((floors) => floors.filter((f) => f !== floor));
  }, [floor, setFloors]);

  const visiting = useVisiting(groupRef);

  const { debug } = useContext(DebugContext);

  return (
    <group ref={groupRef} position={[0, index * 3, 0]}>
      <mesh ref={meshRef} position={[0, -0.05, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />

        <meshStandardMaterial
          color="#fff"
          transparent={!visiting}
          opacity={visiting ? 1 : 0.6}
        />
      </mesh>

      <FloorContext.Provider value={{ visiting }}>
        {children}
      </FloorContext.Provider>

      {debug && (
        <Text
          color="#444"
          position={[0, 0.1, -depth / 2 - 1]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {index}
        </Text>
      )}
    </group>
  );
}

interface Props extends PropsWithChildren {
  index: number;

  width: number;
  depth: number;
}
