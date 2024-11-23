import { useMemo } from "react";
import { MenuItem } from "../../menus/MenuItem";

export function Menu() {
  return (
    <MenuItem
      index={1}
      title="Level 11 - 20"
      config={useMemo(
        () => ({ round: 5, time: 40, prize: 1, level: 10, coin: 40 }),
        []
      )}
    />
  );
}
