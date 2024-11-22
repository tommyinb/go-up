import {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Group, Mesh } from "three";
import { Floor as GameFloor } from "../../games/floor";
import { GameContext } from "../../games/GameContext";
import { FloorContext } from "./FloorContext";
import { useVisiting } from "./useVisiting";

export function Floor({ width, depth, children }: Props) {
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

  const [visited, setVisited] = useState(false);
  const visiting = useVisiting(groupRef);
  useEffect(() => {
    if (visiting) {
      setVisited(true);
    }
  }, [visiting]);

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, -0.05, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />

        <meshStandardMaterial
          color="#fff"
          transparent={!visited}
          opacity={visited ? 1 : 0.6}
        />
      </mesh>

      <FloorContext.Provider value={{ visited }}>
        {children}
      </FloorContext.Provider>
    </group>
  );
}

interface Props extends PropsWithChildren {
  width: number;
  depth: number;
}
