import React from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/models/coelm.glb");

// Define model props
type ModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
} & Record<string, unknown>;

export function Model(props: ModelProps) {
  const { scene } = useGLTF("/models/coelm.glb");
  return <primitive object={scene} {...props} />;
}
