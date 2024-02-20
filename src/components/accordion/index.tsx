'use client';

import './index.css';
import * as Accordion from '@radix-ui/react-accordion';

import ChevronDownIcon from '@/styles/icons/chevron-down.svg';
import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

const AccordionRoot = Accordion.Root;

const AccordionItem = Accordion.Item;

const AccordionContent = Accordion.Content;

type AccordionHeaderProps = {
  className?: string;
};

const AccordionHeader: FC<PropsWithChildren<AccordionHeaderProps>> = ({ children, className }) => {
  return (
    <Accordion.Header>
      <Accordion.Trigger className={classNames('group block', className)}>
        {children}
        <ChevronDownIcon
          className="inline flex-shrink-0 scale-75 stroke-primary group-data-[state='open']:rotate-180 sm:scale-100 "
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

export { AccordionRoot, AccordionHeader, AccordionItem, AccordionContent };
