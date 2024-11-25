import { useContext, useEffect, useState } from "react";
import { Vector3Tuple } from "three";
import { GameContext } from "../../games/GameContext";
import { PressingButton } from "../stage2/PressingButton";
import { useMovingPosition } from "../stage3/useMovingPosition";
import { useMovingProportion } from "../stage3/useMovingProportion";

export function MovingButton({ left, right, duration, onPress }: Props) {
  const { round } = useContext(GameContext);

  const [pressing, setPressing] = useState(false);

  const [pressedTime, setPressedTime] = useState<number>();
  useEffect(() => {
    if (pressing) {
      setPressedTime((oldTime) =>
        oldTime !== undefined ? oldTime : round.time
      );
    }
  }, [pressing, round.time]);

  const proportion = useMovingProportion(pressedTime ?? round.time, duration);

  const position = useMovingPosition(left, right, proportion);

  useEffect(() => {
    if (pressedTime !== undefined) {
      onPress();
    }
  }, [onPress, pressedTime]);

  return (
    <PressingButton
      position={position}
      pressing={pressing || pressedTime !== undefined}
      setPressing={setPressing}
    />
  );
}

interface Props {
  left: Vector3Tuple;
  right: Vector3Tuple;
  duration: number;

  onPress: () => void;
}
