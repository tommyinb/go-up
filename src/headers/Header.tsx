import { useContext } from "react";
import { DebugContext } from "../debugs/DebugContext";
import "./Header.css";
import { Timer } from "./Timer";

export function Header() {
  const { debug, setDebug } = useContext(DebugContext);

  return (
    <div className="headers-Header" onDoubleClick={() => setDebug(!debug)}>
      <Timer />
    </div>
  );
}
