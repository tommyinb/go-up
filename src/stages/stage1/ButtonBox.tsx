import { useGLTF } from "@react-three/drei";
import { Color, Vector3 } from "@react-three/fiber";
import { RefObject, useContext } from "react";
import { Group } from "three";
import { DebugContext } from "../../debugs/DebugContext";
import { useNode } from "../../players/useNode";
import buttonFile from "./button.glb";

export function ButtonBox({
  boxRef,
  width,
  depth,
  position,
  color,
  opacity,
  pressed,
}: Props) {
  const buttonGltf = useGLTF(buttonFile);
  const centerModel = useNode(buttonGltf, "center");
  const outerModel = useNode(buttonGltf, "outer");

  const { debug } = useContext(DebugContext);

  return (
    <group ref={boxRef} position={position}>
      <group position={[0, -0.04, 0]}>
        <group scale={[1, pressed ? 0.1 : 1, 1]}>
          <primitive object={centerModel} />
        </group>

        <primitive object={outerModel} />
      </group>

      <mesh position={[0, pressed ? 0.005 : 0.15, 0]} visible={debug}>
        <boxGeometry args={[width, pressed ? 0.01 : 0.3, depth]} />

        <meshStandardMaterial
          color={color}
          transparent={opacity < 1}
          opacity={opacity}
          visible={opacity > 0}
        />
      </mesh>
    </group>
  );
}

interface Props {
  boxRef?: RefObject<Group>;

  width: number;
  depth: number;
  position: Vector3;

  color: Color;
  opacity: number;

  pressed: boolean;
}
