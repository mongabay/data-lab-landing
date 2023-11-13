"use client";

import { useEffect, useMemo, useState } from "react";
import Button from "@/components/button";
import { Partner } from "@/types/partner";

import Card from "./card";
import PartnersDetails from "./details";

type PartnersData = {
  isLoading: boolean;
  isError: boolean;
  posts: Partner[];
};

const initialData = {
  isLoading: false,
  isError: false,
  posts: [],
};

const INITIAL_MAX_PARTNERS = 6;

const Partners = () => {
  const [data, setData] = useState<PartnersData>(initialData);
  const [maxPartners, setMaxPartners] = useState(INITIAL_MAX_PARTNERS);
  const [details, setDetails] = useState<Partner | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setData((prevState) => ({
        isLoading: true,
        isError: false,
        posts: prevState.posts,
      }));

      try {
        // MOCKUP
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        const postsResponse = await response.json();
        const posts = postsResponse.slice(0, maxPartners).map((post: any) => ({
          name: post.name.split(" ").slice(0, 2).join(" "),
          role: post.body.split(" ")[0],
          company: post.name.split(" ").slice(2, 4).join(" "),
          image: "",
          description: post.body,
        }));

        setData({
          isLoading: false,
          isError: false,
          posts,
        });
        // MOCKUP

        // REAL
        // setData({ isLoading: false, isError: false, posts });
      } catch (error) {
        setData({ isLoading: false, isError: true, posts: [] });
      }
    };
    fetchData();
  }, [maxPartners]);

  const loadingPartners = useMemo(() => {
    if (data.isLoading) {
      return Array.from({ length: maxPartners - data.posts.length }).fill(0);
    }
    return [];
  }, [data.isLoading, data.posts.length, maxPartners]);

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
        <div className="grid sm:grid-cols-3 gap-y-28">
          {data.posts.map((post) => (
            <div
              role="button"
              key={post.name}
              className="col-span-1 flex justify-center"
              onClick={() => setDetails(post)}
            >
              <Card {...post} />
            </div>
          ))}
          {loadingPartners.map((item, index) => (
            <div
              key={index}
              className="col-span-1 flex justify-center rounded-full animate-pulse bg-gray-200"
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-28">
        <Button
          className="bg-white text-dark-gray border border-dark-gray"
          onClick={() => setMaxPartners(maxPartners + 3)}
        >
          Load more
        </Button>
      </div>
      <PartnersDetails details={details} close={() => setDetails(null)} />
    </div>
  );
};
export default Partners;
