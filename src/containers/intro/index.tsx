'use client';

import Circles from './circles';
import IntroContent from './content';

const ParticlesLogo = () => {
  return (
    <div className="bg-primary bg-intro-bg bg-cover bg-center">
      <div className="absolute h-screen w-full">
        <Circles />
      </div>
      <div className="relative z-10 container my-auto flex h-screen items-center pt-40 pb-20 sm:pt-20 sm:pb-0">
        <IntroContent />
      </div>
    </div>
  );
};

export default ParticlesLogo;
