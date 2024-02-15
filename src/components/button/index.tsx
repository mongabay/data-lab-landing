import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

const BUTTON_TYPE = {
  PRIMARY: 'bg-primary',
  SECONDARY: 'bg-secondary',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {};

const Button = ({ children, className, ...props }: ButtonProps | AnchorProps) => {
  const buttonProps = props as ButtonProps;
  const aProps = props as AnchorProps;

  const c = cx(
    'flex items-center justify-center w-full text-center font-open text-base font-semibold leading-normal text-primary sm:w-auto rounded-3xl px-8 py-3 focus-visible:outline-primary focus-visible:outline-offset-4',
    className,
    buttonProps.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  );

  if (aProps.href) {
    return (
      <a href={aProps.href} className={c} target="_blank" rel="noopener noreferrer" {...aProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={c} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
