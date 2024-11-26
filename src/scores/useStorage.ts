import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useStorage<T>(
  key: string,
  defaultValue: T
): [value: T, setValue: Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const text = localStorage.getItem(key);
    if (!text) {
      return defaultValue;
    }

    try {
      return JSON.parse(text);
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
