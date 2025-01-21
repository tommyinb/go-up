import { PropsWithChildren, useState } from "react";
import { AudioContext } from "./AudioContext";
import { Track } from "./track";

export function AudioProvider({ children }: PropsWithChildren) {
  const [tracks, setTracks] = useState<Track[]>([]);

  return (
    <AudioContext.Provider value={{ tracks, setTracks }}>
      {children}
    </AudioContext.Provider>
  );
}
