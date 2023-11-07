import { NoToneMapping } from "three";
import { Canvas } from "@react-three/fiber";

import Circles from "./circle";
import { COLORS } from "@/constants";

const generic = {
  count: 16,
  radius: 5,
  size: 15,
  startAngle: 0,
  opacity: 0.5,
};

const tools = {
  count: 4,
  radius: 5,
  size: 30,
  startAngle: 0,
  opacity: 1,
};

const ParticlesCanvas = () => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 100 }}
      gl={{ antialias: true, toneMapping: NoToneMapping }}
      linear
    >
      <group>
        <Circles
          count={generic.count}
          size={generic.size}
          color={COLORS[0]}
          radius={generic.radius}
          startAngle={generic.startAngle}
          opacity={generic.opacity}
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
          />
        ))}
      </group>
    </Canvas>
  );
};

export default ParticlesCanvas;
