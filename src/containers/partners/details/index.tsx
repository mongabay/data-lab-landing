import Icon from '@/components/icon';
import Modal from '@/components/modal';
import PartnersPlaceholderIcon from '@/styles/icons/partners-placeholder.svg?sprite';
import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg';
import { Partner } from '@/types/partner';
import Button from '@/components/button';

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
      <div className="flex min-h-full flex-col items-center gap-x-20 gap-y-6 sm:flex-row sm:items-start sm:justify-center">
        <div className="flex shrink-0 items-center justify-center">
          {details?.image ? (
            <img
              src={details.image || '/images/partners-placeholder.svg'}
              width={220}
              height={220}
              alt={details.name}
              className="aspect-square w-1/2 max-w-[220px] rounded-full object-cover sm:w-full"
            />
          ) : (
            <Icon icon={PartnersPlaceholderIcon} className="h-14 w-14" />
          )}
        </div>
        <div className="max-w-[400px] space-y-8 font-open text-white">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="mb-4 font-cardo text-[28px] leading-tight">{details?.name}</h3>
            <p>
              {details?.role} <span className="text-white/20">|</span>{' '}
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
          {details?.description && <p dangerouslySetInnerHTML={{ __html: details.description }} />}
          <Button
            href={details?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-x-4 !p-0"
          >
            See profile
            <Icon icon={ArrowUpRightIcon} className="h-5 w-5 fill-white stroke-white" />
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PartnersDetails;
