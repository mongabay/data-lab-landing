import cx from 'classnames';

import Button from '@/components/button';
import { TOOLS } from '@/constants';
import Icon from '@/components/icon';

const Tools = () => {
  return (
    <div className="container text-dark-gray">
      {TOOLS.map(
        (
          {
            color,
            image,
            imageWidth,
            imageHeight,
            description,
            name,
            subtitle,
            icon,
            url,
            partners,
          },
          index,
        ) => {
          return (
            <div
              className={cx(
                'mb-28 flex flex-col items-center justify-center gap-6 lg:mb-44 lg:flex-row lg:gap-12',
                { 'lg:mt-28': index === 0 },
              )}
              key={name}
            >
              <div
                className={cx('relative max-w-sm space-y-6 font-open', {
                  'lg:order-2': index % 2 !== 0,
                  'lg:order-1': index % 2 === 0,
                })}
              >
                <h2 className="max-w-xs font-cardo text-[32px] leading-tight lg:text-6xl">
                  {name}
                </h2>
                <p className="font-cardo text-[28px] leading-9">{subtitle}</p>
                <p>{description}</p>
                <Button
                  style={{
                    backgroundColor: color,
                  }}
                  href={url}
                  className="relative z-10 text-white"
                >
                  Explore charts
                </Button>
                <p className="!mt-8 sm:!mt-14">
                  Built with{' '}
                  {partners.map(({ name, image, width, height, invert }) => (
                    <img
                      key={name}
                      className={cx({ 'ml-3 inline-block': true, invert: invert })}
                      src={image}
                      width={width}
                      height={height}
                      alt={name}
                    />
                  ))}
                </p>
                <div
                  className={cx('absolute -bottom-6 right-0 z-0 w-2/5 lg:bottom-16 lg:w-64', {
                    'lg:-right-14': index % 2 === 0,
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
                <img width={imageWidth} height={imageHeight} src={image} alt={name} />
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Tools;
