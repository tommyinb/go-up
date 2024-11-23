import { useContext } from "react";
import { Menu as Stage1 } from "../stages/stage1/Menu";
import { Menu as Stage2 } from "../stages/stage2/Menu";
import "./Menu.css";
import { MenuContext } from "./MenuContext";
import { Mode } from "./mode";

export function Menu() {
  const { mode } = useContext(MenuContext);

  return (
    <div className={`menus-Menu ${mode === Mode.Menu ? "active" : ""}`}>
      <div className="scroll">
        <div className="title">Solo Playground</div>

        <div className="content">
          <Stage1 />
          <Stage2 />
        </div>
      </div>
    </div>
  );
}
