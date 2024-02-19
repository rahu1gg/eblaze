'use client';

import { cn } from '@/lib/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

interface HackProps extends ComponentPropsWithoutRef<'span'> {
  asChild?: boolean;
  payload?: ReactNode;
  dataValue: string;
  childClassName?: string;
}

export function Hack({ className, childClassName, asChild = false, payload, dataValue, children, ...props }: HackProps) {
  const Comp = asChild ? Slot : 'span';
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
    <Comp className={cn('', className)} onMouseOver={handleMouseOver} data-value={dataValue} {...props}>
      {value}
    </Comp>
  );
}
