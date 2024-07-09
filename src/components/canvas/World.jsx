"use client";

import { Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import Experince from "./Experince";

export default function World() {
  return (
    <Canvas
      style={{ position: "absolute", top: "0" }}
      camera={{ position: [0, 0, 5], fov: 35 }}
    >
      <Sparkles
        position={[0, 0, -1]}
        scale={[10, 10, 3]}
        size={4}
        count={40}
        color={"#a09bcb"}
        far={10}
        speed={1}
      />

      {/* <Rig /> */}

      <Experince />
      <Environment preset="studio" />
    </Canvas>
  );
}

function Rig() {
  useFrame((state, delta) => {
    // Calculate the target camera position based on the pointer's x and y position
    const targetX = state.pointer.x * 0.15; // Adjust this multiplier as needed for the desired horizontal movement
    const targetY = state.pointer.y * 0.15;
    const targetZ = 8 + Math.atan(state.pointer.x * 2);

    // Smoothly move the camera to the target position
    easing.damp3(state.camera.position, [targetX, targetY, 7], 0.5, delta);

    // Make the camera look at a point slightly ahead of its current position to create a smooth look-at behavior
    state.camera.lookAt(
      state.camera.position.x,
      state.camera.position.y * 0.9,
      state.camera.position.z - 4
    );
  });
}
