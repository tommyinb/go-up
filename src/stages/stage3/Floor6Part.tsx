import { useCallback, useState } from "react";
import { Coin } from "../stage1/Coin";
import { PressedButton } from "../stage1/PressedButton";
import { MovingButton } from "./MovingButton";

export function Floor6Part({ active, setActive }: Props) {
  const [pressing1, setPressing1] = useState(false);
  const [pressing2, setPressing2] = useState(false);
  const [pressing3, setPressing3] = useState(false);
  const [pressing4, setPressing4] = useState(false);

  const activate = useCallback(() => setActive(true), [setActive]);

  return (
    <>
      {(!active || pressing1) && (
        <MovingButton
          left={[-2.5, 0, -2.5]}
          right={[-2.5, 0, 2.5]}
          duration={5}
          pressing={pressing1}
          setPressing={setPressing1}
        />
      )}

      {(!active || pressing2) && (
        <MovingButton
          left={[-2.5, 0, 2.5]}
          right={[2.5, 0, 2.5]}
          duration={5}
          pressing={pressing2}
          setPressing={setPressing2}
        />
      )}

      {(!active || pressing3) && (
        <MovingButton
          left={[2.5, 0, 2.5]}
          right={[2.5, 0, -2.5]}
          duration={5}
          pressing={pressing3}
          setPressing={setPressing3}
        />
      )}

      {(!active || pressing4) && (
        <MovingButton
          left={[2.5, 0, -2.5]}
          right={[-2.5, 0, -2.5]}
          duration={5}
          pressing={pressing4}
          setPressing={setPressing4}
        />
      )}

      {((pressing1 && pressing2 && pressing3 && pressing4) || active) && (
        <PressedButton position={[0, 0, 0]} onPress={activate} />
      )}

      {active && (
        <>
          <Coin position={[-4, 0, 0]} />
          <Coin position={[4, 0, 0]} />
          <Coin position={[0, 0, -4]} />
          <Coin position={[0, 0, 4]} />
        </>
      )}
    </>
  );
}

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
}
