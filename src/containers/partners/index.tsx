'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/button';
import { Partner } from '@/types/partner';

import PeopleCard from './cards/people';
import CompanyCard from './cards/company';
import PartnersDetails from './details';

import PEOPLE from './data/people.json';
import COMPANIES from './data/companies.json';
import { menuLinks } from '@/constants';

const INITIAL_MAX_PARTNERS = 3;

const Partners = () => {
  const [maxPartners, setMaxPartners] = useState(INITIAL_MAX_PARTNERS);
  const [details, setDetails] = useState<Partner | null>(null);

  const peopleData = useMemo(() => PEOPLE.slice(0, maxPartners), [maxPartners]);

  const handleLoadMore = () => {
    setMaxPartners(PEOPLE.length);
  };

  return (
    <div className="text-dark-gray">
      <div className="sticky top-0 z-50 flex w-full flex-col items-start justify-center gap-[60px] bg-black py-5">
        <div
          id={menuLinks[2].link.replace('#', '')}
          className="container font-open text-[32px] font-light text-white sm:text-[56px] sm:leading-[72px]"
        >
          <h2>People and Partner Companies</h2>
        </div>
      </div>
      <div className="container py-20 sm:py-[127px]">
        <div>
          <p className="max-w-[680px] font-open text-2xl font-light text-black sm:text-[32px] sm:leading-[44px]">
            Mongabay Data Studio connects a global network of journalists, technologists,
            researchers and designers with leading environmental data platforms who work in
            collaboration to gather reliable information from the most remote corners of the world.
          </p>
        </div>

        <div className="mt-12 sm:mt-32">
          <div className="mb-5">
            <h3 className="text-sm font-semibold">Companies</h3>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {COMPANIES.map((p) => (
              <div key={p.name}>
                <CompanyCard {...p} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 sm:mt-32">
          <div className="mb-5">
            <h3 className="text-sm font-semibold">People</h3>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {peopleData.map((p) => (
              <button key={p.name} className="w-full !p-0" onClick={() => setDetails(p)}>
                <PeopleCard {...p} />
              </button>
            ))}
          </div>
        </div>
        {maxPartners < PEOPLE.length && (
          <div className="mt-16 flex justify-center sm:mt-28">
            <Button
              className="border border-dark-gray bg-white text-dark-gray transition-colors duration-300 hover:bg-[#E6F1EF]"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </div>
        )}
        <PartnersDetails details={details} close={() => setDetails(null)} />
      </div>
    </div>
  );
};
export default Partners;
