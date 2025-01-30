import { RefObject } from "react";

export interface Track {
  index: number;

  url: string;

  ref: RefObject<HTMLAudioElement>;
}
