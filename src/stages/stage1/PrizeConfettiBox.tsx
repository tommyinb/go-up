import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Euler, InstancedMesh, Object3D, Vector3, Vector3Tuple } from "three";

export function PrizeConfettiBox({ count, boxSize, maxVelocity }: Props) {
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
        const velocity = new Vector3(
          (Math.random() - 0.5) * 2 * maxVelocity[0],
          Math.random() * maxVelocity[1],
          (Math.random() - 0.5) * 2 * maxVelocity[2]
        );

        const position = new Vector3(
          Math.random() * (velocity.x >= 0 ? 0.5 : -0.5) * boxSize[0],
          Math.random() * boxSize[1],
          Math.random() * (velocity.z >= 0 ? 0.5 : -0.5) * boxSize[2]
        );

        const rotation = new Euler(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        );

        return { position, velocity, rotation } as Point;
      });
    }

    const points = userData[pointsKey] as Point[];

    const elapsed = clock.getElapsedTime() - startTime;

    points.forEach((point, index) => {
      matrixObject.position.copy(point.velocity);
      matrixObject.position.multiplyScalar(elapsed);

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
  boxSize: Vector3Tuple;
  maxVelocity: Vector3Tuple;
}

interface Point {
  position: Vector3;
  velocity: Vector3;
  rotation: Euler;
}
