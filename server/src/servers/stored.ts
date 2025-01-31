export type Stored<T> = Omit<
  {
    [K in keyof T]: T[K] extends Date ? { seconds: number } : T[K];
  },
  "documentId"
>;
