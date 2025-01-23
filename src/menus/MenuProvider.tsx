import { PropsWithChildren, useContext, useMemo, useState } from "react";
import { ScoreContext } from "../scores/ScoreContext";
import { ScoreResult } from "../scores/scoreResult";
import { configs } from "../stages/configs";
import { MenuContext } from "./MenuContext";
import { Mode } from "./mode";
import { Stage } from "./stage";

export function MenuProvider({ children }: PropsWithChildren) {
  const { scores } = useContext(ScoreContext);
  const succeeded = useMemo(
    () => scores.some((score) => score.result === ScoreResult.Success),
    [scores]
  );

  const [mode, setMode] = useState(succeeded ? Mode.Menu : Mode.Game);
  const [run, setRun] = useState(0);

  const [stages, setStages] = useState<Stage[]>(() =>
    configs.map((config, index) => ({
      index,
      config,
      score: { prize: 0, level: 0, coin: 0, time: undefined },
    }))
  );

  const [selected, setSelected] = useState(0);

  return (
    <MenuContext.Provider
      value={{
        mode,
        setMode,
        run,
        setRun,
        stages,
        setStages,
        selected,
        setSelected,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
