import { useCallback, useState } from "react";
import { Coin } from "../stage2/Coin";

export function Floor9Ring() {
  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  return (
    <>
      <Coin position={[-4, 0, 0]} onPress={addCount} />
      <Coin position={[4, 0, 0]} onPress={addCount} />
      <Coin position={[0, 0, 4]} onPress={addCount} />
      <Coin position={[0, 0, -4]} onPress={addCount} />

      {count >= 4 && (
        <>
          <Coin position={[-4, 0, -2]} onPress={addCount} />
          <Coin position={[4, 0, 2]} onPress={addCount} />
          <Coin position={[-2, 0, 4]} onPress={addCount} />
          <Coin position={[2, 0, -4]} onPress={addCount} />
        </>
      )}

      {count >= 8 && (
        <>
          <Coin position={[-4, 0, -4]} onPress={addCount} />
          <Coin position={[4, 0, 4]} onPress={addCount} />
          <Coin position={[-4, 0, 4]} onPress={addCount} />
          <Coin position={[4, 0, -4]} onPress={addCount} />
        </>
      )}

      {count >= 12 && (
        <>
          <Coin position={[-2, 0, -4]} onPress={addCount} />
          <Coin position={[2, 0, 4]} onPress={addCount} />
          <Coin position={[-4, 0, 2]} onPress={addCount} />
          <Coin position={[4, 0, -2]} onPress={addCount} />
        </>
      )}
    </>
  );
}
