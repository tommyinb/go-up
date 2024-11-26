import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Euler, InstancedMesh, Object3D, Vector3 } from "three";

export function PrizeConfettiRing({
  count,
  ringWidth,
  ringHeight,
  velocity,
}: Props) {
  const ref = useRef<InstancedMesh>(null);

  const { clock } = useThree();
  const startTime = useMemo(() => clock.getElapsedTime(), [clock]);

  const matrixObject = useMemo(() => new Object3D(), []);
  useFrame(() => {
    const { current } = ref;
    if (!current) {
      return;
    }

    const { userData } = current;
    const pointsKey = "points";

    if (!userData[pointsKey]) {
      userData[pointsKey] = Array.from({ length: current.count }, () => {
        const position = new Vector3(
          (Math.random() - 0.5) * ringWidth,
          Math.random() * ringHeight,
          (Math.random() - 0.5) * ringWidth
        );

        const direction = new Vector3(
          position.x,
          position.y * 0.1,
          position.z
        ).normalize();

        const rotation = new Euler(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        );

        return { position, direction, rotation } as Point;
      });
    }

    const points = userData[pointsKey] as Point[];

    const elapsed = clock.getElapsedTime() - startTime;
    const distance = velocity * elapsed;

    points.forEach((point, index) => {
      matrixObject.position.copy(point.direction);
      matrixObject.position.multiplyScalar(distance);

      matrixObject.position.add(point.position);

      matrixObject.rotation.copy(point.rotation);

      matrixObject.updateMatrix();
      current.setMatrixAt(index, matrixObject.matrix);
    });

    current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <planeGeometry args={[0.1, 0.1, 1, 1]} />
      <meshNormalMaterial />
    </instancedMesh>
  );
}

interface Props {
  count: number;

  ringWidth: number;
  ringHeight: number;

  velocity: number;
}

interface Point {
  position: Vector3;
  direction: Vector3;

  rotation: Euler;
}
