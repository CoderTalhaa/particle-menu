/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/gem.glb -o src/app/components/canvas/models/Gem.jsx -r public 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useAnimStore from "@/useAnimStore";
import { useExplode } from "../../../../hooks/useExplode";

export function Gem(props) {
  const { nodes, materials } = useGLTF("/models/gem.glb");

  const menu = useAnimStore((state) => state.menu);

  const groupRef = useRef();

  useExplode(groupRef, {
    distance: 20,
    menu: menu,
    Ix: -1.5,
    Iy:-0.9,
    Iz: -0.5,
    Fx: 1.3,
    Fy: 0,
    Fz: -0.9,
  });
  return (
    <group {...props} dispose={null} ref={groupRef}>
      {/* <mesh geometry={nodes.gem.geometry} material={materials.mat9} position={[0.009, 0.443, -0.005]} /> */}
      <mesh
        geometry={nodes.gem_cell.geometry}
        material={materials.mat9}
        position={[0.981, 0.31, 0.601]}
      />
      <mesh
        geometry={nodes.gem_cell001.geometry}
        material={materials.mat9}
        position={[1.186, 0.702, -0.716]}
      />
      <mesh
        geometry={nodes.gem_cell002.geometry}
        material={materials.mat9}
        position={[0.546, 0.311, 1.009]}
      />
      <mesh
        geometry={nodes.gem_cell003.geometry}
        material={materials.mat9}
        position={[-0.695, 0.681, 1.237]}
      />
      <mesh
        geometry={nodes.gem_cell004.geometry}
        material={materials.mat9}
        position={[0.014, 0.681, -1.407]}
      />
      <mesh
        geometry={nodes.gem_cell005.geometry}
        material={materials.mat9}
        position={[-1.225, 0.707, 0.673]}
      />
      <mesh
        geometry={nodes.gem_cell006.geometry}
        material={materials.mat9}
        position={[0.078, -0.127, -0.108]}
      />
      <mesh
        geometry={nodes.gem_cell007.geometry}
        material={materials.mat9}
        position={[-0.996, 0.334, 0.575]}
      />
      <mesh
        geometry={nodes.gem_cell008.geometry}
        material={materials.mat9}
        position={[-1.097, 0.269, -0.006]}
      />
      <mesh
        geometry={nodes.gem_cell009.geometry}
        material={materials.mat9}
        position={[1.17, 0.326, -0.019]}
      />
      <mesh
        geometry={nodes.gem_cell010.geometry}
        material={materials.mat9}
        position={[0.674, 0.707, -1.145]}
      />
      <mesh
        geometry={nodes.gem_cell011.geometry}
        material={materials.mat9}
        position={[0.457, 0.713, 0.81]}
      />
      <mesh
        geometry={nodes.gem_cell012.geometry}
        material={materials.mat9}
        position={[-0.006, 0.731, 0.847]}
      />
      <mesh
        geometry={nodes.gem_cell013.geometry}
        material={materials.mat9}
        position={[0, 0.273, 1.109]}
      />
      <mesh
        geometry={nodes.gem_cell014.geometry}
        material={materials.mat9}
        position={[-0.573, 0.302, -0.976]}
      />
      <mesh
        geometry={nodes.gem_cell015.geometry}
        material={materials.mat9}
        position={[0.067, 0.71, -0.811]}
      />
      <mesh
        geometry={nodes.gem_cell016.geometry}
        material={materials.mat9}
        position={[-0.447, 0.752, 0.803]}
      />
      <mesh
        geometry={nodes.gem_cell017.geometry}
        material={materials.mat9}
        position={[-1.241, 0.701, -0.659]}
      />
      <mesh
        geometry={nodes.gem_cell018.geometry}
        material={materials.mat9}
        position={[-0.707, 0.7, -1.202]}
      />
      <mesh
        geometry={nodes.gem_cell019.geometry}
        material={materials.mat9}
        position={[0.546, 0.288, -0.961]}
      />
      <mesh
        geometry={nodes.gem_cell020.geometry}
        material={materials.mat9}
        position={[1.016, 0.331, -0.599]}
      />
      <mesh
        geometry={nodes.gem_cell021.geometry}
        material={materials.mat9}
        position={[-1.413, 0.689, 0.052]}
      />
      <mesh
        geometry={nodes.gem_cell022.geometry}
        material={materials.mat9}
        position={[-0.001, 0.689, 1.409]}
      />
      <mesh
        geometry={nodes.gem_cell023.geometry}
        material={materials.mat9}
        position={[0.78, 0.709, 0.456]}
      />
      <mesh
        geometry={nodes.gem_cell024.geometry}
        material={materials.mat9}
        position={[-0.99, 0.306, -0.558]}
      />
      <mesh
        geometry={nodes.gem_cell025.geometry}
        material={materials.mat9}
        position={[-0.885, 0.735, 0.027]}
      />
      <mesh
        geometry={nodes.gem_cell026.geometry}
        material={materials.mat9}
        position={[1.204, 0.686, 0.704]}
      />
      <mesh
        geometry={nodes.gem_cell027.geometry}
        material={materials.mat9}
        position={[-0.546, 0.306, 0.997]}
      />
      <mesh
        geometry={nodes.gem_cell028.geometry}
        material={materials.mat9}
        position={[-0.779, 0.741, -0.393]}
      />
      <mesh
        geometry={nodes.gem_cell029.geometry}
        material={materials.mat9}
        position={[-0.742, 0.729, 0.428]}
      />
      <mesh
        geometry={nodes.gem_cell030.geometry}
        material={materials.mat9}
        position={[0.951, 0.726, 0.002]}
      />
      <mesh
        geometry={nodes.gem_cell031.geometry}
        material={materials.mat9}
        position={[0.676, 0.701, 1.229]}
      />
      <mesh
        geometry={nodes.gem_cell032.geometry}
        material={materials.mat9}
        position={[0.045, 0.333, -1.177]}
      />
      <mesh
        geometry={nodes.gem_cell033.geometry}
        material={materials.mat9}
        position={[0.701, 0.723, -0.505]}
      />
      <mesh
        geometry={nodes.gem_cell034.geometry}
        material={materials.mat9}
        position={[1.386, 0.7, 0.002]}
      />
      <mesh
        geometry={nodes.gem_cell035.geometry}
        material={materials.mat9}
        position={[-0.459, 0.707, -0.782]}
      />
    </group>
  );
}

useGLTF.preload("/models/gem.glb");
