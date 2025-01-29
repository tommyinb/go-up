export interface Report {
  stageId: string;

  distribution: {
    percentage: number;
    score: number;
  }[];

  successes: number;
  failures: number;

  time: number;
}
