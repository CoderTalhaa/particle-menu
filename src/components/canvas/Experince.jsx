import { Float, OrbitControls } from "@react-three/drei";
import React from "react";
import { Isomere } from "./models/Isomere";
import { Brain } from "./models/Brain";
import useAnimStore from "@/useAnimStore";
import { Dil } from "./models/Dil";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Coin } from "./models/Coin";
import { Gem } from "./models/Gem";

export default function Experince() {
  const selectedModel = useAnimStore((state) => state.selectedModel);
  const hover = useAnimStore((state) => state.hover);

  return (
    <>
      <EffectComposer>
        {!hover && (
          <Fluid
            radius={0.03}
            curl={10}
            swirl={5}
            distortion={1}
            force={2}
            pressure={0.94}
            densityDissipation={0.98}
            velocityDissipation={0.99}
            intensity={0.3}
            rainbow={false}
            blend={0}
            showBackground={false}
            fluidColor="#071952"
          />
        )}
        {hover && <Bloom mipmapBlur intensity={1} />}
      </EffectComposer>

      <Float
        speed={1}
        rotationIntensity={0.4}
        floatIntensity={0.1}
        floatingRange={[-0.7, 1]}
      >
        <Isomere scale={[0.9, 0.9, 0.9]} visible={selectedModel === 0} />
        <Dil
          rotation={[0, 10.7, 0]}
          scale={[0.7, 0.7, 0.7]}
          visible={selectedModel === 1}
        />
        <Coin
          rotation={[0.2, 13, 0]}
          scale={[0.6, 0.6, 0.6]}
          visible={selectedModel === 2}
        />
        <Gem
          rotation={[0, 0, 0]}
          scale={[0.6, 0.6, 0.6]}
          visible={selectedModel === 3}
        />
      </Float>

      {/* <OrbitControls /> */}
    </>
  );
}
