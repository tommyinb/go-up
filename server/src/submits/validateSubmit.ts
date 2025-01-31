import { Stored } from "../servers/stored.js";
import { Submit } from "./submit.js";

export function validateSubmit(data: any): data is Stored<Submit> {
  if (typeof data !== "object") {
    return false;
  }

  if (!data) {
    return false;
  }

  const { stageId, userId, score, time } = data;

  return !!(
    stageId &&
    typeof stageId === "string" &&
    stageId.length <= 100 &&
    userId &&
    typeof userId === "string" &&
    userId.length <= 100 &&
    typeof score === "number" &&
    score >= 0 &&
    time &&
    typeof time === "object" &&
    time.seconds &&
    typeof time.seconds === "number" &&
    time.seconds > 0
  );
}
