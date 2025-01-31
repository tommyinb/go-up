import { mkdir, writeFile } from "fs/promises";
import { readSubmits } from "./readSubmits.js";

export async function countUsers() {
  const allSubmits = await readSubmits();
  const usersSubmits = Object.groupBy(allSubmits, (submit) => submit.userId);

  const users = Object.keys(usersSubmits);
  console.log(`total users: ${users.length}`);

  const allItems = users.map((userId) => {
    const userSubmits = usersSubmits[userId];

    const allTimes = userSubmits?.map((submit) => submit.time) ?? [];
    const sortedTimes = allTimes.sort((a, b) => a.getTime() - b.getTime());

    const firstTime = sortedTimes[0];
    const lastTime = sortedTimes[sortedTimes.length - 1];

    return {
      userId,
      submits: userSubmits?.length ?? 0,
      firstTime,
      lastTime,
    };
  });
  const sortedItems = allItems.sort(
    (a, b) => -(a.lastTime.getTime() - b.lastTime.getTime())
  );

  const text = JSON.stringify(sortedItems, null, 2);

  const directory = "data/users";
  await mkdir(directory, { recursive: true });

  const timeValue = new Date();
  const timeText = timeValue.toLocaleString("lt-LT").replace(/-|:| /g, "");
  const fileName = `${directory}/${timeText}.json`;

  await writeFile(fileName, text);
}
