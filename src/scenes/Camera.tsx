import { CameraControls, CameraShake } from "@react-three/drei";
import { useContext, useEffect, useRef, useState } from "react";
import { SceneContext } from "./SceneContext";

export function Camera() {
  const ref = useRef<CameraControls>(null);

  const { cameraTarget, cameraShake } = useContext(SceneContext);

  useEffect(() => {
    ref.current?.setLookAt(
      cameraTarget.x + 6,
      cameraTarget.y + 9,
      cameraTarget.z + 12,
      cameraTarget.x,
      cameraTarget.y,
      cameraTarget.z,
      true
    );
  }, [cameraTarget.x, cameraTarget.y, cameraTarget.z]);

  const [shaking, setShaking] = useState(false);
  useEffect(() => {
    if (cameraShake) {
      setShaking(true);

      const timer = setTimeout(() => setShaking(false), 100);
      return () => clearTimeout(timer);
    }
  }, [cameraShake]);

  return (
    <>
      <CameraControls ref={ref} smoothTime={0.3} />

      {shaking && (
        <CameraShake
          key={cameraShake}
          pitchFrequency={30}
          rollFrequency={30}
          intensity={0.3}
        />
      )}
    </>
  );
}
