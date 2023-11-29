import Icon from "@/components/icon";
import Modal from "@/components/modal";
import PartnersPlaceholderIcon from "@/styles/icons/partners-placeholder.svg?sprite";
import ArrowUpRightIcon from "@/styles/icons/arrow-up-right.svg";
import { Partner } from "@/types/partner";
import Button from "@/components/button";

type PartnersDetailsProps = {
  details: Partner | null;
  close: () => void;
};

const PartnersDetails = ({ details, close }: PartnersDetailsProps) => {
  return (
    <Modal
      title={details?.name}
      open={!!details}
      onOpenChange={close}
      className="bg-dark-gray text-white"
      size="full"
    >
      <div className="min-h-full flex flex-col sm:flex-row sm:justify-center items-center gap-x-20 gap-y-6">
        <div className="shrink-0 flex justify-center items-center">
          {details?.image ? (
            <img
              src={details.image || "/images/partners-placeholder.svg"}
              width={220}
              height={220}
              alt={details.name}
              className="w-1/2 max-w-[220px] sm:max-w-auto sm:w-[220px] sm:h-[220px] rounded-full"
            />
          ) : (
            <Icon icon={PartnersPlaceholderIcon} className="w-14 h-14" />
          )}
        </div>
        <div className="text-white max-w-[400px] font-open space-y-8">
          <div className="space-y-2 text-center sm:text-left">
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
            <p dangerouslySetInnerHTML={{ __html: details.description }} />
          )}
          <Button
            href={details?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-x-4 !p-0"
          >
            See profile
            <Icon
              icon={ArrowUpRightIcon}
              className="w-5 h-5 fill-white stroke-white"
            />
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PartnersDetails;
