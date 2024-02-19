import * as Dialog from '@radix-ui/react-dialog';
import XIcon from '@/styles/icons/x.svg';
import cx from 'classnames';

type ModalProps = {
  title?: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
};

const Modal = ({
  title = '',
  children,
  open = false,
  onOpenChange,
  className,
  size = 'md',
}: ModalProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content
        className={cx('transition-opacity duration-300', className, {
          'fixed left-0 top-0 flex h-screen w-screen flex-col': size === 'full',
        })}
      >
        <Dialog.Title className="DialogTitle sr-only">{title}</Dialog.Title>
        <Dialog.Content className="container !pointer-events-auto relative h-full overflow-y-auto py-14 focus-visible:outline-none">
          <Dialog.Close asChild>
            <button
              className="fixed right-10 top-10 flex h-8 w-8 items-center justify-center rounded-full bg-white hover:opacity-70"
              aria-label="Close"
            >
              <XIcon className=" fill-dark-gray" />
            </button>
          </Dialog.Close>
          {children}
        </Dialog.Content>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
