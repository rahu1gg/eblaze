'use client';

import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

interface FooterLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  payload?: ReactNode;
  payloadClassName?: string;
  dataValue: string;
}

export function FooterLink({ className, payload, dataValue, children, payloadClassName, ...props }: FooterLinkProps) {
  const [value, setValue] = useState(dataValue);

  function handleMouseOver() {
    const val = dataValue;
    const DURATION = val.length < 10 ? 40 : 10;
    let iterations = 0;

    const interval = setInterval(() => {
      setValue((curr) =>
        curr
          .split('')
          .map((_, index) => (index < iterations ? val[index] : LETTERS[Math.floor(Math.random() * LETTERS.length)]))
          .join(''),
      );

      if (iterations >= val.length) clearInterval(interval);
      iterations += 1 / 5;
    }, DURATION);
  }

  return (
    <Link className={cn('group flex items-center justify-between', className)} onMouseOver={handleMouseOver} data-value={dataValue} {...props}>
      {value}
      <span className={payloadClassName}>{payload}</span>
    </Link>
  );
}
