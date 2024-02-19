import { Heading } from '@/components/global/framer/heading';
import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import { Column } from '@/components/global/framer/parallax-card';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [600, -200]);

  return (
    <section className='py-28 overflow-y-hidden min-h-[120vh]'>
      <div ref={container} className='mx-5'>
        <Column y={y}>
          <div>
            <Heading className='pb-20'>About</Heading>
            <Line />
            <div className='flex items-start justify-start gap-20'>
              <div>
                <Paragraph className='text-xs font-medium text-primary-color min-w-32 mt-2'>Event -</Paragraph>
              </div>
              <div>
                <Paragraph className='mb-5 text-lg font-medium'>
                  To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation
                  and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose
                  whichever implementation you prefer.
                </Paragraph>
                <Paragraph className='text-lg font-medium'>
                  To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation
                  and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose
                  whichever implementation you prefer.
                </Paragraph>
              </div>
            </div>
          </div>
        </Column>
        <Column y={y2}>
          <Line />
          <div className='flex items-start justify-start gap-20'>
            <div>
              <Paragraph className='text-xs font-medium text-primary-color min-w-32 mt-2'>Department - </Paragraph>
            </div>
            <div>
              <Paragraph className='text-lg mb-5 font-medium'>
                To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and
                then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever
                implementation you prefer.
              </Paragraph>
              <Paragraph className='text-lg font-medium'>
                To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and
                then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever
                implementation you prefer.
              </Paragraph>
            </div>
          </div>
        </Column>
      </div>
    </section>
  );
}
