import { Coin } from "./Coin";
import { Floor } from "./Floor";
import { PressedButton } from "./PressedButton";
import { useNextLevel } from "./useNextLevel";

export function Floor5({ index }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 0]}
        onPress={nextLevel}
      />

      {Array.from({ length: 3 }).flatMap((_, i) =>
        Array.from({ length: 3 }).map((_, j) =>
          !(i === 1 && j === 1) ? (
            <Coin
              key={`${i}-${j}`}
              position={[(i - 1) * 2.5, 0, (j - 1) * 2.5]}
            />
          ) : undefined
        )
      )}
    </Floor>
  );
}

interface Props {
  index: number;
}
