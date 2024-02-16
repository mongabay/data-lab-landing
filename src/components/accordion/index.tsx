'use client';

import './index.css';
import * as Accordion from '@radix-ui/react-accordion';

import ChevronDownIcon from '@/styles/icons/chevron-down.svg';
import { FC, PropsWithChildren } from 'react';
import Icon from '../icon';
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
        <Icon
          icon={ChevronDownIcon}
          className="inline h-[30px] w-[30px] flex-shrink-0 stroke-primary group-data-[state='open']:rotate-180 sm:h-12 sm:w-12"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

export { AccordionRoot, AccordionHeader, AccordionItem, AccordionContent };
