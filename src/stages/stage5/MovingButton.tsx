import { useCallback, useContext, useEffect, useState } from "react";
import { Vector3Tuple } from "three";
import { GameContext } from "../../games/GameContext";
import { PressedButton } from "../stage1/PressedButton";
import { useMovingPosition } from "../stage3/useMovingPosition";
import { useMovingProportion } from "../stage3/useMovingProportion";

export function MovingButton({ left, right, duration, onPress }: Props) {
  const { round } = useContext(GameContext);

  const [pressed, setPressed] = useState(false);
  const press = useCallback(() => setPressed(true), []);

  const [pressedTime, setPressedTime] = useState<number>();
  useEffect(() => {
    if (pressed) {
      setPressedTime((oldTime) =>
        oldTime !== undefined ? oldTime : round.time
      );
    }
  }, [pressed, round.time]);

  const proportion = useMovingProportion(pressedTime ?? round.time, duration);

  const position = useMovingPosition(left, right, proportion);

  useEffect(() => {
    if (pressedTime !== undefined) {
      onPress();
    }
  }, [onPress, pressedTime]);

  return <PressedButton position={position} onPress={press} />;
}

interface Props {
  left: Vector3Tuple;
  right: Vector3Tuple;
  duration: number;

  onPress: () => void;
}
