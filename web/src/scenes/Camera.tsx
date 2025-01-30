import { CameraControls, CameraShake } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useContext, useEffect, useMemo, useRef } from "react";
import { CameraShakeSize } from "./cameraShakeSize";
import { SceneContext } from "./SceneContext";

export function Camera() {
  const ref = useRef<CameraControls>(null);

  const { cameraTarget, cameraShakes, setCameraShakes } =
    useContext(SceneContext);

  useEffect(() => {
    ref.current?.setLookAt(
      cameraTarget.x + 3,
      cameraTarget.y + 12,
      cameraTarget.z + 8,
      cameraTarget.x,
      cameraTarget.y,
      cameraTarget.z,
      true
    );
  }, [cameraTarget.x, cameraTarget.y, cameraTarget.z]);

  const shake = useMemo(() => {
    if (cameraShakes.length <= 0) {
      return undefined;
    }

    const sorted = cameraShakes.sort((a, b) => a.size - b.size);
    return sorted[sorted.length - 1];
  }, [cameraShakes]);

  const { clock } = useThree();
  useEffect(() => {
    if (cameraShakes.length <= 0) {
      return;
    }

    const shakeEnds = cameraShakes.map((shake) => ({
      shake,
      endTime: shake.time + (shake.size === CameraShakeSize.Large ? 3 : 0.1),
    }));

    const sorted = shakeEnds.sort((a, b) => a.endTime - b.endTime);
    const first = sorted[0];

    const currentTime = clock.getElapsedTime();
    const timeLeft = first.endTime - currentTime;

    if (timeLeft > 0) {
      const timer = setTimeout(
        () =>
          setCameraShakes((shakes) =>
            shakes.filter((shake) => shake !== first.shake)
          ),
        timeLeft * 1000
      );

      return () => clearTimeout(timer);
    } else {
      setCameraShakes((shakes) =>
        shakes.filter((shake) => shake !== first.shake)
      );
    }
  }, [cameraShakes, clock, setCameraShakes]);

  return (
    <>
      <CameraControls ref={ref} smoothTime={0.3} />

      {shake &&
        (shake.size === CameraShakeSize.Large ? (
          <CameraShake
            pitchFrequency={30}
            rollFrequency={30}
            intensity={0.5}
            decay={true}
            decayRate={0.5}
          />
        ) : (
          <CameraShake pitchFrequency={30} rollFrequency={30} intensity={0.3} />
        ))}
    </>
  );
}
