import { useFrame } from "@react-three/fiber";
import { useContext, useState } from "react";
import { Vector3, Vector3Tuple } from "three";
import { GameContext } from "../../games/GameContext";

export function useMovingPosition(
  leftTuple: Vector3Tuple,
  rightTuple: Vector3Tuple,
  duration: number
) {
  const leftVector = new Vector3(...leftTuple);
  const rightVector = new Vector3(...rightTuple);

  const [position, setPosition] = useState(leftVector);

  const { round } = useContext(GameContext);

  useFrame(() => {
    const inputProportion = (round.time % (duration * 2)) / (duration * 2);

    const outputProportion =
      (inputProportion > 0.5 ? 1 - inputProportion : inputProportion) * 2;

    const position = leftVector.clone().lerp(rightVector, outputProportion);
    setPosition(position);
  });

  return position;
}
