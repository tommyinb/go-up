import admin from "firebase-admin";
import { generateReports } from "./reports/generateReports.js";
import { downloadSubmits } from "./submits/downloadSubmits.js";
import { countUsers } from "./users/countUsers.js";

console.log("start", new Date());

const credential = admin.credential.cert("./data/serviceAccountKey.json");
const app = admin.initializeApp({ credential });
const firestore = app.firestore();

await downloadSubmits(firestore);
await generateReports(firestore);
await countUsers();

console.log("done", new Date());
