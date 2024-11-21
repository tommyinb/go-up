import { PropsWithChildren, useContext, useEffect } from "react";
import { GameContext } from "./GameContext";

export function Game({ children }: PropsWithChildren) {
  const { setRoundTime } = useContext(GameContext);

  useEffect(() => {
    const timer = setInterval(
      () => setRoundTime((time) => (time > 0 ? time - 0.02 : 30)),
      20
    );

    return () => clearInterval(timer);
  }, [setRoundTime]);

  return <>{children}</>;
}
