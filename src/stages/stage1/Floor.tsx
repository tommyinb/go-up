import { PropsWithChildren } from "react";
import { useFloor } from "../../games/useFloor";

export function Floor({ width, depth, children }: Props) {
  const { ref } = useFloor(width, depth);

  return (
    <group ref={ref}>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color="#fff" />
      </mesh>

      {children}
    </group>
  );
}

interface Props extends PropsWithChildren {
  width: number;
  depth: number;
}
