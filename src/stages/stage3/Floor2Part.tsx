import { useCallback, useState } from "react";
import { Coin } from "../stage1/Coin";
import { PressedButton } from "../stage1/PressedButton";
import { PressingButton } from "../stage2/PressingButton";

export function Floor2Part({ active, setActive }: Props) {
  const [pressing1, setPressing1] = useState(false);
  const [pressing2, setPressing2] = useState(false);
  const [pressing3, setPressing3] = useState(false);
  const [pressing4, setPressing4] = useState(false);

  const activate = useCallback(() => setActive(true), [setActive]);

  return (
    <>
      <PressingButton
        position={[-3, 0, 0]}
        pressing={pressing1}
        setPressing={setPressing1}
        disabled={active}
      />

      <PressingButton
        position={[3, 0, 0]}
        pressing={pressing2}
        setPressing={setPressing2}
        disabled={active}
      />

      <PressingButton
        position={[0, 0, -3]}
        pressing={pressing3}
        setPressing={setPressing3}
        disabled={active}
      />

      <PressingButton
        position={[0, 0, 3]}
        pressing={pressing4}
        setPressing={setPressing4}
        disabled={active}
      />

      {((pressing1 && pressing2 && pressing3 && pressing4) || active) && (
        <PressedButton position={[0, 0, 0]} onPress={activate} />
      )}

      {active && (
        <>
          <Coin position={[-2, 0, -2]} />
          <Coin position={[-2, 0, 2]} />
          <Coin position={[2, 0, -2]} />
          <Coin position={[2, 0, 2]} />
        </>
      )}
    </>
  );
}

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
}
