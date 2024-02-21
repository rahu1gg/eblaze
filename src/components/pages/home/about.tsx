import { Heading } from '@/components/global/framer/heading';
import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import { Column } from '@/components/global/framer/parallax-card';
import { Player } from '@lottiefiles/react-lottie-player';
import { useScroll, useTransform } from 'framer-motion';
import { Engine } from 'matter-js';
import { useRef } from 'react';

export function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [800, -700]);

  return (
    <section className='py-28 overflow-y-hidden min-h-screen bg-foreground'>
      <div ref={container} className='mx-5'>
        <div>
          <div className='mb-5'>
            <Heading className='text-background bg-foreground'>About</Heading>
          </div>
          <Line className='text-background' />
          <div className='flex items-center justify-center gap-20'>
            <div>
              <Column y={y}>
                <DepartmentSphere />
                <div className='mt-16'>
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
            <div>
              <Column y={y2}>
                <DepartmentSphere />
                <div className='mt-16'>
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

function EblazeSphere() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Engine.create());

  return (
    <div className='sphere-item relative flex items-center justify-center flex-col w-20 max-w-20 h-20 text-[0.16rem] text-center border rounded-[50%] aspect-square p-[0.9rem] clip-circle'>
      <div ref={canvasRef} id='sphere-real' />
      <div className='sphere-item__text absolute top-1/2 left-1/2 w-full max-w-14 h-auto -translate-x-1/2 -translate-y-1/2 font-bold'>Eblaze</div>
    </div>
  );
}

function DepartmentSphere() {
  return (
    <div className='relative border rounded-full w-[80%] mx-auto'>
      <Player
        id='lottie-player'
        src='https://cdn.zajno.com/dev/motion/videos/not_real_time.json'
        background='transparent'
        speed={1}
        hover={true}
        loop
        autoplay
      />
      <div className='absolute top-1/2 left-1/2 w-max h-auto -translate-x-1/2 -translate-y-1/2 font-semibold text-xs text-background'>Department</div>
    </div>
  );
}
