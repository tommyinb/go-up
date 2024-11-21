import { Bloom, EffectComposer } from "@react-three/postprocessing";

export function Effects() {
  return (
    <EffectComposer>
      <Bloom mipmapBlur intensity={0.1} />
    </EffectComposer>
  );
}
