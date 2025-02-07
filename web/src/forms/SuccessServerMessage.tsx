import { PropsWithChildren } from "react";
import "./SuccessServerMessage.css";

export function SuccessServerMessage({ children }: PropsWithChildren) {
  return <div className="forms-SuccessServerMessage">{children}</div>;
}
