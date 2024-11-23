import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { CoinBox } from "../stage1/CoinBox";
import { FloorContext } from "../stage1/FloorContext";
import { usePressed } from "../stage1/usePressed";
import { useSetScore } from "../stage1/useSetScore";

export function Coin({ position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const pressed = usePressed(ref, 0.3, 0.3);

  const setScore = useSetScore();
  useEffect(() => {
    if (pressed) {
      setScore((score) => ({ ...score, coin: score.coin + 1 }));

      onPress();
    }
  }, [onPress, pressed, setScore]);

  const { visiting } = useContext(FloorContext);

  return (
    <CoinBox
      boxRef={ref}
      position={position}
      opacity={visiting ? 1 : 0.6}
      pressed={pressed}
    />
  );
}

interface Props {
  position: Vector3;

  onPress: () => void;
}
