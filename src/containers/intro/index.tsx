'use client';

import Circles from './circles';
import IntroContent from './content';

const ParticlesLogo = () => {
  return (
    <div className="bg-primary bg-intro-bg bg-cover bg-center">
      <div className="absolute h-screen w-full">
        <Circles />
      </div>
      <div className="container relative z-10 my-auto flex h-screen items-center pb-20 pt-40 sm:pb-0 sm:pt-20">
        <IntroContent />
      </div>
    </div>
  );
};

export default ParticlesLogo;
