import { PropsWithChildren, useState } from "react";
import { AudioContext } from "./AudioContext";
import { Track } from "./track";

export function AudioProvider({ children }: PropsWithChildren) {
  const [tracks, setTracks] = useState<Track[]>([]);

  const [disabled, setDisabled] = useState(false);

  return (
    <AudioContext.Provider
      value={{
        tracks,
        setTracks,
        disabled,
        setDisabled,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
