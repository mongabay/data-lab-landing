import Icon from "@/components/icon";
import Modal from "@/components/modal";
import Image from "next/image";
import PartnersPlaceholderIcon from "@/styles/icons/partners-placeholder.svg?sprite";
import InstagramIcon from "@/styles/icons/instagram.svg?sprite";
import { Partner } from "@/types/partner";

type PartnersDetailsProps = {
  details: Partner | null;
  close: () => void;
};

const PartnersDetails = ({ details, close }: PartnersDetailsProps) => {
  return (
    <Modal
      title=""
      open={!!details}
      onOpenChange={close}
      className="bg-dark-gray text-white"
      size="full"
    >
      <div className="flex justify-center items-center h-full gap-x-20">
        <div className="w-[220px] h-[220px] rounded-full bg-[#EEEEEE] overflow-hidden flex justify-center items-center">
          {details?.image ? (
            <Image
              src={details.image || "/images/partners-placeholder.svg"}
              width={140}
              height={140}
              alt={details.name}
            />
          ) : (
            <Icon icon={PartnersPlaceholderIcon} className="w-14 h-14" />
          )}
        </div>
        <div className="text-white max-w-[400px] font-open space-y-8">
          <div className="space-y-2">
            <h3 className="font-cardo text-[28px] leading-tight mb-4">
              {details?.name}
            </h3>
            <p>
              {details?.role} <span className="text-white/20">|</span>
              {details?.company}
            </p>
          </div>
          <div>
            <p>{details?.description}</p>
          </div>
          <div>
            <Icon icon={InstagramIcon} className="w-6 h-6 fill-white" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PartnersDetails;
