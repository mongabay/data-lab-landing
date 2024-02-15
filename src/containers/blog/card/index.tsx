import Button from '@/components/button';
import Icon from '@/components/icon';
import { useMemo } from 'react';

import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg?sprite';
import { Article } from '@/types/article';

export type CardProps = Article;

const Card = ({ date, image, title, url, author }: CardProps) => {
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
        <img
          className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-75"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
        <Button
          className="absolute hidden bg-white text-dark-gray opacity-0 transition-all duration-300 focus-within:opacity-100 group-hover:opacity-100 sm:block"
          href={url}
        >
          <>
            Go to article
            <Icon className="ml-3 inline-block h-2.5 w-2.5" icon={ArrowUpRightIcon} />
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
        {dateText} BY <span className="ml-2 font-bold uppercase leading-none">{author}</span>
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
