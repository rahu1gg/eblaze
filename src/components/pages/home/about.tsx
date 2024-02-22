import { Heading } from '@/components/global/framer/heading';
import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import { Column } from '@/components/global/framer/parallax-card';
import { Player } from '@lottiefiles/react-lottie-player';
import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { EblazeSphere } from './eblaze-about';

export function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [800, -700]);

  useEffect(() => {
    window.scrollBy(0, 1);
  }, []);

  return (
    <section className='lg:py-28 pt-28 overflow-y-hidden min-h-screen bg-foreground'>
      <div ref={container} className='mx-5'>
        <div>
          <div>
            <Heading className='text-background bg-foreground'>About</Heading>
          </div>
          <Line className='text-background' />
          <div className='flex items-center justify-center gap-20 lg:mt-20 lg:flex-row flex-col'>
            <div>
              <Column y={y}>
                <EblazeSphere />
                <div className='sm:mt-16 mt-8'>
                  <Paragraph className='mb-5 text-lg font-medium text-background'>
                    To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation
                    and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose
                    whichever implementation you prefer.
                  </Paragraph>
                  <Paragraph className='text-lg font-medium text-background'>
                    To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation
                    and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose
                    whichever implementation you prefer.
                  </Paragraph>
                </div>
              </Column>
            </div>
            <div className='lg:pt-0 pt-20'>
              <Column y={y2}>
                <DepartmentSphere />
                <div className='sm:mt-16 mt-8'>
                  <Paragraph className='text-lg mb-5 font-medium text-background'>
                    To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation
                    and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose
                    whichever implementation you prefer.
                  </Paragraph>
                  <Paragraph className='text-lg font-medium text-background'>
                    To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation
                    and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose
                    whichever implementation you prefer.
                  </Paragraph>
                </div>
              </Column>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DepartmentSphere() {
  return (
    <div className='relative border rounded-full w-[90%] ml-auto'>
      <Player
        id='lottie-player'
        src='https://cdn.zajno.com/dev/motion/videos/not_real_time.json'
        background='transparent'
        speed={1}
        hover={true}
        loop
        autoplay
      />
      <div className='absolute top-1/2 left-1/2 w-max h-auto -translate-x-1/2 mix-blend-difference -translate-y-1/2 font-semibold text-xs text-background z-10'>
        Department
      </div>
    </div>
  );
}
