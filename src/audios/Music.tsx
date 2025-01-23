import { useContext, useEffect, useState } from "react";
import { useStage } from "../forms/useStage";
import { GameContext } from "../games/GameContext";
import { AudioContext } from "./AudioContext";
import backgroundMusic from "./background-music.mp3";
import successMusic from "./success-music.mp3";
import { useTrack } from "./useTrack";

export function Music() {
  const [playing, setPlaying] = useState(false);

  const { player } = useContext(GameContext);
  useEffect(() => {
    if (player.inputs.length > 0) {
      setPlaying(true);
    }
  }, [player.inputs.length]);

  const { disabled } = useContext(AudioContext);

  const stage = useStage();

  const backgroundTrack = useTrack(backgroundMusic);
  const successTrack = useTrack(successMusic);
  useEffect(() => {
    if (!(backgroundTrack.current && successTrack.current)) {
      return;
    }

    if (!(playing && !disabled && stage)) {
      backgroundTrack.current.pause();
      return;
    }

    if (stage.score.prize >= stage.config.prize) {
      successTrack.current.play();

      backgroundTrack.current.pause();
    } else {
      backgroundTrack.current.loop = true;
      backgroundTrack.current.play();

      successTrack.current.pause();
    }
  }, [disabled, playing, backgroundTrack, stage, successTrack]);

  return <></>;
}
