import cx from "classnames";

import { useMemo } from "react";
import Card from "./card";

import type { CardProps } from "./card";
import Button from "@/components/button";

import Icon from "@/components/icon";
import ArrowIcon from "@/styles/icons/blog-arrow.svg?sprite";

// Number of posts to show initially
const INITIAL_MAX_POSTS = 5;

type BlogProps = {
  posts: {
    data: CardProps[];
    isError: boolean;
  };
};

const Blog = ({ posts }: BlogProps) => {
  const POSTS = useMemo(() => {
    return posts.data.slice(0, INITIAL_MAX_POSTS);
  }, [posts]);

  return (
    <div className="pb-24 sm:pb-32 border-b border-b-light-gray">
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
      <div className="-translate-y-5 sm:-translate-y-16 flex justify-center">
        <Button
          className={cx(
            "bg-primary-green text-white font-semibold",
            {
              "-translate-y-20 sm:-translate-y-40  border border-white":
                posts.isError,
            }
          )}
          href="https://www.mongabay.com/list/data-lab/"
        >
          Go to Mongabay Data Lab News
        </Button>
      </div>
    </div>
  );
};

export default Blog;
