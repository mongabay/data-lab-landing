import * as Dialog from "@radix-ui/react-dialog";
import Icon from "../icon";
import XIcon from "@/styles/icons/x.svg?sprite";
import cx from "classnames";

type ModalProps = {
  title?: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
};

const Modal = ({
  title = "",
  children,
  open = false,
  onOpenChange,
  className,
  size = "md",
}: ModalProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content
        className={cx("transition-opacity duration-300", className, {
          "fixed top-0 left-0 w-screen h-screen flex flex-col": size === "full",
        })}
      >
        <Dialog.Title className="DialogTitle sr-only">{title}</Dialog.Title>
        <Dialog.Content className="relative h-full container py-14 !pointer-events-auto focus-visible:outline-none overflow-y-auto">
          <Dialog.Close asChild>
            <button
              className="absolute top-9 right-9 rounded-full w-8 h-8 bg-white flex justify-center items-center hover:opacity-70"
              aria-label="Close"
            >
              <Icon className="w-5 h-5 fill-dark-gray" icon={XIcon} />
            </button>
          </Dialog.Close>
          {children}
        </Dialog.Content>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
