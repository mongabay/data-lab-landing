import cx from 'classnames';
import PartnersPlaceholderIcon from '@/styles/icons/partners-placeholder.svg';
import { Company } from '@/types/partner';
import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg';

const Card = ({ name, image, imageWidth, imageHeight, link, style }: Company) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex aspect-square w-full flex-col items-center justify-between overflow-hidden rounded-[32px] border border-black p-5 pt-10 font-open text-base text-dark-gray duration-700 animate-in fade-in hover:bg-black/5 sm:min-h-[210px]">
        <div className={cx('transition-color w-full duration-300', !image && 'bg-[#F4F4F4]')}>
          {image ? (
            <img
              src={image}
              width={imageWidth}
              height={imageHeight}
              alt={name}
              style={{ ...style }}
            />
          ) : (
            <PartnersPlaceholderIcon className="h-9 w-9" />
          )}
        </div>
        <div className="mt-6 flex w-full items-center justify-between font-cardo text-base leading-tight sm:w-full sm:text-[28px]">
          {name}
          <ArrowUpRightIcon className="h-4 w-4 place-self-end sm:h-5 sm:w-5" />
        </div>
      </div>
    </a>
  );
};

export default Card;
