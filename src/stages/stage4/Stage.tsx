import { useStage } from "../../forms/useStage";
import { Floor10 } from "../stage1/Floor10";
import { Floor1 } from "./Floor1";
import { Floor2 } from "./Floor2";
import { Floor3 } from "./Floor3";
import { Floor4 } from "./Floor4";
import { Floor5 } from "./Floor5";

export function Stage() {
  const stage = useStage();
  const level = stage?.score.level ?? 0;

  return (
    <>
      <Floor1 index={0} />

      {level >= 1 && <Floor2 index={1} />}

      {level >= 2 && <Floor3 index={2} />}

      {level >= 3 && <Floor4 index={3} />}

      {level >= 4 && <Floor5 index={4} />}

      {level >= 9 && <Floor10 index={9} />}
    </>
  );
}
