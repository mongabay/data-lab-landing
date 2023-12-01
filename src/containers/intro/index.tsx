'use client';

import Circles from './circles';
import IntroContent from './content';

const ParticlesLogo = () => {
  return (
    <div className="mb-20 sm:mb-0">
      <div className="absolute h-screen w-full">
        <Circles />
      </div>
      <div className="container relative z-10 flex h-screen flex-col items-center justify-center pb-20 pt-40 sm:pb-0 sm:pt-20">
        <IntroContent />
      </div>
    </div>
  );
};

export default ParticlesLogo;
