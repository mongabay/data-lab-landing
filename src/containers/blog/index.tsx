'use client';

import cx from 'classnames';

import { useMemo } from 'react';
import Card from './card';

import Button from '@/components/button';

import { useData } from '@/utils';
import Icon from '@/components/icon';
import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg?sprite';

import { menuLinks } from '@/constants';

// Number of posts to show initially
const INITIAL_MAX_POSTS = 5;

const Blog = () => {
  const { data: posts, error } = useData();

  const POSTS = useMemo(() => {
    return posts?.slice(0, INITIAL_MAX_POSTS) ?? [];
  }, [posts]);

  return (
    <div className="bg-blog-bg bg-cover bg-center pb-24 sm:pb-32 ">
      <div className="inline-flex w-full flex-col items-start justify-center gap-[60px] bg-secondary py-5">
        <div
          id={menuLinks[1].link.replace('#', '')}
          className="container font-open text-3xl font-light text-black sm:text-[56px] sm:leading-[72px]"
        >
          <h2>Data Journalism</h2>
        </div>
      </div>

      <div className="container my-20 w-full space-y-3 sm:my-[127px] sm:h-1/2 sm:space-y-8">
        <p className="text-pretty font-open text-lg font-light text-secondary sm:text-[32px] sm:leading-[44px]">
          The Mongabay Data Studio specializes in creating accurate stories that distill complexity
          and inform decision making by connecting the dots between science, journalism and
          technology.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-12 sm:gap-y-20">
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
      <div className="container mt-20 flex justify-center">
        <Button
          className={cx(
            'flex w-full items-center justify-center bg-white px-8 py-3 font-semibold text-primary sm:w-auto',
            {
              '-translate-y-20 border border-white text-center sm:-translate-y-40': !!error,
            },
          )}
          href="https://www.mongabay.com/list/mongabay-data-studio/"
        >
          Explore Data Stories{' '}
          <Icon className="ml-3 inline-block h-4 w-4" icon={ArrowUpRightIcon} />
        </Button>
      </div>
    </div>
  );
};

export default Blog;
