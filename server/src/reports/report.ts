export interface Report {
  distribution: {
    percentage: number;
    score: number;
  }[];

  successes: number;
  failures: number;

  time: Date;
}
