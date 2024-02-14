import Icon from '@/components/icon';
import cx from 'classnames';
import PartnersPlaceholderIcon from '@/styles/icons/partners-placeholder.svg?sprite';
import { Partner } from '@/types/partner';

const PartnerCard = ({ name, image, role, company }: Partner) => {
  return (
    <div className="flex h-full w-full flex-col justify-between  overflow-hidden rounded-[32px] border border-black p-6 font-open text-base text-dark-gray duration-700 animate-in fade-in">
      <div
        className={cx(
          'transition-color flex w-full items-center justify-center duration-300',
          !image && 'bg-[#F4F4F4]',
        )}
      >
        {image ? (
          <img
            className="h-[120px] w-[120px] rounded-full object-cover object-center sm:h-[164px] sm:w-[164px]"
            src={image}
            width={164}
            height={164}
            alt={name}
          />
        ) : (
          <Icon icon={PartnersPlaceholderIcon} className="h-9 w-9" />
        )}
      </div>
      <div className="pt-6">
        <div className="mb-4 cursor-pointer font-cardo text-base capitalize leading-tight sm:text-[28px]">
          {name.toLowerCase()}
        </div>
        <p className="hidden space-x-3 text-base sm:block">
          <span>{role}</span>
          <span className="text-xl leading-none">&#x2022;</span>
          <span className="underline">{company}</span>
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;
