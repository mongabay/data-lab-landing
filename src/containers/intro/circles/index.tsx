"use client";

import { Group, NoToneMapping, Object3DEventMap } from "three";
import { Canvas } from "@react-three/fiber";

import Circles from "./circle";
import { COLORS } from "@/constants";
import { useEffect, useRef, useState } from "react";

const generic = {
  count: 16,
  radius: 90,
  size: 2,
  startAngle: 30,
  opacity: 0.5,
};

const tools = {
  count: 4,
  radius: 90,
  size: 3,
  startAngle: 30,
  opacity: 1,
};

const ParticlesCanvas = () => {
  const [step, setStep] = useState(0);
  const [isStatic, setIsStatic] = useState(false);

  const ref = useRef<Group<Object3DEventMap>>(null);

  useEffect(() => {
    const onScroll = (ev: any) => {
      // Trigger animation by scroll
      // const scrollY = ev?.currentTarget?.scrollY;
      // const step = scrollY > 10 ? 1 : 0;
      // setStep(step);

      // Disable animation if is not into view
      if (ev?.currentTarget?.scrollY > ev?.currentTarget?.innerHeight) {
        setIsStatic(true);
      } else {
        setIsStatic(false);
      }
    };
    // Trigger animation by timeout
    const trigger = setTimeout(() => setStep(1), 1000);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(trigger);
    };
  }, []);

  return (
    <Canvas
      orthographic
      camera={{ zoom: 100 }}
      gl={{ antialias: true, toneMapping: NoToneMapping }}
      linear
    >
      <group ref={ref}>
        <Circles
          count={generic.count}
          size={generic.size}
          color={COLORS[0]}
          radius={generic.radius}
          startAngle={generic.startAngle}
          opacity={generic.opacity}
          step={step}
          isStatic={isStatic}
        />
        {[...Array(tools.count)].map((_, i) => (
          <Circles
            key={i}
            count={1}
            size={tools.size}
            color={COLORS[i]}
            radius={tools.radius}
            startAngle={tools.startAngle}
            opacity={tools.opacity}
            step={step}
            isStatic={isStatic}
          />
        ))}
      </group>
    </Canvas>
  );
};

export default ParticlesCanvas;
