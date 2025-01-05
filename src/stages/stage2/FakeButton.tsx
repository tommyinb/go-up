import { Vector3 } from "@react-three/fiber";
import { ButtonBox } from "../stage1/ButtonBox";

export function FakeButton({ position }: Props) {
  return (
    <ButtonBox
      width={1.1}
      depth={1.1}
      position={position}
      color="#c00"
      visible={true}
      pressed={false}
    />
  );
}

interface Props {
  position: Vector3;
}
