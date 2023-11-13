"use client";

import Circles from "./circles";
import IntroContent from "./content";

const ParticlesLogo = () => {
  return (
    <div className="mb-20 sm:mb-0">
      <div className="absolute h-screen w-full">
        <Circles />
      </div>
      <div className="relative z-10 container h-screen flex flex-col justify-end sm:pt-40 pb-20 sm:pb-0 sm:justify-center items-center">
        <IntroContent />
      </div>
    </div>
  );
};

export default ParticlesLogo;
