import { Submit } from "../submits/submit.js";
import { getDistribution } from "./getDistribution.js";
import { Report } from "./report.js";

export function calculateContent(
  submits: Submit[]
): Omit<Report, "stageId" | "time"> {
  const scores = submits.map((submit) => submit.score);

  const distribution = getDistribution(scores);

  const successes = scores.filter((score) => score >= 1000000000);

  return {
    distribution,
    successes: successes.length,
    failures: submits.length - successes.length,
  };
}
