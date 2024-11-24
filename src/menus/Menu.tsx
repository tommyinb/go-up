import { useContext } from "react";
import { config as stage1 } from "../stages/stage1/config";
import { config as stage2 } from "../stages/stage2/config";
import "./Menu.css";
import { MenuContext } from "./MenuContext";
import { MenuItem } from "./MenuItem";
import { Mode } from "./mode";

export function Menu() {
  const { mode } = useContext(MenuContext);

  return (
    <div className={`menus-Menu ${mode === Mode.Menu ? "active" : ""}`}>
      <div className="scroll">
        <div className="title">Solo Playground</div>

        <div className="content">
          <MenuItem index={0} config={stage1} />
          <MenuItem index={1} config={stage2} />
        </div>
      </div>
    </div>
  );
}
