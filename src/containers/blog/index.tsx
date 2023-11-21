"use client";

import cx from "classnames";

import { useMemo, useState } from "react";
import Card from "./card";

import type { CardProps } from "./card";
import Button from "@/components/button";

import Icon from "@/components/icon";
import ArrowIcon from "@/styles/icons/blog-arrow.svg?sprite";

// Number of posts to show initially
const INITIAL_MAX_POSTS = 5;
// Max number of posts to load (initial max posts + 3 posts by row * 3 rows)
const MAX_POSTS = INITIAL_MAX_POSTS + 3 * 2;

type BlogProps = {
  posts: {
    data: CardProps[];
    isError: boolean;
  };
};

const Blog = ({ posts }: BlogProps) => {
  const [maxPosts, setMaxPosts] = useState(INITIAL_MAX_POSTS);

  const loadMore = maxPosts < MAX_POSTS && !posts.isError;

  const POSTS = useMemo(() => {
    return posts.data.slice(0, maxPosts);
  }, [posts, maxPosts]);

  const handleClickMore = () => {
    if (loadMore) {
      setMaxPosts(maxPosts + 3);
    }
  };

  return (
    <div className="pb-32border-b border-b-light-gray">
      <div className="bg-primary-green pt-9 sm:pt-0  sm:gap-0 gap-6 sm:justify-center flex sm:flex-row flex-col sm:items-center text-white sm:min-h-screen pb-28 sm:pb-0">
        <div className="container w-full sm:h-1/2 space-y-8">
          <h2 className="text-5xl sm:text-6xl font-cardo">
            How can you use them?
          </h2>
          <p className="max-w-md">
            Explore the diverse examples of charts, created with the Mongabay
            Charts Tool, directly in our stories.
          </p>
        </div>
        <div className="sm:absolute sm:translate-x-[130%]">
          <Icon
            icon={ArrowIcon}
            className="w-[98px] h-[117px] mt-5 ml-5 sm:ml-0 sm:mt-0 sm:w-[237px] sm:h-[286px]"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-12 gap-x-5 gap-y-20 sm:gap-y-16 sm:-translate-y-32 -translate-y-20">
          {POSTS?.map((item, index) => (
            <div
              key={item.title}
              className={cx({
                "sm:col-span-7 sm:row-span-5": index === 0,
                "sm:col-span-5 sm:row-span-5": index === 1,
                "sm:col-span-4 sm:row-span-3": index > 1,
              })}
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          className={cx(
            maxPosts < MAX_POSTS
              ? "bg-white text-dark-gray border border-dark-gray"
              : "bg-primary-green text-white",
            {
              "-translate-y-20 sm:-translate-y-40  border border-white":
                posts.isError,
            }
          )}
          href={
            !loadMore ? "https://www.mongabay.com/list/data-lab/" : undefined
          }
          onClick={handleClickMore}
        >
          {maxPosts < MAX_POSTS && !posts.isError
            ? "Load more"
            : "Go to Mongabay Data Lab News"}
        </Button>
      </div>
    </div>
  );
};

export default Blog;
