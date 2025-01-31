import { readdir, readFile } from "fs/promises";
import { join } from "path/posix";
import { directory } from "../submits/downloadSubmits.js";
import { Submit } from "../submits/submit.js";
import { Filed } from "./filed.js";

export async function readSubmits() {
  const allFiles = await readdir(directory);
  const jsonFiles = allFiles.filter((file) => file.endsWith(".json"));

  const data = await Promise.all(
    jsonFiles.map(async (file) => {
      const path = join(directory, file);
      const content = await readFile(path, "utf-8");

      try {
        return JSON.parse(content) as Filed<Submit>[];
      } catch (error) {
        console.error(`fail to parsing file "${file}"`, error);
        return [];
      }
    })
  );

  return data
    .flatMap((t) => t)
    .map<Submit>((item) => ({
      ...item,
      time: new Date(item.time),
    }));
}
