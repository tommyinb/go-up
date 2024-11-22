import { useContext, useEffect, useMemo, useState } from "react";
import { GameContext } from "../games/GameContext";
import { PlayerInput } from "../games/playerInput";

export function useInput(id: number) {
  const { round, computers } = useContext(GameContext);

  const computer = useMemo(
    () => computers.find((computer) => computer.id === id),
    [computers, id]
  );

  useEffect(() => {
    console.log("computer", computer?.id, computer?.inputs);
  }, []);

  const [output, setOutput] = useState<PlayerInput>();

  useEffect(() => {
    if (!computer) {
      return;
    }

    const inputs = computer.inputs.filter((input) => input.time >= round.time);
    if (inputs.length <= 0) {
      return;
    }

    const input = inputs[inputs.length - 1];

    setOutput(input);
  }, [computer, round.time]);

  return output;
}
