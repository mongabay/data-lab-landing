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
          'fixed top-0 left-0 flex h-screen w-screen flex-col': size === 'full',
        })}
      >
        <Dialog.Title className="DialogTitle sr-only">{title}</Dialog.Title>
        <Dialog.Content className="pointer-events-auto! relative container h-full overflow-y-auto py-14 focus-visible:outline-hidden">
          <Dialog.Close asChild>
            <button
              className="fixed top-10 right-10 flex h-8 w-8 items-center justify-center rounded-full bg-white hover:opacity-70"
              aria-label="Close"
            >
              <XIcon className="fill-dark-gray" />
            </button>
          </Dialog.Close>
          {children}
        </Dialog.Content>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
