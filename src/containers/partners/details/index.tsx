import Icon from "@/components/icon";
import Modal from "@/components/modal";
import Image from "next/image";
import PartnersPlaceholderIcon from "@/styles/icons/partners-placeholder.svg?sprite";
import ArrowUpRightIcon from "@/styles/icons/arrow-up-right.svg";
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
        <div className="flex justify-center items-center">
          {details?.image ? (
            <Image
              src={details.image || "/images/partners-placeholder.svg"}
              width={220}
              height={220}
              alt={details.name}
              className="w-[220px] h-[220px] rounded-full"
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
              {details?.role} <span className="text-white/20">|</span>{" "}
              <a
                href={details?.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-medium-gray"
              >
                {details?.company}
              </a>
            </p>
          </div>
          {details?.description && (
            <div dangerouslySetInnerHTML={{ __html: details.description }} />
          )}
          <div>
            <a
              href={details?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Icon
                icon={ArrowUpRightIcon}
                className="w-5 h-5 fill-white stroke-white"
              />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PartnersDetails;
