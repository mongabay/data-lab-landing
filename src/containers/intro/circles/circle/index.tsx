"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { useThree } from "@react-three/fiber";

import { STEPS } from "../constants";

import Circle from "./item";

export interface CirclesProps {
  count: number;
  radius: number;
  color: number;
  size: number;
  startAngle?: number;
  opacity: number;
}

const Y_OFFSET = 1.5;

const Circles = ({
  count,
  radius,
  color,
  size,
  startAngle,
  opacity,
}: CirclesProps) => {
  const [step, setStep] = useState(0);
  const { width, height } = useThree((state) => state.viewport);
  const { gl } = useThree();
  const [isStatic, setIsStatic] = useState(false);

  const getScroll = useCallback(
    (ev: any) => {
      const scrollY = ev?.currentTarget?.scrollY;
      const step = scrollY > 10 ? 1 : 0;

      setStep(step);
      setIsStatic(scrollY > gl.domElement.clientHeight);
    },
    [gl.domElement.clientHeight]
  );

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", getScroll);
    }
    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, [getScroll]);

  if (isStatic) return null;

  return (
    <>
      {STEP.positions.map((p: any) => (
        <Circle
          key={`${p.id}`}
          p={p}
          color={color}
          size={size}
          noise={STEP.noise}
          step={step}
          opacity={opacity}
        />
      ))}
    </>
  );
};

export default Circles;
