import { Report } from "./report.js";

export function getDistribution(scores: number[]) {
  const sortedScores = scores.sort((a, b) => a - b);

  const percentages = [
    0, 2, 4, 5, 9, 10, 30, 51, 56, 59, 60, 66, 69, 70, 73, 77, 80, 83, 85, 87,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ];

  const distribution: Report["distribution"] = [];

  for (const percentage of percentages) {
    const index = Math.floor(sortedScores.length * (percentage / 100));
    const score = sortedScores[index];

    distribution.push({ percentage, score });
  }

  for (let i = 0; i < distribution.length - 1; i++) {
    const score = distribution[i].score;

    const clashed = distribution
      .slice(i + 1)
      .some((item) => item.score === score);

    if (clashed) {
      distribution.splice(i, 1);
      i--;
    }
  }

  return distribution;
}
