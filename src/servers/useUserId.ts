import { useMemo } from "react";
import { newUuid } from "./newUuid";

export function useUserId() {
  return useMemo(() => {
    const key = "servers-useUserId-1";
    const oldValue = localStorage.getItem(key);

    if (oldValue) {
      return oldValue;
    }

    const newValue = newUuid();

    localStorage.setItem(key, newValue);

    return newValue;
  }, []);
}
