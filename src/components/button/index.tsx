import { ButtonHTMLAttributes } from "react";
import cx from "classnames";

const BUTTON_TYPE = {
  PRIMARY: "bg-primary",
  SECONDARY: "bg-secondary",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = ({ children, className, ...buttonProps }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx("rounded-3xl text-white px-5 py-2.5", className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
