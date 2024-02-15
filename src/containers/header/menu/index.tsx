'use client';

import { TOOLS } from '@/constants';
import Icon from '@/components/icon';

import MenuIcon from '@/styles/icons/menu.svg';
import XIcon from '@/styles/icons/x.svg';
import { useState } from 'react';
import cx from 'classnames';
import Button from '@/components/button';

import ArrowUpRightIcon from '@/styles/icons/arrow-up-right.svg?sprite';

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-dark-gray">
      <button onClick={() => setIsOpen(true)}>
        <span className="sr-only">open navigation menu</span>
        <Icon icon={MenuIcon} className="h-4 stroke-white sm:stroke-secondary" />
      </button>
      <div
        className={cx('fixed left-0 top-0 transition-all', {
          'z-20 h-full w-full bg-black opacity-40 blur-lg duration-500': isOpen,
          '-z-10 opacity-0 ': !isOpen,
        })}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={cx('fixed right-0 top-0 z-20 h-full bg-white transition-all duration-300', {
          'translate-x-0': isOpen,
          'translate-x-full': !isOpen,
        })}
        {...(!isOpen && { inert: '' })}
      >
        <div className="flex h-full w-screen flex-col items-start gap-[60px] overflow-y-auto px-5 pb-14 pt-8 sm:w-auto sm:px-[88px] lg:min-w-[510px]">
          <button
            className="self-end rounded-full pr-4 focus-visible:outline-offset-4 focus-visible:outline-primary sm:pr-0"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">close navigation menu</span>
            <Icon icon={XIcon} className="h-[18px] w-[18px] fill-dark-gray" />
          </button>
          <p className="font-cardo text-3xl font-bold">Mongabay Chart Tools</p>
          <ul className="space-y-6">
            {TOOLS.map(({ name, url, icon, color }) => (
              <li key={name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}
                  className="flex items-center gap-4 rounded-3xl font-open font-semibold uppercase hover:underline focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  >
                    <Icon className="h-[22px] w-[22px] fill-white" icon={icon} />
                  </div>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-1 items-end gap-3 text-sm font-semibold">
            <Button
              href="mailto:info@mongabay.org"
              className="border border-dark-gray bg-dark-gray text-white"
            >
              Get in touch <Icon icon={ArrowUpRightIcon} className="ml-8 inline h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
