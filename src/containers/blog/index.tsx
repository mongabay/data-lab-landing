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
    <div className="bg-blog-bg bg-cover bg-center">
      <div className="sticky top-0 z-50 flex w-full flex-col items-start justify-center gap-[60px] bg-secondary py-5">
        <div
          id={menuLinks[1].link.replace('#', '')}
          className="container font-open text-3xl font-light text-black sm:text-[56px] sm:leading-[72px]"
        >
          <h2>Data Journalism</h2>
        </div>
      </div>

      <div className="container pb-20 sm:pb-[127px]">
        <div className="my-20  w-full max-w-[680px] space-y-3 sm:my-[127px] sm:h-1/2 sm:space-y-8">
          <p className="text-pretty font-open text-2xl font-light leading-[32px] text-secondary sm:text-[32px] sm:leading-[44px]">
            The Mongabay Data Studio specializes in creating accurate stories that distill
            complexity and inform decision making by connecting the dots between science, journalism
            and technology.
          </p>
        </div>
        <div className="mx-auto">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-3 md:gap-y-20">
            {POSTS?.map((item, index) => (
              <div
                key={item.title}
                className={cx({
                  'md:col-span-2': index === 0,
                  'md:col-span-1': index > 0,
                })}
              >
                <Card {...item} index={index} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <Button
            className={cx(
              'bg-white text-primary transition-colors duration-300 hover:bg-[#E6F1EF]',
              {
                '-translate-y-20 border border-white sm:-translate-y-40': !!error,
              },
            )}
            href="https://www.mongabay.com/list/data-lab/"
          >
            Explore Data Stories{' '}
            <Icon
              className="ml-8 inline-block h-4 w-4 fill-primary stroke-primary"
              icon={ArrowUpRightIcon}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
