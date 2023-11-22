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
    let nextMaxPartners = maxPartners + 3;
    if (nextMaxPartners > PEOPLE.length) {
      nextMaxPartners = PEOPLE.length;
    }
    setMaxPartners(nextMaxPartners);
  };

  return (
    <div className="py-20 container mx-auto">
      <div className="space-y-8">
        <h2 className="max-w-xl font-cardo text-dark-gray text-6xl">
          People and partner companies
        </h2>
        <p className="max-w-md">
          Behind the Mongabay tools there is lorem ipsum dolor sit amet
          consectetur. Dictum blandit morbi in viverra purus.
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
        <div className="grid sm:grid-cols-3 gap-y-14 gap-x-5">
          {peopleData.map((p) => (
            <div role="button" key={p.name} onClick={() => setDetails(p)}>
              <span className="sr-only">click to more details</span>
              <PeopleCard {...p} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-28">
        <Button
          className="bg-white text-dark-gray border border-dark-gray"
          onClick={handleLoadMore}
          disabled={maxPartners >= PEOPLE.length}
        >
          Load more
        </Button>
      </div>
      <PartnersDetails details={details} close={() => setDetails(null)} />
    </div>
  );
};
export default Partners;
