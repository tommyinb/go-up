import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import "./RebirthExit.css";

export function RebirthExit({ className }: Props) {
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!active) {
      return;
    }

    const duration = 1500;
    const interval = 20;

    const timer = setInterval(
      () =>
        setProgress((progress) => Math.min(progress + interval / duration, 1)),
      interval
    );

    return () => clearInterval(timer);
  }, [active]);

  const { setMode } = useContext(MenuContext);
  useEffect(() => {
    if (progress >= 1) {
      setMode(Mode.Menu);

      setActive(false);
    }
  }, [progress, setMode]);

  return (
    <div
      className={`forms-RebirthExit ${className}`}
      onPointerDown={() => {
        setActive(true);
        setProgress(0);
      }}
      onPointerUp={() => setActive(false)}
      onPointerCancel={() => setActive(false)}
    >
      {active && (
        <div
          className="progress"
          style={{ right: `${(1 - progress) * 100}%` }}
        />
      )}

      <div className="text">Menu</div>
    </div>
  );
}

interface Props {
  className: string;
}
