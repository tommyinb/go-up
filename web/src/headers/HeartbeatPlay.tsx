import { useContext, useEffect, useState } from "react";
import { useSound } from "../audios/useSound";
import { GameContext } from "../games/GameContext";
import heartbeatFile from "./heartbeat.mp3";

export function HeartbeatPlay() {
  const [playing, setPlaying] = useState(false);

  const sound = useSound(heartbeatFile);

  const { round } = useContext(GameContext);

  useEffect(() => {
    if (playing) {
      return;
    }

    if (round.time > 23) {
      return;
    }

    setPlaying(true);

    sound();
  }, [playing, round.time, sound]);

  return <></>;
}
