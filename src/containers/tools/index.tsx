import cx from "classnames";

import Button from "@/components/button";
import { TOOLS } from "@/constants";
import Icon from "@/components/icon";

const Tools = () => {
  return (
    <div className="container text-dark-gray">
      {TOOLS.map(({ color, image, imageWidth, imageHeight, description, title, icon, url }, index) => {
        return (
          <div
            className={cx("mb-28 lg:mb-44 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12", { 'lg:mt-28': index === 0 })}
            key={title}
          >
            <div
              className={cx("relative max-w-sm space-y-6 font-open", {
                "lg:order-2": index % 2 !== 0,
                "lg:order-1": index % 2 === 0,
              })}
            >
              <h2 className="text-[32px] lg:text-6xl font-cardo leading-tight max-w-xs">
                {title}
              </h2>
              <p className="lg:text-lg">{description}</p>
              <Button
                style={{
                  backgroundColor: color,
                }}
                href={url}
                className="lg:text-sm font-semibold text-white relative z-10"
              >
                Explore charts
              </Button>
              <div
                className={cx(
                  "absolute z-0 right-0 -bottom-6 lg:-bottom-24 w-2/5 lg:w-64",
                  {
                    "lg:-right-24": index % 2 === 0
                  }
                )}
              >
                <Icon
                  style={{
                    fill: color,
                  }}
                  className="opacity-10"
                  icon={icon}
                />
              </div>
            </div>
            <div
              className={cx("relative z-10 mt-4 lg:mt-0", {
                "order-1": index % 2 !== 0,
                "order-2": index % 2 === 0,
              })}
            >
              <img width={imageWidth} height={imageHeight} src={image} alt={title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tools;
