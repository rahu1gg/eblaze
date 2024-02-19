import { cn } from '@/lib/utils/cn';
import { Variants, motion, useInView } from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

const anim: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: (i: number) => ({
    scaleY: 1,
    transition: {
      duration: 0.3,
      delay: 0.2 + 0.07 * i,
    },
  }),
};

export function Heading({ className, children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref);
  if (typeof children !== 'string') return <h2>Only strings allowed</h2>;

  const shuffle = (a: number[]) => {
    let j = 0;
    let x = 0;
    let i = 0;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };
  const shuffledIndexes = shuffle([...children.split('')].map((_, i) => i));

  return (
    <h2 ref={ref} className={cn('', className)} {...props}>
      {children.split('').map((val, index) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className='inline-block font-flexible origin-bottom pr-px'
          variants={anim}
          initial='initial'
          animate={inView ? 'animate' : 'initial'}
          custom={shuffledIndexes[index]}
        >
          {val}
        </motion.span>
      ))}
    </h2>
  );
}
