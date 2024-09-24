import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import gsap from 'gsap-trial';
import React, { Suspense, useEffect, useRef } from 'react';
import { EquirectangularReflectionMapping, Texture, TextureLoader } from 'three';

import { FiligreeModel, MousePosition } from './FiligreeModel';

interface MapProps {
  texturePath: string;
}

const EnvironmentMap = ({ texturePath }: MapProps) => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(texturePath, (texture: Texture) => {
      const envMap = texture;
      envMap.mapping = EquirectangularReflectionMapping;
      scene.environment = envMap;
    });
  }, [scene, texturePath]);

  return null;
};

interface Props {
  mousePosition: MousePosition;
}

export const Filigree = ({ mousePosition }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 2
      }
    );
  }, []);

  return (
    <Canvas ref={ref}>
      <EnvironmentMap texturePath="/textures/lighting.png" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <FiligreeModel mousePosition={mousePosition} />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
};
