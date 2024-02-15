import './index.css';

import cx from 'classnames';

import Button from '@/components/button';
import { TOOLS, menuLinks } from '@/constants';
import classNames from 'classnames';

const Tools = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 flex w-full flex-col items-start justify-center gap-[60px] bg-black py-5">
        <div
          id={menuLinks[0].link.replace('#', '')}
          className="container font-open text-[32px] font-light text-white sm:text-[56px] sm:leading-[72px]"
        >
          <h2>Data Tools</h2>
        </div>
      </div>
      <div className="container space-y-20 py-20 text-dark-gray sm:space-y-40 sm:py-[127px]">
        <div>
          <p className="max-w-[680px] font-open text-2xl font-light leading-loose text-black sm:text-[32px] sm:leading-[44px]">
            Mongabay is developing a suite of accessible visualization tools designed to empower
            journalists to create stories backed by accurate data sources.
          </p>
        </div>
        {TOOLS.map(
          (
            {
              id,
              image,
              imageWidth,
              imageHeight,
              description,
              name,
              subtitle,
              url,
              partners,
              buttonText,
            },
            index,
          ) => {
            return (
              <div
                className={cx(
                  'mb-28 flex flex-col items-center justify-between gap-6 lg:mb-44 lg:flex-row lg:gap-12',
                  { 'lg:mt-28': index === 0 },
                )}
                key={name}
              >
                <div
                  className={cx('relative max-w-sm space-y-5 font-open sm:space-y-6', {
                    'order-2 sm:order-2': index % 2 !== 0,
                    'order-2 sm:order-1': index % 2 === 0,
                  })}
                >
                  <h3 className="font-open text-3xl  font-light text-black sm:text-[44px] sm:leading-[48px]">
                    {name}
                  </h3>
                  <p className="font-cardo text-base font-normal text-black sm:text-[28px] sm:leading-9">
                    {subtitle}
                  </p>
                  <p className="max-w-[391px] font-open text-sm font-normal leading-normal text-black sm:text-base">
                    {description}
                  </p>
                  <Button
                    href={url}
                    className={classNames(
                      'relative z-10 text-sm text-white transition-colors duration-300 sm:text-base',
                      id,
                    )}
                  >
                    {buttonText}
                  </Button>
                  <p className="!mt-8 font-open text-sm font-normal leading-relaxed text-neutral-800 text-opacity-60 sm:!mt-14 sm:text-base">
                    Built with{' '}
                    {partners.map(({ name, image, width, height, invert }) => (
                      <img
                        key={name}
                        className={cx({
                          'ml-3 inline-block h-10 object-contain sm:h-auto': true,
                          invert: invert,
                        })}
                        src={image}
                        width={width}
                        height={height}
                        alt={name}
                      />
                    ))}
                  </p>
                </div>
                <div
                  className={cx('relative z-10 mt-4 lg:mt-0', {
                    'order-1 sm:order-1': index % 2 !== 0,
                    'order-1 sm:order-2': index % 2 === 0,
                  })}
                >
                  <img width={imageWidth} height={imageHeight} src={image} alt={name} />
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Tools;
