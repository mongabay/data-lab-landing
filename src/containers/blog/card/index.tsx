import Button from '@/components/button';
import { useMemo } from 'react';

import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg';
import { Article } from '@/types/article';
import classNames from 'classnames';

export type CardProps = Article & {
  index: number;
};

const Card = ({ date, image, title, url, author, index }: CardProps) => {
  const dateText = useMemo(
    () =>
      new Date(date).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    [date],
  );

  return (
    <div className="group space-y-4 font-open text-white">
      <div className="flex items-center justify-center overflow-hidden rounded-[32px]">
        {/* Feed image as an <img> (not an inline CSS url()), stacked as: primary bg <- image (lighten) <- white 20% (overlay), all desaturated */}
        <div
          className={classNames(
            'relative aspect-video min-h-full w-full max-w-full bg-primary grayscale-[90%]',
            index === 0 ? 'md:min-h-[350px]' : 'md:min-h-[195px]',
          )}
        >
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center mix-blend-lighten"
          />
          <div aria-hidden className="absolute inset-0 bg-white/20 mix-blend-overlay" />
        </div>
        <Button
          className="absolute hidden bg-white text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 focus-within:opacity-100 sm:block"
          href={url}
        >
          <>
            Go to article
            <ArrowUpRightIcon className="ml-3 inline-block h-3 w-3 fill-primary stroke-primary" />
          </>
        </Button>
      </div>
      <a
        className="block font-cardo text-xl leading-tight sm:text-[28px]"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {title}
      </a>
      <p className="font-open text-xs font-normal text-white uppercase sm:leading-[14.40px]">
        {dateText} <span className="ml-3">BY</span>
        {'  '}
        <span className="leading-none font-bold uppercase">{author}</span>
      </p>
    </div>
  );
};

export default Card;
