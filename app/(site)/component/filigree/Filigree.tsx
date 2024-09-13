import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
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

export const Filigree = ({ mousePosition }: Props) => (
  <Canvas>
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
