import { useContext } from "react";
import { AudioContext } from "./AudioContext";
import "./Speaker.css";

export function Speaker() {
  const { disabled, setDisabled } = useContext(AudioContext);

  return (
    <div
      className={`audios-Speaker ${disabled ? "off" : "on"}`}
      onClick={() => setDisabled(!disabled)}
    />
  );
}
