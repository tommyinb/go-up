import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PropsWithChildren, useContext } from "react";
import { DebugContext } from "../debugs/DebugContext";
import { Lights } from "./Lights";
import { SceneContext } from "./SceneContext";

export function Scene({ children }: PropsWithChildren) {
  const { clickHandlers } = useContext(SceneContext);

  const { debug, setDebug } = useContext(DebugContext);

  return (
    <Canvas
      camera={{ position: [6, 9, 12], near: 1, far: 1000 }}
      flat
      shadows
      onClick={(event) => clickHandlers.forEach((handler) => handler(event))}
      onDoubleClick={() => setDebug(!debug)}
    >
      {debug && <axesHelper args={[1]} />}

      <Lights />

      {children}

      {debug && <OrbitControls />}
    </Canvas>
  );
}
