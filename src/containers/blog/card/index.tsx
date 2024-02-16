import Button from '@/components/button';
import Icon from '@/components/icon';
import { useMemo } from 'react';

import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg?sprite';
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
        <div
          className={classNames(
            'aspect-video min-h-full w-full max-w-full object-cover',
            index === 0 ? 'md:min-h-[350px]' : 'md:min-h-[195px]',
          )}
          style={{
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), url('${image}'), #0F362E 50%`,
            filter: 'grayscale(90%)',
            backgroundBlendMode: 'overlay, lighten, normal',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <Button
          className="absolute hidden bg-white text-primary opacity-0 transition-all duration-300 focus-within:opacity-100 group-hover:opacity-100 sm:block"
          href={url}
        >
          <>
            Go to article
            <Icon
              className="ml-3 inline-block h-3 w-3  fill-primary stroke-primary"
              icon={ArrowUpRightIcon}
            />
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
      <p className="font-open text-xs font-normal uppercase text-white sm:leading-[14.40px]">
        {dateText} <span className="ml-3">BY</span>
        {'  '}
        <span className="font-bold uppercase leading-none">{author}</span>
      </p>
      {/* <Button
        target="_blank"
        className="block bg-white pl-0 font-semibold text-dark-gray underline transition-all duration-300 sm:hidden"
        href={url}
      >
        <>
          Go to article
          <Icon className="ml-3 inline-block h-2.5 w-2.5" icon={ArrowUpRightIcon} />
        </>
      </Button> */}
    </div>
  );
};

export default Card;
