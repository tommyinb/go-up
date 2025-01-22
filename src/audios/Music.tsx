import { useContext, useEffect, useState } from "react";
import { GameContext } from "../games/GameContext";
import { AudioContext } from "./AudioContext";
import musicFile from "./music.mp3";
import { useTrack } from "./useTrack";

export function Music() {
  const track = useTrack(musicFile);

  const [playing, setPlaying] = useState(false);
  const { disabled } = useContext(AudioContext);
  useEffect(() => {
    if (playing && !disabled) {
      track.current?.play();
    } else {
      track.current?.pause();
    }
  }, [disabled, playing, track]);

  const { player } = useContext(GameContext);
  useEffect(() => {
    if (player.inputs.length > 0) {
      setPlaying(true);
    }
  }, [player.inputs.length]);

  return <></>;
}
