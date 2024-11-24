import { useContext } from "react";
import { config as config1 } from "../stages/stage1/config";
import { config as config2 } from "../stages/stage2/config";
import { config as config3 } from "../stages/stage3/config";
import { config as config4 } from "../stages/stage4/config";
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
          {[config1, config2, config3, config4].map((config, index) => (
            <MenuItem key={index} index={index} config={config} />
          ))}
        </div>
      </div>
    </div>
  );
}
