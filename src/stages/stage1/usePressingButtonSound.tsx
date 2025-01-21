import { useEffect, useState } from "react";
import { useTrack } from "../../audios/useTrack";
import buttonSound from "../stage1/button.mp3";

export function usePressingButtonSound(pressing: boolean) {
  const track1 = useTrack(buttonSound);
  const track2 = useTrack(buttonSound);
  const track3 = useTrack(buttonSound);
  const track4 = useTrack(buttonSound);
  const track5 = useTrack(buttonSound);
  const track6 = useTrack(buttonSound);
  const track7 = useTrack(buttonSound);
  const track8 = useTrack(buttonSound);
  const track9 = useTrack(buttonSound);

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (pressing) {
      setCount((count) => count + 1);
    }
  }, [pressing]);

  useEffect(() => {
    if (count <= 0) {
      return;
    }

    const tracks = [
      track1,
      track2,
      track3,
      track4,
      track5,
      track6,
      track7,
      track8,
      track9,
    ];
    const track = tracks[count % tracks.length];

    track.current?.play();
  }, [
    count,
    track1,
    track2,
    track3,
    track4,
    track5,
    track6,
    track7,
    track8,
    track9,
  ]);
}
