import {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Group, Mesh } from "three";
import { Floor as GameFloor } from "../../games/floor";
import { GameContext } from "../../games/GameContext";
import { FloorContext } from "./FloorContext";
import { useVisiting } from "./useVisiting";

export function Floor({ index, width, depth, children }: Props) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  const floor = useMemo<GameFloor>(
    () => ({ width, depth, groupRef, meshRef }),
    [depth, width]
  );

  const { setFloors } = useContext(GameContext);
  useEffect(() => {
    setFloors((floors) => [...floors, floor]);

    return () => setFloors((floors) => floors.filter((f) => f !== floor));
  }, [floor, setFloors]);

  const visiting = useVisiting(groupRef);

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
    </group>
  );
}

interface Props extends PropsWithChildren {
  index: number;

  width: number;
  depth: number;
}
