"use client";

import { TOOLS } from "@/constants";
import Icon from "@/components/icon";

import MenuIcon from "@/styles/icons/menu.svg";
import XIcon from "@/styles/icons/x.svg";
import { useState } from "react";
import cx from "classnames";
import Button from "@/components/button";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-dark-gray">
      <button onClick={() => setIsOpen(true)}>
        <span className="sr-only">open navigation menu</span>
        <Icon icon={MenuIcon} className="fill-dark-gray w-[30px] h-[30px]" />
      </button>
      <div
        className={cx("fixed top-0 left-0 transition-all", {
          "duration-500 w-full h-full bg-dark-gray opacity-40 z-20": isOpen,
          "opacity-0 -z-10 ": !isOpen,
        })}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={cx(
          "fixed top-0 right-0 h-full z-20 transition-all duration-300 bg-white",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
        {...(!isOpen && { inert: "" })}
      >
        <div className="lg:min-w-[510px] w-screen sm:w-auto pt-8 pb-14 px-5 sm:px-[88px] items-start h-full flex flex-col gap-[60px] overflow-y-auto">
          <button
            className="self-end pr-4 sm:pr-0 focus-visible:outline-primary-green focus-visible:outline-offset-4 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">close navigation menu</span>
            <Icon icon={XIcon} className="fill-dark-gray w-[52px] h-[52px]" />
          </button>
          <p className="font-cardo text-3xl font-bold">Mongabay Chart Tools</p>
          <ul className="space-y-6">
            {TOOLS.map(({ name, url, icon, color }) => (
              <li key={name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}
                  className="flex gap-4 items-center uppercase font-open font-semibold hover:underline focus-visible:outline-primary-green focus-visible:outline-offset-4 rounded-3xl"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  >
                    <Icon
                      className="fill-white w-[22px] h-[22px]"
                      icon={icon}
                    />
                  </div>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-1 items-end gap-3 font-semibold text-sm">
            <Button
              href="mailto:info@mongabay.org"
              className="border border-dark-gray text-white bg-dark-gray"
            >
              Get in touch
            </Button>
            <Button
              href="https://mongabay.org/"
              className="border border-dark-gray text-dark-gray"
            >
              Find out more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
