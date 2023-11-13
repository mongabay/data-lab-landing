import Icon from "@/components/icon";
import Image from "next/image";
import PartnersPlaceholderIcon from "@/styles/icons/partners-placeholder.svg?sprite";
import { Partner } from "@/types/partner";

const Card = ({ name, image, role, company }: Partner) => {
  return (
    <div className="text-dark-gray text-base font-open flex flex-col items-center justify-between max-w-[140px]">
      <div className="transition-color duration-300 w-[140px] h-[140px] rounded-full bg-[#EEEEEE] hover:bg-light-gray overflow-hidden flex justify-center items-center">
        {image ? (
          <Image
            src={image || "/images/partners-placeholder.svg"}
            width={140}
            height={140}
            alt={name}
          />
        ) : (
          <Icon icon={PartnersPlaceholderIcon} className="w-9 h-9" />
        )}
      </div>
      <div className="mt-6 text-center">
        <h3 className="font-cardo text-[28px] leading-tight mb-4">{name}</h3>
        <p>{role}</p>
        <span className="text-light-gray">__</span>
        <p className="underline decoration-light-gray text-de pt-2">
          {company}
        </p>
      </div>
    </div>
  );
};

export default Card;
