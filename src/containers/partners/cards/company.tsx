import Icon from '@/components/icon';
import cx from 'classnames';
import PartnersPlaceholderIcon from '@/styles/icons/partners-placeholder.svg?sprite';
import { Company } from '@/types/partner';
import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg?sprite';
import Button from '@/components/button';

const Card = ({ name, image, imageWidth, imageHeight, link, style }: Company) => {
  return (
    <div className="flex min-h-[210px] w-full flex-col items-center justify-between overflow-hidden rounded-[32px] border border-black p-5 pt-10 font-open text-base text-dark-gray duration-700 animate-in fade-in sm:min-h-[280px]">
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
          <Icon icon={PartnersPlaceholderIcon} className="h-9 w-9" />
        )}
      </div>
      <div className="mt-6 flex w-full items-center justify-between">
        <Button
          href={link}
          className="flex w-full items-center justify-between !p-0 font-cardo text-base leading-tight sm:text-[28px]"
        >
          {name}
          <Icon icon={ArrowUpRightIcon} className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
