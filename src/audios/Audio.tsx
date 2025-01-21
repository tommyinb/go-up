import { useContext } from "react";
import { AudioContext } from "./AudioContext";

export function Audio() {
  const { tracks } = useContext(AudioContext);

  return (
    <div className="audios-Audio">
      {tracks.map((track) => (
        <audio key={track.index} ref={track.ref} src={track.url} />
      ))}
    </div>
  );
}
