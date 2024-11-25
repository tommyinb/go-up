import { Coin } from "./Coin";

export function CoinRing({ width, depth }: Props) {
  return (
    <>
      {Array.from({ length: 3 }).flatMap((_, i) =>
        Array.from({ length: 3 }).map((_, j) =>
          !(i === 1 && j === 1) ? (
            <Coin
              key={`${i}-${j}`}
              position={[((i - 1) * width) / 2, 0, ((j - 1) * depth) / 2]}
            />
          ) : undefined
        )
      )}
    </>
  );
}

interface Props {
  width: number;
  depth: number;
}
