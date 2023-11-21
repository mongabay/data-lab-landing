import Button from "@/components/button";
import Icon from "@/components/icon";
import Image from "next/image";
import { useMemo } from "react";

import ArrowUpRightIcon from "@/styles/icons/arrow-up-right.svg?sprite";
import { Article } from "@/types/article";

export type CardProps = Article;

const Card = ({ date, description, image, title, url }: CardProps) => {
  const dateText = useMemo(
    () =>
      new Date(date).toLocaleDateString("en-UK", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    [date]
  );

  return (
    <div className="space-y-3 text-dark-gray font-open">
      <div className="pb-5 group flex justify-center items-center">
        <Image
          className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300 ease-in-out"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
        <Button className="hidden sm:block transition-all duration-300 absolute group-hover:opacity-100 opacity-0 bg-white text-dark-gray">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Go to article
            <Icon
              className="inline-block w-2.5 h-2.5 ml-3"
              icon={ArrowUpRightIcon}
            />
          </a>
        </Button>
      </div>
      <p className="text-medium-gray font-open text-base">{dateText}</p>
      <h3 className="text-2xl sm:text-[28px] font-cardo leading-tight">
        {title}
      </h3>
      <div
        className="leading-relaxed text-xs sm:text-base  line-clamp-3"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Button className="sm:hidden block px-0 transition-all duration-300 bg-white text-dark-gray">
        <a
          className="underline text-xs font-semibold"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to article
          <Icon
            className="inline-block w-2.5 h-2.5 ml-3"
            icon={ArrowUpRightIcon}
          />
        </a>
      </Button>
    </div>
  );
};

export default Card;
