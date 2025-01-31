import { mkdir, writeFile } from "fs/promises";
import { Report } from "./report.js";

export async function saveReport(report: Report, stageId: string) {
  const text = JSON.stringify(report, null, 2);

  const directory = "data/reports";
  await mkdir(directory, { recursive: true });

  const fileName = `${directory}/${stageId}.json`;
  await writeFile(fileName, text);
}
