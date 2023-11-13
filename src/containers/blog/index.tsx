"use client";

import cx from "classnames";

import { useEffect, useMemo, useState } from "react";
import Card from "./card";

import type { CardProps } from "./card";
import Button from "@/components/button";

import Icon from "@/components/icon";
import ArrowIcon from "@/styles/icons/blog-arrow.svg?sprite";

type BlogPosts = {
  isLoading: boolean;
  isError: boolean;
  posts: CardProps[];
};

const initialData = {
  isLoading: false,
  isError: false,
  posts: [],
};

const INITIAL_MAX_POSTS = 5;

const Blog = () => {
  const [data, setData] = useState<BlogPosts>(initialData);
  const [maxPosts, setMaxPosts] = useState(INITIAL_MAX_POSTS);

  useEffect(() => {
    const fetchData = async () => {
      setData((prevState) => ({
        isLoading: true,
        isError: false,
        posts: prevState.posts,
      }));

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const posts = await response.json();

        // setData({ isLoading: false, isError: false, posts });
        setData({
          isLoading: false,
          isError: false,
          posts: posts.slice(0, maxPosts).map((post: any) => ({
            title: post.title,
            description: post.body,
            date: new Date().toISOString(),
            image: "/images/card-example.png",
          })),
        });
      } catch (error) {
        setData({ isLoading: false, isError: true, posts: [] });
      }
    };
    fetchData();
  }, [maxPosts]);

  const loadingPosts = useMemo(() => {
    if (data.isLoading) {
      return Array.from({ length: maxPosts - data.posts.length }).fill(0);
    }
    return [];
  }, [data.isLoading, data.posts.length, maxPosts]);

  return (
    <div className="pb-32 border-b border-b-light-gray">
      <div className="bg-primary-green sm:gap-0 gap-6 justify-center flex sm:flex-row flex-col items-center text-white min-h-screen">
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
            className="w-[118px] h-[143px] sm:w-[237px] sm:h-[286px]"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-12 gap-x-5 gap-y-20 sm:gap-y-16 sm:-translate-y-32 -translate-y-24">
          {data.posts?.map((item, index) => (
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
          {loadingPosts.map((item, index) => (
            <div
              key={index}
              className="col-span-4 row-span-3 animate-pulse bg-gray-200"
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          className="bg-white text-dark-gray border border-dark-gray"
          onClick={() => setMaxPosts(maxPosts + 3)}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default Blog;
