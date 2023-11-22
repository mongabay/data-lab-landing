"use client";

import { useEffect, useMemo, useRef } from "react";

import { extend, ReactThreeFiber, useFrame } from "@react-three/fiber";
import { Color } from "three";

import CircleMaterial, { CircleMaterialProps } from "./material";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      circleMaterial: ReactThreeFiber.Object3DNode<
        CircleMaterialProps,
        typeof CircleMaterial
      >;
    }
  }
}
extend({ CircleMaterial });

export interface CirclesProps {
  p: {
    id: number;
    x: number;
    y: number;
    z: number;
  };
  color: string;
  size: number;
  noise: number;
  step: number;
  opacity: number;
}

const Circle = ({ p, size, color, noise, step, opacity }: CirclesProps) => {
  const DURATION = 500;

  const meshRef = useRef(null);
  const materialRef = useRef<any>(null);

  const prevPos = useRef(p);
  const prevStep = useRef(step);
  const prevVelocity = useRef([0, 0]);
  const prevNoise = useRef(noise);

  const COLOR = new Color(color).convertLinearToSRGB();

  const velocity = useMemo(() => {
    const random1 = Math.random();
    const random2 = Math.random();

    if (!prevVelocity.current) {
      prevVelocity.current = [random1, random2];
    }
    return [random1, random2];
  }, []);

  useFrame(() => {
    if (!materialRef.current) return;

    if (step !== materialRef.current.uStep) {
      materialRef.current.uPrevStep = step;
      materialRef.current.uPrevPos = [p.x, p.y, p.z];
      materialRef.current.uProgress = 0;
    }

    materialRef.current.uStep = step;
    materialRef.current.uCurrentPos = [p.x, p.y, p.z];
    materialRef.current.uTime = performance.now() / 1000;

    if (step !== materialRef.current.uPrevStep) {
      materialRef.current.uProgress =
        materialRef.current.uProgress + 0.01 / (DURATION / 1000);
    }

    if (materialRef.current.uProgress > 1) {
      materialRef.current.uPrevPos = [p.x, p.y, p.z];
      materialRef.current.uPrevStep = step;
      materialRef.current.uProgress = 0;
      prevStep.current = step;
      prevNoise.current = noise;
      prevVelocity.current = velocity;
    }
  });

  useEffect(() => {
    if (materialRef.current) materialRef.current.uProgress = 0;
  }, [step]);

  return (
    <mesh ref={meshRef} key={`${p.id}`}>
      <circleGeometry args={[size / 100, 32]} />

      <circleMaterial
        ref={materialRef}
        // Position
        uPrevPos={prevPos.current}
        uCurrentPos={[p.x, p.y, p.z]}
        // Color
        uRadius={size / 100}
        uColor={COLOR}
        uOpacity={opacity}
        // Step
        uStep={step}
        uPrevStep={prevStep.current}
        // Noise
        uNoise={noise}
        uPrevNoise={prevNoise.current}
        // Time
        uTime={0}
        // Animation
        uProgress={0}
        uStartTime={0}
        uDuration={DURATION / 1000}
        // Velocity
        uVelocity={velocity}
        uPrevVelocity={prevVelocity.current}
        // Misc
        transparent
      />
    </mesh>
  );
};

export default Circle;
