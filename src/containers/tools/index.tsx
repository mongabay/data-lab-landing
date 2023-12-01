import cx from 'classnames';

import Button from '@/components/button';
import { TOOLS } from '@/constants';
import Icon from '@/components/icon';

const Tools = () => {
  return (
    <div className="container text-dark-gray">
      {TOOLS.map(
        ({ color, image, imageWidth, imageHeight, description, title, icon, url }, index) => {
          return (
            <div
              className={cx(
                'mb-28 flex flex-col items-center justify-center gap-6 lg:mb-44 lg:flex-row lg:gap-12',
                { 'lg:mt-28': index === 0 },
              )}
              key={title}
            >
              <div
                className={cx('relative max-w-sm space-y-6 font-open', {
                  'lg:order-2': index % 2 !== 0,
                  'lg:order-1': index % 2 === 0,
                })}
              >
                <h2 className="max-w-xs font-cardo text-[32px] leading-tight lg:text-6xl">
                  {title}
                </h2>
                <p className="lg:text-lg">{description}</p>
                <Button
                  style={{
                    backgroundColor: color,
                  }}
                  href={url}
                  className="relative z-10 font-semibold text-white lg:text-sm"
                >
                  Explore charts
                </Button>
                <div
                  className={cx('absolute -bottom-6 right-0 z-0 w-2/5 lg:-bottom-24 lg:w-64', {
                    'lg:-right-24': index % 2 === 0,
                  })}
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
                className={cx('relative z-10 mt-4 lg:mt-0', {
                  'order-1': index % 2 !== 0,
                  'order-2': index % 2 === 0,
                })}
              >
                <img width={imageWidth} height={imageHeight} src={image} alt={title} />
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Tools;
