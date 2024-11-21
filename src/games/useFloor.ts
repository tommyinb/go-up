import { useContext, useEffect, useMemo, useRef } from "react";
import { Group } from "three";
import { GameContext } from "./GameContext";

export function useFloor(width: number, depth: number) {
  const ref = useRef<Group>(null);

  const floor = useMemo(() => ({ width, depth, ref }), [depth, width]);

  const { setFloors } = useContext(GameContext);

  useEffect(() => {
    setFloors((floors) => [...floors, floor]);

    return () => setFloors((floors) => floors.filter((f) => f !== floor));
  }, [floor, setFloors]);

  return floor;
}
