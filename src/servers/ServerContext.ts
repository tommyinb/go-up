import { createContext } from "react";
import { Report } from "./report";

export const ServerContext = createContext<{
  reports: Report[];
  setReports: (reports: Report[]) => void;
}>({
  reports: [],
  setReports: () => {},
});
