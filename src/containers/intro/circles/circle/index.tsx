"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { useThree } from "@react-three/fiber";

import { STEPS } from "../constants";

import Circle from "./item";

export interface CirclesProps {
  count: number;
  radius: number;
  color: string;
  size: number;
  startAngle?: number;
  opacity: number;
  step: number;
  isStatic: boolean;
}

const Y_OFFSET = 1.5;

const Circles = ({
  count,
  radius,
  color,
  size,
  startAngle,
  opacity,
  step,
  isStatic,
}: CirclesProps) => {
  const { width, height } = useThree((state) => state.viewport);
  const { gl } = useThree();

  const STEP = useMemo(() => {
    const { getPositions, getNoise, getAnimations } = STEPS.find(
      (s) => s.id === step
    ) as any;
    return {
      positions: getPositions({
        count,
        radius,
        startAngle,
        width,
        height,
        yOffset: Y_OFFSET,
      }),
      noise: getNoise(),
      animations: getAnimations(),
    };
  }, [count, height, radius, startAngle, step, width]);

  const SIZE = useMemo(() => {
    const w = gl.domElement.clientWidth;
    console.log(w);
    if (w < 768) return 0.03 * w * size;
    if (w < 1024) return 0.02 * w * size;
    return w * 0.01 * size;
  }, [gl.domElement.clientWidth, size]);

  if (isStatic) return null;

  return (
    <>
      {STEP.positions.map((p: any) => (
        <Circle
          key={`${p.id}`}
          p={p}
          color={color}
          size={SIZE}
          noise={STEP.noise}
          step={step}
          opacity={opacity}
        />
      ))}
    </>
  );
};

export default Circles;
