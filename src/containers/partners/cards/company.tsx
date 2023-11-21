import Icon from "@/components/icon";
import Image from "next/image";
import cx from "classnames";
import PartnersPlaceholderIcon from "@/styles/icons/partners-placeholder.svg?sprite";
import { Company } from "@/types/partner";
import ArrowUpRightIcon from "@/styles/icons/arrow-up-right.svg?sprite";

const Card = ({ name, image, link, style }: Company) => {
  return (
    <div className="animate-in duration-700 fade-in text-dark-gray text-base font-open flex flex-col items-center justify-between w-full py-5 px-10 min-h-[280px] border border-light-gray">
      <div
        className={cx(
          "transition-color duration-300 w-full",
          !image && "bg-[#F4F4F4]"
        )}
      >
        {image ? (
          <Image
            className="object-cover w-full"
            src={image}
            width={329}
            height={220}
            alt={name}
            style={{ ...style }}
          />
        ) : (
          <Icon icon={PartnersPlaceholderIcon} className="w-9 h-9" />
        )}
      </div>
      <div className="mt-6 flex items-center justify-between w-full">
        <h3 className="font-cardo text-[28px] leading-tight capitalize">
          {name.toLowerCase()}
        </h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Icon icon={ArrowUpRightIcon} className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Card;
