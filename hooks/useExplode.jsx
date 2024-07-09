import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect } from "react";
import useAnimStore from "@/useAnimStore";

import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const useExplode = (groupRef, { distance = 50, menu,Ix,Iy,Iz,Fx,Fy,Fz }) => {
  const hover = useAnimStore((state) => state.hover);

  useEffect(() => {
    if (!groupRef.current) return;

    const groupWorldPosition = new THREE.Vector3();
    groupRef.current.getWorldPosition(groupWorldPosition);

    groupRef.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);

      mesh.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(distance));
    });
  }, [groupRef]);

  useEffect(() => {
    if (!groupRef.current) return;

    if (menu) {
      groupRef.current.children.forEach((mesh) => {
        gsap.to(mesh.position, {
          x: mesh.targetPosition.x,
          y: mesh.targetPosition.y,
          z: mesh.targetPosition.z,
          duration: 1,
        });
      });
      gsap.to(groupRef.current.position, {
        x: Fx,
        y: Fy,
        z: Fz,
        duration: 1,
        delay: 0.5,
      });
      groupRef.current.children.forEach((mesh) => {
        gsap.to(mesh.position, {
          x: mesh.originalPosition.x,
          y: mesh.originalPosition.y,
          z: mesh.originalPosition.z,
          duration: 1,
          delay: 1,
        });
      });
    } else {
      groupRef.current.children.forEach((mesh) => {
        gsap.to(mesh.position, {
          x: mesh.targetPosition.x,
          y: mesh.targetPosition.y,
          z: mesh.targetPosition.z,
          duration: 1,
        });
      });
      gsap.to(groupRef.current.position, {
        x: Ix,
        y: Iy,
        z: Iz,
        duration: 1,
      });
      groupRef.current.children.forEach((mesh) => {
        gsap.to(mesh.position, {
          x: mesh.originalPosition.x,
          y: mesh.originalPosition.y,
          z: mesh.originalPosition.z,
          duration: 1,
          delay: 1,
        });
      });
    }
  }, [menu]);

  // useEffect(() => {
  //   gsap.to(groupRef.current.scale, {
  //     x: 0.01,
  //     y: 0.01,
  //     z: 0.01,
  //     duration: 1,
  //   });
  // }, [hover]);
};
