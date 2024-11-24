import { Vector3Tuple } from "three";
import { PressingButton } from "../stage2/PressingButton";
import { useMovingPosition } from "./useMovingPosition";

export function MovingButton({
  left,
  right,
  duration,
  pressing,
  setPressing,
}: Props) {
  const position = useMovingPosition(left, right, duration);

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
