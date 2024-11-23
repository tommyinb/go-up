import { useCallback, useEffect, useState } from "react";
import { Floor } from "./Floor";
import { OnePressButton } from "./OnePressButton";

export function Floor6({ index, setCompleted, setLevel }: Props) {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);

  useEffect(() => {
    setState(
      pressed1 && pressed2 && pressed3 && pressed4
        ? "complete"
        : pressed1 || pressed2 || pressed3 || pressed4
        ? "next"
        : "idle"
    );
  }, [pressed1, pressed2, pressed3, pressed4]);

  const [state, setState] = useState<"idle" | "next" | "complete">("idle");
  useEffect(() => {
    switch (state) {
      case "idle":
        setCompleted(false);
        break;

      case "next":
        setLevel(index + 1);
        break;

      case "complete":
        setCompleted(true);
        break;
    }
  }, [index, setCompleted, setLevel, state]);

  return (
    <Floor index={index} width={10} depth={10}>
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
    </Floor>
  );
}

interface Props {
  index: number;

  setCompleted: (completed: boolean) => void;

  setLevel: (index: number) => void;
}
