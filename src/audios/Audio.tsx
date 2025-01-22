import "./Audio.css";
import { useContext } from "react";
import { AudioContext } from "./AudioContext";
import { Music } from "./Music";
import { Speaker } from "./Speaker";

export function Audio() {
  const { tracks } = useContext(AudioContext);

  return (
    <div className="audios-Audio">
      {tracks.map((track) => (
        <audio
          key={track.index}
          ref={track.ref}
          src={track.url}
          preload="auto"
        />
      ))}

      <Music />

      <Speaker />
    </div>
  );
}
