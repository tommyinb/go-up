import { useHelper } from "@react-three/drei";
import { useContext, useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { DebugContext } from "../debugs/DebugContext";

export function Lights() {
  const { debug } = useContext(DebugContext);

  const directionalLightRef = useRef<DirectionalLight>(null!);
  useHelper(debug && directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={1} />

      <directionalLight
        ref={directionalLightRef}
        intensity={4}
        position={[-16, 12, 16]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={200}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={200}
        shadow-camera-bottom={-10}
      />
    </>
  );
}
