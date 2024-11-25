import { useEffect, useState } from "react";
import { CoinRing } from "../stage1/CoinRing";
import { Floor } from "../stage1/Floor";
import { useNextLevel } from "../stage1/useNextLevel";
import { PressingButton } from "../stage2/PressingButton";

export function Floor6({ index, active, setActive, completed }: Props) {
  const [pressing1, setPressing1] = useState(false);
  const [pressing2, setPressing2] = useState(false);

  const [pressing3, setPressing3] = useState(false);
  const [pressing4, setPressing4] = useState(false);
  const [pressing5, setPressing5] = useState(false);

  useEffect(
    () =>
      setActive(pressing1 && pressing2 && pressing3 && pressing4 && pressing5),
    [pressing1, pressing2, pressing3, pressing4, pressing5, setActive]
  );

  const [actived, setActived] = useState(false);
  useEffect(() => {
    if (active) {
      setActived(true);
    }
  }, [active]);

  const nextLevel = useNextLevel(index);
  useEffect(() => {
    if (actived) {
      nextLevel();
    }
  }, [actived, nextLevel]);

  return (
    <Floor index={index} width={10} depth={10}>
      <group position={[-2, 0, -2]}>
        <PressingButton
          position={[0, 0, 0]}
          pressing={pressing1 || completed}
          setPressing={setPressing1}
        />

        {actived && <CoinRing width={2} depth={2} />}
      </group>

      <group position={[2, 0, 2]}>
        <PressingButton
          position={[0, 0, 0]}
          pressing={pressing2 || completed}
          setPressing={setPressing2}
        />

        {actived && <CoinRing width={2} depth={2} />}
      </group>

      <group position={[-2, 0, 2]}>
        {((pressing1 && pressing2) || actived) && (
          <PressingButton
            position={[0, 0, 0]}
            pressing={pressing3 || completed}
            setPressing={setPressing3}
          />
        )}

        {actived && <CoinRing width={2} depth={2} />}
      </group>

      <group position={[2, 0, -2]}>
        {((pressing1 && pressing2) || actived) && (
          <PressingButton
            position={[0, 0, 0]}
            pressing={pressing4 || completed}
            setPressing={setPressing4}
          />
        )}

        {actived && <CoinRing width={2} depth={2} />}
      </group>

      {((pressing1 && pressing2) || actived) && (
        <PressingButton
          position={[0, 0, 0]}
          pressing={pressing5 || completed}
          setPressing={setPressing5}
        />
      )}
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;
  setActive: (active: boolean) => void;

  completed: boolean;
}
