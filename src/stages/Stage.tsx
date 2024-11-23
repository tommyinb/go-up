import { useContext } from "react";
import { MenuContext } from "../menus/MenuContext";
import { Stage as Stage1 } from "./stage1/Stage";
import { Stage as Stage2 } from "./stage2/Stage";

export function Stage() {
  const { selected } = useContext(MenuContext);

  return (
    <>
      {selected === 0 && <Stage1 />}
      {selected === 1 && <Stage2 />}
    </>
  );
}
