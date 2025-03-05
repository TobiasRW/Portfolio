"use client";

import { Canvas } from "@react-three/fiber";
import { Model } from "./model";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

export default function Scene() {
  return (
    <div className="h-[300px] md:h-[400px] lg:h-[500px]">
      <Canvas>
        <Environment preset="city" />
        <directionalLight position={[5, -5, 5]} intensity={4} />
        <PerspectiveCamera makeDefault position={[0, 5, 1.8]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          target={[0.247, 4.8, 1.261]}
        />
        <Model position={[0, 0, 0]} />
        <ContactShadows />
      </Canvas>
    </div>
  );
}
