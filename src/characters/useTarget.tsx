import { useThree } from "@react-three/fiber";
import { useCallback, useContext, useState } from "react";
import { Raycaster, Vector2, Vector3 } from "three";
import { GameContext } from "../games/GameContext";
import { useClick } from "../scenes/useClick";

export function useTarget() {
  const [target, setTarget] = useState(new Vector3(0, 0, 0));

  const { grounds } = useContext(GameContext);
  const { camera, scene } = useThree();
  useClick(
    useCallback(
      (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new Raycaster();
        raycaster.setFromCamera(new Vector2(x, y), camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        const targets = intersects.flatMap((intersect) =>
          grounds
            .filter(
              (ground) =>
                Math.abs(intersect.point.y - ground.position.y) <= 0.1 &&
                Math.abs(ground.position.x - intersect.point.x) <=
                  ground.width / 2 &&
                Math.abs(ground.position.z - intersect.point.z) <=
                  ground.depth / 2
            )
            .map(
              (ground) =>
                new Vector3(
                  intersect.point.x,
                  ground.position.y,
                  intersect.point.z
                )
            )
        );
        if (targets.length <= 0) {
          return;
        }

        const target = targets[0];
        setTarget(target);
      },
      [camera, grounds, scene.children]
    )
  );

  return target;
}
