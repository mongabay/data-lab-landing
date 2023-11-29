"use client";

import Circles from "./circles";
import IntroContent from "./content";

const ParticlesLogo = () => {
  return (
    <div className="mb-20 sm:mb-0">
      <div className="absolute h-screen w-full">
        <Circles />
      </div>
      <div className="relative z-10 container h-screen flex flex-col pt-40 sm:pt-0 pb-20 sm:pb-0 justify-center items-center">
        <IntroContent />
      </div>
    </div>
  );
};

export default ParticlesLogo;
