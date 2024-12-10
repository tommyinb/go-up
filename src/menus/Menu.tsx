import { useContext } from "react";
import "./Menu.css";
import { MenuContext } from "./MenuContext";
import { MenuItem } from "./MenuItem";
import { Mode } from "./mode";

export function Menu() {
  const { mode, stages } = useContext(MenuContext);

  return (
    <div className={`menus-Menu ${mode === Mode.Menu ? "active" : ""}`}>
      <div className="top" />

      <div className="scroll">
        <div className="title">Go Up</div>

        <div className="content">
          {stages.map((stage) => (
            <MenuItem key={stage.index} index={stage.index} />
          ))}
        </div>
      </div>

      <div className="bottom" />
    </div>
  );
}
