import { PropsWithChildren, useEffect, useState } from "react";
import "./Form.css";

export function Form({ className, active, children }: Props) {
  const [state, setState] = useState<"idle" | "activating" | "active">("idle");

  useEffect(() => {
    if (active) {
      setState("activating");

      const timer = setTimeout(() => setState("active"), 800);
      return () => clearTimeout(timer);
    } else {
      setState("idle");
    }
  }, [active]);

  return (
    <div className={`forms-Form ${className} ${state}`}>
      <div>{children}</div>
    </div>
  );
}

interface Props extends PropsWithChildren {
  className: string;
  active: boolean;
}
