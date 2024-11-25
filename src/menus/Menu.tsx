import { useContext } from "react";
import { config as config1 } from "../stages/stage1/config";
import { config as config2 } from "../stages/stage2/config";
import { config as config3 } from "../stages/stage3/config";
import { config as config4 } from "../stages/stage4/config";
import { config as config5 } from "../stages/stage5/config";
import "./Menu.css";
import { MenuContext } from "./MenuContext";
import { MenuItem } from "./MenuItem";
import { Mode } from "./mode";

export function Menu() {
  const { mode } = useContext(MenuContext);

  return (
    <div className={`menus-Menu ${mode === Mode.Menu ? "active" : ""}`}>
      <div className="top" />

      <div className="scroll">
        <div className="title">Solo Playground</div>

        <div className="content">
          <MenuItem index={0} config={config1} />
          <MenuItem index={1} config={config2} />
          <MenuItem index={2} config={config3} />
          <MenuItem index={3} config={config4} />
          <MenuItem index={4} config={config5} />
        </div>
      </div>

      <div className="bottom" />
    </div>
  );
}
