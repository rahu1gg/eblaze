import { cn } from '@/lib/utils/cn';
import { shuffle } from '@/lib/utils/shuffle';
import { Variants, motion, useInView } from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

const anim: Variants = {
  initial: {
    scaleY: 0,
    filter: 'blur(50px)',
  },
  animate: (i: number) => ({
    scaleY: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.3,
      delay: 0.2 + 0.07 * i,
    },
  }),
};

export function Heading({ className, children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true });

  if (typeof children !== 'string') return <h2>Only strings allowed</h2>;
  const shuffledIndexes = shuffle([...children.split('')].map((_, i) => i));

  return (
    <h2 ref={ref} className={cn('text-9xl font-bold', className)} {...props}>
      {children.split('').map((val, index) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className='inline-block font-inter origin-bottom pr-px'
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