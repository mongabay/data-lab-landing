"use client";

import Circles from "./circles";
import IntroContent from "./content";

const ParticlesLogo = () => {
  return (
    <div>
      <div className="absolute h-screen w-full">
        <Circles />
      </div>
      <div className="relative z-10 text-black h-screen flex flex-col justify-center items-center">
        <IntroContent />
      </div>
    </div>
  );
};

export default ParticlesLogo;
