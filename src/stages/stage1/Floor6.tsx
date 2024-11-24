import { useCallback, useEffect, useState } from "react";
import { Floor } from "./Floor";
import { PressedButton } from "./PressedButton";
import { useNextLevel } from "./useNextLevel";

export function Floor6({ index, setCompleted }: Props) {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);

  const [state, setState] = useState<"idle" | "next" | "complete">("idle");
  useEffect(() => {
    setState(
      pressed1 && pressed2 && pressed3 && pressed4
        ? "complete"
        : pressed1 || pressed2 || pressed3 || pressed4
        ? "next"
        : "idle"
    );
  }, [pressed1, pressed2, pressed3, pressed4]);

  const nextLevel = useNextLevel(index);
  useEffect(() => {
    switch (state) {
      case "idle":
        setCompleted(false);
        break;

      case "next":
        nextLevel();
        break;

      case "complete":
        setCompleted(true);
        break;
    }
  }, [nextLevel, setCompleted, state]);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton
        position={[0, 0, -3]}
        onPress={useCallback(() => setPressed1(true), [])}
      />

      <PressedButton
        position={[0, 0, 3]}
        onPress={useCallback(() => setPressed2(true), [])}
      />

      <PressedButton
        position={[-3, 0, 0]}
        onPress={useCallback(() => setPressed3(true), [])}
      />

      <PressedButton
        position={[3, 0, 0]}
        onPress={useCallback(() => setPressed4(true), [])}
      />
    </Floor>
  );
}

interface Props {
  index: number;

  setCompleted: (completed: boolean) => void;
}
