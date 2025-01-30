import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export function useNode(
  gltf: ReturnType<typeof useGLTF<string>>,
  nodeName: string
) {
  return useMemo(() => {
    const node = gltf.nodes[nodeName];

    const model = node.clone();

    model.castShadow = true;

    return model;
  }, [gltf.nodes, nodeName]);
}
