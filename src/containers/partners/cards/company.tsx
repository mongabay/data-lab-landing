import Icon from "@/components/icon";
import cx from "classnames";
import PartnersPlaceholderIcon from "@/styles/icons/partners-placeholder.svg?sprite";
import { Company } from "@/types/partner";
import ArrowUpRightIcon from "@/styles/icons/arrow-up-right.svg?sprite";
import Button from "@/components/button";

const Card = ({ name, image, imageWidth, imageHeight, link, style }: Company) => {
  return (
    <div className="animate-in duration-700 fade-in text-dark-gray text-base font-open flex flex-col items-center justify-between w-full p-5 pt-10 min-h-[210px] sm:min-h-[280px] border border-light-gray">
      <div
        className={cx(
          "transition-color duration-300 w-full",
          !image && "bg-[#F4F4F4]"
        )}
      >
        {image ? (
          <img
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt={name}
            style={{ ...style }}
          />
        ) : (
          <Icon icon={PartnersPlaceholderIcon} className="w-9 h-9" />
        )}
      </div>
      <div className="mt-6 flex items-center justify-between w-full">
        <Button href={link} className="w-full !p-0 flex justify-between items-center font-cardo text-[28px] leading-tight">
          {name}
          <Icon icon={ArrowUpRightIcon} className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
