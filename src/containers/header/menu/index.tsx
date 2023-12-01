'use client';

import { TOOLS } from '@/constants';
import Icon from '@/components/icon';

import MenuIcon from '@/styles/icons/menu.svg';
import XIcon from '@/styles/icons/x.svg';
import { useState } from 'react';
import cx from 'classnames';
import Button from '@/components/button';

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-dark-gray">
      <button onClick={() => setIsOpen(true)}>
        <span className="sr-only">open navigation menu</span>
        <Icon icon={MenuIcon} className="h-[30px] w-[30px] fill-dark-gray" />
      </button>
      <div
        className={cx('fixed left-0 top-0 transition-all', {
          'z-20 h-full w-full bg-dark-gray opacity-40 duration-500': isOpen,
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
            className="self-end rounded-full pr-4 focus-visible:outline-offset-4 focus-visible:outline-primary-green sm:pr-0"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">close navigation menu</span>
            <Icon icon={XIcon} className="h-[52px] w-[52px] fill-dark-gray" />
          </button>
          <p className="font-cardo text-3xl font-bold">Mongabay Chart Tools</p>
          <ul className="space-y-6">
            {TOOLS.map(({ name, url, icon, color }) => (
              <li key={name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}
                  className="flex items-center gap-4 rounded-3xl font-open font-semibold uppercase hover:underline focus-visible:outline-offset-4 focus-visible:outline-primary-green"
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
              Get in touch
            </Button>
            <Button href="https://mongabay.org/" className="border border-dark-gray text-dark-gray">
              Find out more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
