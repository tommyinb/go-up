import { useMemo } from "react";

export function useMovingProportion(time: number, duration: number) {
  return useMemo(() => {
    const input = (time % (duration * 2)) / (duration * 2);

    return (input > 0.5 ? 1 - input : input) * 2;
  }, [duration, time]);
}
