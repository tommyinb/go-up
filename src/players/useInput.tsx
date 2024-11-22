import { useThree } from "@react-three/fiber";
import { RefObject, useCallback, useContext, useState } from "react";
import { Mesh, Raycaster, Vector2, Vector3 } from "three";
import { GameContext } from "../games/GameContext";
import { PlayerInput } from "../games/playerInput";
import { PlayerInputType } from "../games/playerInputType";
import { useClick } from "../scenes/useClick";

export function useInput(ref: RefObject<Mesh>) {
  const [input, setInput] = useState<PlayerInput>();

  const { camera } = useThree();

  const { round, floors: gameFloors, setPlayer } = useContext(GameContext);

  useClick(
    useCallback(
      (event) => {
        if (round.time <= 0) {
          return;
        }

        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new Raycaster();
        raycaster.setFromCamera(new Vector2(x, y), camera);

        const floorMeshes = gameFloors
          .map((floor) => floor.meshRef.current)
          .filter((mesh) => mesh)
          .map((mesh) => mesh!);

        const intersects = raycaster.intersectObjects(
          ref.current ? [...floorMeshes, ref.current] : floorMeshes,
          true
        );

        if (intersects.length <= 0) {
          return;
        }

        const intersectFloors = intersects.map((intersect) => ({
          intersect,
          floor: gameFloors.find(
            (floor) => floor.meshRef.current === intersect.object
          ),
        }));

        const inputType = intersectFloors[0].floor
          ? PlayerInputType.Move
          : PlayerInputType.Smash;

        const intersectFloor = intersectFloors.find((item) => item.floor);
        if (!intersectFloor) {
          return;
        }

        const floorPosition = new Vector3();
        intersectFloor.floor?.groupRef.current?.getWorldPosition(floorPosition);

        const inputTarget = new Vector3(
          intersectFloor.intersect.point.x,
          floorPosition.y,
          intersectFloor.intersect.point.z
        );

        const input = {
          time: round.time,
          type: inputType,
          target: inputTarget,
        };
        setInput(input);

        setPlayer((player) => ({
          ...player,
          inputs: [...player.inputs, input],
        }));
      },
      [camera, gameFloors, ref, round.time, setPlayer]
    )
  );
  return input;
}
