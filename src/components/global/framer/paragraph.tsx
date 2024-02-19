import { cn } from '@/lib/utils/cn';
import { shuffle } from '@/lib/utils/shuffle';
import { Variants, motion, useInView } from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

const anim: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(50px)',
  },
  animate: (i: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0,
      delay: 0.01 * i,
    },
  }),
};

export default function Paragraph({ className, children, ...props }: ComponentPropsWithoutRef<'p'>) {
  const container = useRef(null);
  const inView = useInView(container, { once: true });

  if (typeof children !== 'string') return <p>Only strings allowed</p>;
  const shuffledIndexes = shuffle([...children.split(' ')].map((_, i) => i));

  return (
    <p ref={container} className={cn('flex text-muted-foreground flex-wrap text-sm', className)} {...props}>
      {children.split(' ').map((word, i) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
          className='pr-2 pt-1 inline-block'
          variants={anim}
          initial='initial'
          animate={inView ? 'animate' : 'initial'}
          custom={shuffledIndexes[i]}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
