import { StageScore } from "../menus/stageScore";
import { ScoreResult } from "./scoreResult";

export interface Score {
  stage: string;

  result: ScoreResult;

  score: StageScore;
}
