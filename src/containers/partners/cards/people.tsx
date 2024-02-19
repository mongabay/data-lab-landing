import cx from 'classnames';
import PartnersPlaceholderIcon from '@/styles/icons/partners-placeholder.svg';
import { Partner } from '@/types/partner';

const PartnerCard = ({ name, image, role, company }: Partner) => {
  return (
    <div className="flex aspect-square  h-full w-full flex-col items-center justify-center overflow-hidden  rounded-[32px] border border-black p-3 font-open text-base text-dark-gray duration-700 animate-in fade-in sm:justify-between sm:p-6">
      <div
        className={cx(
          'transition-color flex w-full items-center justify-center duration-300',
          !image && 'bg-[#F4F4F4]',
        )}
      >
        {image ? (
          <img
            className="h-[75px] w-[75px] rounded-full object-cover object-center sm:h-[164px] sm:w-[164px]"
            src={image}
            width={164}
            height={164}
            alt={name}
          />
        ) : (
          <PartnersPlaceholderIcon className="h-9 w-9" />
        )}
      </div>
      <div className="pt-6">
        <div className="font-cardo text-base font-normal capitalize leading-tight sm:mb-4 sm:text-[28px]">
          {name.toLowerCase()}
        </div>
        <p className="hidden space-x-3 font-open text-base font-normal sm:block">
          <span>{role}</span>
          <span className="text-xl leading-none">&#x2022;</span>
          <span className="underline">{company}</span>
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;
