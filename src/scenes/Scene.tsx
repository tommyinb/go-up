import { Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PropsWithChildren, useContext } from "react";
import { DebugContext } from "../debugs/DebugContext";
import { Camera } from "./Camera";
import { Lights } from "./Lights";
import { SceneContext } from "./SceneContext";

export function Scene({ children }: PropsWithChildren) {
  const { clickHandlers } = useContext(SceneContext);

  const { debug } = useContext(DebugContext);

  return (
    <Canvas
      camera={{ position: [3, 9, 8], near: 1, far: 1000 }}
      flat
      shadows
      onClick={(event) => clickHandlers.forEach((handler) => handler(event))}
    >
      {debug && (
        <>
          <Stats />

          <axesHelper args={[1]} />
        </>
      )}

      <Camera />

      <Lights />

      {children}
    </Canvas>
  );
}
