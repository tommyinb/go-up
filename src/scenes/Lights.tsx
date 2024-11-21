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
        position={[-4, 3, 4]}
      />
    </>
  );
}
