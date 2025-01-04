import { useGLTF } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { RefObject, useContext } from "react";
import { Group } from "three";
import { DebugContext } from "../../debugs/DebugContext";
import { useNode } from "../../players/useNode";
import coinFile from "./coin.glb";

export function CoinBox({ boxRef, position, opacity, pressed }: Props) {
  const coinGltf = useGLTF(coinFile);
  const coinModel = useNode(coinGltf, "coin");

  const { debug } = useContext(DebugContext);

  return (
    <group ref={boxRef} position={position}>
      {!pressed && (
        <>
          <group position={[0, 0.01, 0]}>
            <primitive object={coinModel} />
          </group>

          <mesh position={[0, 0.15, 0]} visible={debug}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />

            <meshStandardMaterial
              color="#cc0"
              transparent={opacity < 1}
              opacity={opacity}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

interface Props {
  boxRef: RefObject<Group>;

  position: Vector3;

  opacity: number;

  pressed: boolean;
}
