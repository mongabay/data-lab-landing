import Image from "next/image";
import cx from "classnames";

import Button from "@/components/button";
import { TOOLS } from "@/constants";
import Icon from "@/components/icon";

const Tools = () => {
  return (
    <div className="container text-dark-gray">
      {TOOLS.map(({ color, image, description, title, icon, url }, index) => {
        return (
          <div
            className="min-h-screen mb-10 sm:mb-0 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12"
            key={title}
          >
            <div
              className={cx("max-w-sm space-y-6 font-open", {
                "sm:order-2": index % 2 !== 0,
                "sm:order-1": index % 2 === 0,
              })}
            >
              <h2 className="text-[32px] sm:text-6xl font-cardo leading-tight max-w-xs">
                {title}
              </h2>
              <p className="text-xs sm:text-lg">{description}</p>
              <Button
                style={{
                  backgroundColor: color,
                }}
                className="text-xs sm:text-sm text-white relative z-10"
              >
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  Explore charts
                </a>
              </Button>
              <div
                className={cx(
                  "absolute z-0 -translate-y-[125%] sm:right-auto -right-0",
                  {
                    "sm:-translate-y-2/3 sm:translate-x-[85%] ": index === 0,
                    "sm:-translate-y-full sm:translate-x-1/3 ": index === 1,
                    "sm:-translate-y-[85%] sm:translate-x-[90%] ": index === 2,
                    "sm:-translate-y-[150%] sm:translate-x-1/2 ": index === 3,
                  }
                )}
              >
                <Icon
                  style={{
                    fill: color,
                  }}
                  className="w-[253px] h-[253px] opacity-10"
                  icon={icon}
                />
              </div>
            </div>
            <div
              className={cx("relative z-10", {
                "order-1": index % 2 !== 0,
                "order-2": index % 2 === 0,
              })}
            >
              <Image width={556} height={483} src={image} alt={title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tools;
