'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/button';
import { Partner } from '@/types/partner';

import PeopleCard from './cards/people';
import CompanyCard from './cards/company';
import PartnersDetails from './details';

import PEOPLE from './data/people.json';
import COMPANIES from './data/companies.json';

const INITIAL_MAX_PARTNERS = 3;

const Partners = () => {
  const [maxPartners, setMaxPartners] = useState(INITIAL_MAX_PARTNERS);
  const [details, setDetails] = useState<Partner | null>(null);

  const peopleData = useMemo(() => PEOPLE.slice(0, maxPartners), [maxPartners]);

  const handleLoadMore = () => {
    setMaxPartners(PEOPLE.length);
  };

  return (
    <div className="container mx-auto py-20 text-dark-gray">
      <div className="space-y-8">
        <h2 className="max-w-xl font-cardo text-3.5xl sm:text-6xl">People and partner companies</h2>
        <p className="max-w-md">
          Discover our team and trusted partner companies. At the core of our accomplishments are
          the dedicated individuals who bring expertise and commitment to every project.
        </p>
      </div>

      <div className="mt-12 sm:mt-32">
        <div className="mb-5">
          <h3 className="text-sm font-semibold">Companies</h3>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
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
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {peopleData.map((p) => (
            <Button key={p.name} className="!p-0" onClick={() => setDetails(p)}>
              <PeopleCard {...p} />
            </Button>
          ))}
        </div>
      </div>
      {maxPartners < PEOPLE.length && (
        <div className="mt-16 flex justify-center sm:mt-28">
          <Button
            className="border border-dark-gray bg-white text-dark-gray"
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </div>
      )}
      <PartnersDetails details={details} close={() => setDetails(null)} />
    </div>
  );
};
export default Partners;
