import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { MathUtils, Object3D } from 'three';

export type MousePosition = { x: number; y: number };

interface Props {
  mousePosition: MousePosition;
}

export const FiligreeModel = ({ mousePosition }: Props) => {
  const { scene } = useGLTF('/models/animation.glb');
  const modelRef = useRef<Object3D>();

  // Apply rotation based on mouse movement
  useFrame(() => {
    if (modelRef.current) {
      // Y-axis (horizontal) rotation with reduced sensitivity
      modelRef.current.rotation.y = mousePosition.x * Math.PI * 0.05;

      // X-axis (vertical) rotation with very minimal backward swivel and restricted forward tilt
      modelRef.current.rotation.x = MathUtils.clamp(
        mousePosition.y * Math.PI * 0.05,
        -Math.PI / 12,
        Math.PI / 12
      );
    }
  });

  return <primitive rotation={[0, 0, 0]} object={scene} ref={modelRef} scale={[1.3, 1.3, 1.3]} />;
};
