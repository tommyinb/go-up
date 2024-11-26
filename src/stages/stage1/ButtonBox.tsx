import { Color, Vector3 } from "@react-three/fiber";
import { RefObject } from "react";
import { Group } from "three";

export function ButtonBox({
  boxRef,
  width,
  depth,
  position,
  color,
  opacity,
  pressed,
}: Props) {
  return (
    <group ref={boxRef} position={position}>
      <mesh position={[0, pressed ? 0.005 : 0.15, 0]}>
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
