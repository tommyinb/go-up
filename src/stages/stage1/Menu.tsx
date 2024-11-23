import { useMemo } from "react";
import { MenuItem } from "../../menus/MenuItem";

export function Menu() {
  return (
    <MenuItem
      index={0}
      title="Level 1 - 10"
      config={useMemo(
        () => ({ round: 5, time: 30, prize: 1, level: 10, coin: 30 }),
        []
      )}
    />
  );
}
