import { useContext, useEffect, useMemo, useRef } from "react";
import { AudioContext } from "./AudioContext";
import { Track } from "./track";

const lastIndex = { value: 0 };

export function useTrack(url: string) {
  const index = useMemo(() => ++lastIndex.value, []);

  const ref = useRef<HTMLAudioElement>(null);

  const track = useMemo<Track>(() => ({ index, ref, url }), [index, url]);

  const { setTracks } = useContext(AudioContext);
  useEffect(() => {
    setTracks((tracks) => [...tracks, track]);

    return () => setTracks((tracks) => tracks.filter((t) => t !== track));
  }, [setTracks, track]);

  return ref;
}
