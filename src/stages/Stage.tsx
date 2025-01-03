import { useContext } from "react";
import { MenuContext } from "../menus/MenuContext";
import { Stage as Stage1 } from "./stage1/Stage";
import { Stage as Stage2 } from "./stage2/Stage";
import { Stage as Stage3 } from "./stage3/Stage";
import { Stage as Stage4 } from "./stage4/Stage";
import { Stage as Stage5 } from "./stage5/Stage";

export function Stage() {
  const { selected } = useContext(MenuContext);

  return (
    <>
      {selected === 0 && <Stage1 />}
      {selected === 1 && <Stage2 />}
      {selected === 2 && <Stage3 />}
      {selected === 3 && <Stage4 />}
      {selected === 4 && <Stage5 />}
    </>
  );
}
