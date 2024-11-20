import { useContext, useEffect } from "react";
import { Vector3 } from "three";
import { GameContext } from "./GameContext";

export function useGround(width: number, depth: number, position: Vector3) {
  const { setGrounds } = useContext(GameContext);

  useEffect(() => {
    const ground = { width, depth, position };

    setGrounds((grounds) => [...grounds, ground]);

    return () => setGrounds((grounds) => grounds.filter((g) => g !== ground));
  }, [depth, position, setGrounds, width]);
}
