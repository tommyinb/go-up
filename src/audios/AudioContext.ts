import { createContext, Dispatch, SetStateAction } from "react";
import { Track } from "./track";

export const AudioContext = createContext<{
  tracks: Track[];
  setTracks: Dispatch<SetStateAction<Track[]>>;
}>({
  tracks: [],
  setTracks: () => {},
});
