export function Box({ opacity, onClick }: Props) {
  return (
    <mesh position={[0, 0.5, 0]} onClick={onClick}>
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial color="#444" transparent={true} opacity={opacity} />
    </mesh>
  );
}

interface Props {
  opacity: number;

  onClick: () => void;
}
