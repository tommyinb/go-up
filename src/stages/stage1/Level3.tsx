import { useCallback, useState } from "react";
import { Floor } from "./Floor";
import { OnePressButton } from "./OnePressButton";

export function Level3({ next }: Props) {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);

  return (
    <Floor width={10} depth={10}>
      <OnePressButton
        width={1.1}
        depth={1.1}
        position={[0, 0, -3]}
        onPress={useCallback(() => setPressed1(true), [])}
      />

      <OnePressButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 3]}
        onPress={useCallback(() => setPressed2(true), [])}
      />

      <OnePressButton
        width={1.1}
        depth={1.1}
        position={[-3, 0, 0]}
        onPress={useCallback(() => setPressed3(true), [])}
      />

      <OnePressButton
        width={1.1}
        depth={1.1}
        position={[3, 0, 0]}
        onPress={useCallback(() => setPressed4(true), [])}
      />

      {pressed1 && pressed2 && pressed3 && pressed4 && (
        <OnePressButton
          width={1.1}
          depth={1.1}
          position={[0, 0, 0]}
          onPress={next}
        />
      )}
    </Floor>
  );
}

interface Props {
  next: () => void;
}
