import { useThree } from "@react-three/fiber";
import { useCallback, useContext } from "react";
import { Raycaster, Vector2, Vector3 } from "three";
import { GameContext } from "../games/GameContext";
import { SceneContext } from "../scenes/SceneContext";
import { useClick } from "../scenes/useClick";

export function useGroundClick(setTarget: (target: Vector3) => void) {
  const { floors: allFloors } = useContext(GameContext);
  const { camera, scene } = useThree();

  const { setCameraTarget } = useContext(SceneContext);

  useClick(
    useCallback(
      (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new Raycaster();
        raycaster.setFromCamera(new Vector2(x, y), camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        const matches = intersects.flatMap((intersect) =>
          allFloors
            .map((floor) => {
              if (!floor.ref.current) {
                return undefined;
              }

              const position = new Vector3();
              floor.ref.current.getWorldPosition(position);

              if (
                !(
                  Math.abs(intersect.point.y - position.y) <= 0.1 &&
                  Math.abs(position.x - intersect.point.x) <= floor.width / 2 &&
                  Math.abs(position.z - intersect.point.z) <= floor.depth / 2
                )
              ) {
                return undefined;
              }

              return position;
            })
            .filter((floor) => floor)
            .map((floor) => floor!)
            .map((floor) => ({
              target: new Vector3(
                intersect.point.x,
                floor.y,
                intersect.point.z
              ),
              floor,
            }))
        );
        if (matches.length <= 0) {
          return;
        }

        const { target, floor } = matches[0];

        setTarget(target);

        setCameraTarget((target) => (target.equals(floor) ? target : floor));
      },
      [allFloors, camera, scene.children, setCameraTarget, setTarget]
    )
  );
}
