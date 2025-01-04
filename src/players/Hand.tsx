import { useGLTF } from "@react-three/drei";
import handFile from "./hand.glb";
import { useNode } from "./useNode";

export function Hand() {
  const handGltf = useGLTF<string>(handFile);
  const handModel = useNode(handGltf, "hand");

  return (
    <group
      position={[-0.15, 1.1, -0.8]}
      rotation={[(0.6 * Math.PI) / 2, 0.1 * Math.PI, 0]}
      scale={[3, 3, 3]}
    >
      <primitive object={handModel} />
    </group>
  );
}
