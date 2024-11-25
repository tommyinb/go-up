import { useContext } from "react";
import { Vector3Tuple } from "three";
import { GameContext } from "../../games/GameContext";
import { PressingButton } from "../stage2/PressingButton";
import { useMovingPosition } from "./useMovingPosition";
import { useMovingProportion } from "./useMovingProportion";

export function MovingButton({
  left,
  right,
  duration,
  pressing,
  setPressing,
}: Props) {
  const { round } = useContext(GameContext);

  const proportion = useMovingProportion(round.time, duration);
  const position = useMovingPosition(left, right, proportion);

  return (
    <PressingButton
      position={position}
      pressing={pressing}
      setPressing={setPressing}
    />
  );
}

interface Props {
  left: Vector3Tuple;
  right: Vector3Tuple;
  duration: number;

  pressing: boolean;
  setPressing: (pressing: boolean) => void;
}
