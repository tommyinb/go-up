import { useEffect, useState } from "react";
import { CoinRing } from "../stage1/CoinRing";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { PressingButton } from "../stage2/PressingButton";

export function Floor9({ index, active, completed, setCompleted }: Props) {
  const [pressing1, setPressing1] = useState(false);
  const [pressing2, setPressing2] = useState(false);

  const [pressing3, setPressing3] = useState(false);
  const [pressing4, setPressing4] = useState(false);

  const allPressing = pressing1 && pressing2 && pressing3 && pressing4;

  const [allPressed, setAllPressed] = useState(false);
  useEffect(() => {
    if (allPressing) {
      setAllPressed(true);
    }
  }, [allPressing]);

  useEffect(() => {
    if (active && allPressing) {
      setCompleted(true);
    }
  }, [active, allPressing, setCompleted]);

  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <group position={[-2, 0, 0]}>
        <PressingButton
          position={[0, 0, 0]}
          pressing={pressing1 || completed}
          setPressing={setPressing1}
        />

        {allPressed && <CoinRing width={2} depth={2} />}
      </group>

      <group position={[2, 0, 0]}>
        <PressingButton
          position={[0, 0, 0]}
          pressing={pressing2 || completed}
          setPressing={setPressing2}
        />

        {allPressed && <CoinRing width={2} depth={2} />}
      </group>

      <group position={[0, 0, -2]}>
        <PressingButton
          position={[0, 0, 0]}
          pressing={pressing3 || completed}
          setPressing={setPressing3}
        />

        {allPressed && <CoinRing width={2} depth={2} />}
      </group>

      <group position={[0, 0, 2]}>
        <PressingButton
          position={[0, 0, 0]}
          pressing={pressing4 || completed}
          setPressing={setPressing4}
        />

        {allPressed && <CoinRing width={2} depth={2} />}
      </group>

      {completed && <PressedButton position={[0, 0, 0]} onPress={nextLevel} />}
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;

  completed: boolean;
  setCompleted: (completed: boolean) => void;
}
