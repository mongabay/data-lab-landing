import cx from "classnames";
import Button from "@/components/button";
import { TOOLS } from "./constants";
import Image from "next/image";

const Tools = () => {
  return (
    <div className="max-w-5xl mx-auto text-dark-gray">
      {TOOLS.map(({ color, image, description, title, icon }, index) => {
        return (
          <div className="h-screen flex items-center gap-12" key={title}>
            <div
              className={cx("max-w-sm space-y-6 font-open", {
                "order-2": index % 2 !== 0,
                "order-1": index % 2 === 0,
              })}
            >
              <h2 className="text-6xl font-cardo leading-tight max-w-xs">
                {title}
              </h2>
              <p className="text-lg">{description}</p>
              <Button
                style={{
                  backgroundColor: color,
                }}
                className="text-sm"
              >
                Explore charts
              </Button>
              <div
                className={cx("absolute z-0", {
                  "-translate-y-2/3 translate-x-[85%] ": index === 0,
                  "-translate-y-full translate-x-1/3 ": index === 1,
                  "-translate-y-[85%] translate-x-[90%] ": index === 2,
                  "-translate-y-[150%] translate-x-1/2 ": index === 3,
                })}
              >
                <Image width={253} height={253} src={icon} alt={title} />
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
