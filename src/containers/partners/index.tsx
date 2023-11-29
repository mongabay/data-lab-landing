"use client";

import { useMemo, useState } from "react";
import Button from "@/components/button";
import { Partner } from "@/types/partner";

import PeopleCard from "./cards/people";
import CompanyCard from "./cards/company";
import PartnersDetails from "./details";

import PEOPLE from "./data/people.json";
import COMPANIES from "./data/companies.json";

const INITIAL_MAX_PARTNERS = 3;

const Partners = () => {
  const [maxPartners, setMaxPartners] = useState(INITIAL_MAX_PARTNERS);
  const [details, setDetails] = useState<Partner | null>(null);

  const peopleData = useMemo(() => PEOPLE.slice(0, maxPartners), [maxPartners]);

  const handleLoadMore = () => {
    setMaxPartners(PEOPLE.length);
  };

  return (
    <div className="py-20 container mx-auto text-dark-gray">
      <div className="space-y-8">
        <h2 className="max-w-xl font-cardo text-6xl">
          People and partner companies
        </h2>
        <p className="max-w-md">
          Discover our team and trusted partner companies. At the core of our accomplishments are
          the dedicated individuals who bring expertise and commitment to every project.
        </p>
      </div>

      <div className="mt-32">
        <div className="mb-5">
          <h3 className="font-semibold text-sm">Companies</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {COMPANIES.map((p) => (
            <div key={p.name}>
              <CompanyCard {...p} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <div className="mb-5">
          <h3 className="font-semibold text-sm">People</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {peopleData.map((p) => (
            <Button key={p.name} className="!p-0" onClick={() => setDetails(p)}>
              <PeopleCard {...p} />
            </Button>
          ))}
        </div>
      </div>
      {maxPartners < PEOPLE.length && (
        <div className="flex justify-center mt-28">
          <Button
            className="bg-white text-dark-gray border border-dark-gray"
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
