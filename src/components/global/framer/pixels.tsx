import { motion } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';

const anim = {
  initial: {
    opacity: 1,
  },
  enter: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.03 * i },
  }),
  exit: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.03 * i },
  }),
  inView: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.03 * i },
  }),
  outView: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.03 * i },
  }),
};

interface PixelProps {
  inView?: boolean;
  outView?: boolean;
}

export default function Pixels({ inView = false, outView = false }: PixelProps) {
  const [inner, setInner] = useState({ innerWidth: 1632, innerHeight: 838 });

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

  const getBlocks = () => {
    const { innerWidth, innerHeight } = inner;
    const blockSize = innerWidth * 0.025;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
    return shuffledIndexes.map((randomIndex, index) => {
      return (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className='w-full h-[2.5vw] bg-primary-color'
          variants={anim}
          initial={outView ? 'outView' : 'initial'}
          animate={'enter'}
          whileInView={inView ? 'inView' : ''}
          exit={'exit'}
          custom={randomIndex}
        />
      );
    });
  };

  useLayoutEffect(() => {
    const { innerWidth, innerHeight } = window;
    setInner({ innerWidth, innerHeight });
  }, []);

  return (
    <div className='flex h-screen overflow-hidden relative z-[1] pointer-events-none'>
      {[...Array(40)].map((_, index) => {
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index} className='w-[2.5vw] h-full flex flex-col'>
            {getBlocks()}
          </div>
        );
      })}
    </div>
  );
}
