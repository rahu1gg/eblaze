import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = paragraph.split(' ');
  return (
    <p ref={container} className='flex text-foreground flex-wrap max-w-[530px]'>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: number[] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='relative mt-1 mr-2 first-of-type:ml-7 text-sm'>
      <span className='absolute opacity-20'>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
