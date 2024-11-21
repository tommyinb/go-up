import { useCallback, useState } from "react";
import { Level1 } from "./Level1";
import { Level10 } from "./Level10";
import { Level2 } from "./Level2";
import { Level3 } from "./Level3";
import { Level4 } from "./Level4";
import { Level5 } from "./Level5";
import { Level6 } from "./Level6";
import { Level7 } from "./Level7";
import { Level8 } from "./Level8";
import { Level9 } from "./Level9";

export function Stage() {
  const [level, setLevel] = useState(1);
  const nextLevel = useCallback(() => setLevel((level) => level + 1), []);

  const [level6Completed, setLevel6Completed] = useState(false);
  const level6Complete = useCallback(() => setLevel6Completed(true), []);

  return (
    <>
      <Level1 next={nextLevel} />

      {level >= 2 && (
        <group position={[0, 3, 0]}>
          <Level2 next={nextLevel} />
        </group>
      )}

      {level >= 3 && (
        <group position={[0, 6, 0]}>
          <Level3 next={nextLevel} />
        </group>
      )}

      {level >= 4 && (
        <group position={[0, 9, 0]}>
          <Level4 next={nextLevel} />
        </group>
      )}

      {level >= 5 && (
        <group position={[0, 12, 0]}>
          <Level5 next={nextLevel} />
        </group>
      )}

      {level >= 6 && (
        <group position={[0, 15, 0]}>
          <Level6 next={nextLevel} complete={level6Complete} />
        </group>
      )}

      {level >= 7 && (
        <group position={[0, 18, 0]}>
          <Level7 active={level6Completed} next={nextLevel} />
        </group>
      )}

      {level >= 8 && (
        <group position={[0, 21, 0]}>
          <Level8 next={nextLevel} />
        </group>
      )}

      {level >= 9 && (
        <group position={[0, 24, 0]}>
          <Level9 next={nextLevel} />
        </group>
      )}

      {level >= 10 && (
        <group position={[0, 27, 0]}>
          <Level10 complete={nextLevel} />
        </group>
      )}
    </>
  );
}
