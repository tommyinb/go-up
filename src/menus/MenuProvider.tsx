import { PropsWithChildren, useState } from "react";
import { MenuContext } from "./MenuContext";
import { Mode } from "./mode";
import { Stage } from "./stage";

export function MenuProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState(Mode.Game);
  const [run, setRun] = useState(0);

  const [stages, setStages] = useState<Stage[]>([]);
  const [selected, setSelected] = useState(3);

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
