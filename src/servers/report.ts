export interface Report {
  stageId: string;

  distribution: {
    percentage: number;
    score: number;
  }[];

  time: number;
}
