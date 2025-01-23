import { useContext, useMemo } from "react";
import { MenuContext } from "../menus/MenuContext";

export function useStage() {
  const { stages, selected } = useContext(MenuContext);

  return useMemo(
    () => stages.find((stage) => stage.index === selected),
    [selected, stages]
  );
}
