import { useContext } from "react";
import { MenuContext } from "../menus/MenuContext";

export function useStage() {
  const { stages, selected } = useContext(MenuContext);

  return stages.find((stage) => stage.index === selected);
}
