import { useCallback, useState } from "react";

export function useOnePressState() {
  const [pressed, setPressed] = useState(false);

  const setPressing = useCallback((pressing: boolean) => {
    if (pressing) {
      setPressed(true);
    }
  }, []);

  return [pressed, setPressing] as const;
}
