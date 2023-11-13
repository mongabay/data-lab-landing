import cx from "classnames";
import { CSSProperties } from "react";

interface BrowserSpriteSymbol {
  id: string;
  viewBox: string;
  content: string;
  node: SVGSymbolElement;
}

export interface IconProps {
  icon?:
    | {
        id: string;
        viewBox: string;
      }
    | BrowserSpriteSymbol;
  className?: string;
  style?: CSSProperties;
}

const Icon = ({ icon, className, style }: IconProps) => (
  <svg
    className={cx({
      "fill-current": true,
      [className as string]: !!className,
    })}
    viewBox={icon?.viewBox || "0 0 32 32"}
    style={style}
  >
    <use xlinkHref={`#${icon?.id}`} />
  </svg>
);

export default Icon;
