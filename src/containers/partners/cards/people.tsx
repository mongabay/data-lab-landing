import Icon from "@/components/icon";
import Image from "next/image";
import cx from "classnames";
import PartnersPlaceholderIcon from "@/styles/icons/partners-placeholder.svg?sprite";
import { Partner } from "@/types/partner";

const PartnerCard = ({ name, image, role, company }: Partner) => {
  return (
    <div className="animate-in duration-700 fade-in text-dark-gray text-base font-open flex flex-col justify-between w-full h-full border border-light-gray p-6">
      <div
        className={cx(
          "transition-color duration-300 w-full flex items-center justify-center",
          !image && "bg-[#F4F4F4]"
        )}
      >
        {image ? (
          <Image
            className="object-cover object-center w-[164px] h-[164px] rounded-full"
            src={image}
            width={164}
            height={164}
            alt={name}
          />
        ) : (
          <Icon icon={PartnersPlaceholderIcon} className="w-9 h-9" />
        )}
      </div>
      <div className="pt-6">
        <div className="font-cardo text-[28px] leading-tight mb-4 capitalize cursor-pointer">
          {name.toLowerCase()}
        </div>
        <p className="space-x-3 text-base">
          <span>{role}</span>
          <span className="text-xl leading-none">&#x2022;</span>
          <span className="underline">{company}</span>
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;
