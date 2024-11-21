import { CameraControls } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { SceneContext } from "./SceneContext";

export function Camera() {
  const ref = useRef<CameraControls>(null);

  const { cameraTarget } = useContext(SceneContext);
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

  return <CameraControls ref={ref} smoothTime={0.3} />;
}
