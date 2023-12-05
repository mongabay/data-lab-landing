'use client';

import cx from 'classnames';

import { useMemo } from 'react';
import Card from './card';

import Button from '@/components/button';

import { useData } from '@/utils';
import Icon from '@/components/icon';
import ArrowIcon from '@/styles/icons/blog-arrow.svg?sprite';

// Number of posts to show initially
const INITIAL_MAX_POSTS = 5;

const Blog = () => {
  const { data: posts, error } = useData();

  const POSTS = useMemo(() => {
    return posts?.slice(0, INITIAL_MAX_POSTS) ?? [];
  }, [posts]);

  return (
    <div className="border-b border-b-light-gray pb-24 sm:pb-32">
      <div className="flex flex-col gap-6  bg-primary-green pb-28 pt-9 text-white sm:min-h-screen sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:pb-0 sm:pt-0">
        <div className="container w-full space-y-3 sm:h-1/2 sm:space-y-8">
          <h2 className="font-cardo text-3.5xl sm:text-6xl">How can you use them?</h2>
          <p className="max-w-md">
            Explore the diverse examples of charts, created with the Mongabay Data Journalism Tools,
            directly in our stories.
          </p>
        </div>
        <div className="sm:absolute sm:right-0 lg:right-auto lg:translate-x-[130%]">
          <Icon
            icon={ArrowIcon}
            className="ml-5 mt-5 h-[117px] w-[98px] sm:ml-0 sm:mt-0 sm:h-[286px] sm:w-[237px]"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid -translate-y-20 gap-x-5 gap-y-20 sm:-translate-y-32 sm:grid-cols-12 sm:gap-y-16">
          {POSTS?.map((item, index) => (
            <div
              key={item.title}
              className={cx({
                'sm:col-span-7 sm:row-span-5': index === 0,
                'sm:col-span-5 sm:row-span-5': index === 1,
                'sm:col-span-4 sm:row-span-3': index > 1,
              })}
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex -translate-y-5 justify-center sm:-translate-y-16">
        <Button
          className={cx('bg-primary-green font-semibold text-white', {
            '-translate-y-20 border  border-white sm:-translate-y-40': !!error,
          })}
          href="https://www.mongabay.com/list/data-lab/"
        >
          Go to Mongabay Data Lab News
        </Button>
      </div>
    </div>
  );
};

export default Blog;
