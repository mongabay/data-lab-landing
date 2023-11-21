import { ButtonHTMLAttributes } from "react";
import cx from "classnames";

const BUTTON_TYPE = {
  PRIMARY: "bg-primary",
  SECONDARY: "bg-secondary",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = ({
  children,
  className,
  disabled,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(
        "rounded-3xl px-5 py-2.5",
        className,
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
