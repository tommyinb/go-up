import { StageConfig } from "./stageConfig";
import { StageScore } from "./stageScore";

export interface Stage {
  index: number;

  config: StageConfig;

  score: StageScore;
}
