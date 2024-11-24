import { useState } from "react";
import { useStage } from "../../forms/useStage";
import { Floor10 } from "../stage1/Floor10";
import { Floor1 } from "./Floor1";
import { Floor2 } from "./Floor2";
import { Floor3 } from "./Floor3";
import { Floor4 } from "./Floor4";
import { Floor5 } from "./Floor5";
import { Floor6 } from "./Floor6";
import { Floor7 } from "./Floor7";
import { Floor8 } from "./Floor8";
import { Floor9 } from "./Floor9";

export function Stage() {
  const stage = useStage();
  const level = stage?.score.level ?? 0;

  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);

  return (
    <>
      <Floor1 index={0} />

      {level >= 1 && (
        <Floor2 index={1} active={active2} setActive={setActive2} />
      )}

      {level >= 2 && (
        <Floor3 index={2} active={active3} setActive={setActive3} />
      )}

      {level >= 3 && (
        <Floor4 index={3} active={active4} setActive={setActive4} />
      )}

      {level >= 4 && (
        <Floor5 index={4} active={active2 && active3 && active4} />
      )}

      {level >= 5 && (
        <Floor6 index={5} active={active6} setActive={setActive6} />
      )}
      {level >= 6 && (
        <Floor7 index={6} active={active7} setActive={setActive7} />
      )}
      {level >= 7 && (
        <Floor8 index={7} active={active8} setActive={setActive8} />
      )}

      {level >= 8 && (
        <Floor9 index={8} active={active6 && active7 && active8} />
      )}

      {level >= 9 && <Floor10 index={9} />}
    </>
  );
}