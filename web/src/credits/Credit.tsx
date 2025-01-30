import { useContext } from "react";
import { DebugContext } from "../debugs/DebugContext";
import "./Credit.css";

export function Credit() {
  const { debug } = useContext(DebugContext);

  return (
    <div className={`credits-Credit ${debug ? "active" : ""}`}>
      <a href="https://zsdev.code-connect.com.au">
        Sound effects and music obtained from zapsplat.com
      </a>
    </div>
  );
}
