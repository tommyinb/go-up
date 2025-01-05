import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import handFile from "../../players/hand.glb";
import buttonFile from "./button.glb";
import coinFile from "./coin.glb";
import prizeFile from "./prize.glb";

export function usePreload() {
  useEffect(() => {
    useGLTF.preload(handFile);
    useGLTF.preload(buttonFile);
    useGLTF.preload(coinFile);
    useGLTF.preload(prizeFile);
  }, []);
}
