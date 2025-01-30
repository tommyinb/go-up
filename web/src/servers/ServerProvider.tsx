import { PropsWithChildren } from "react";
import { useStorage } from "../scores/useStorage";
import { ServerContext } from "./ServerContext";
import { Report } from "./report";

export function ServerProvider({ children }: PropsWithChildren) {
  const [reports, setReports] = useStorage<Report[]>(
    "servers-ServerProvider-reports-1",
    []
  );

  return (
    <ServerContext.Provider value={{ reports, setReports }}>
      {children}
    </ServerContext.Provider>
  );
}
