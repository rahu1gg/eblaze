import { Heading } from '@/components/global/framer/heading';
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
    <section className='py-28 overflow-y-hidden h-screen'>
      <div ref={container} className='mx-5'>
        <Column y={y}>
          <div>
            <Heading className='pb-20'>About</Heading>
            <div className='flex items-start justify-start gap-20'>
              <p className='text-sm text-primary-color min-w-32'>Event - </p>
              <div>
                <Paragraph className='mb-5 font-medium'>
                  To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation
                  and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose
                  whichever implementation you prefer.
                </Paragraph>
                <Paragraph className='font-medium'>
                  To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation
                  and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose
                  whichever implementation you prefer.
                </Paragraph>
              </div>
            </div>
          </div>
        </Column>
        <Column y={y2}>
          <div className='flex items-start justify-start gap-20'>
            <p className='text-sm text-primary-color min-w-32'>Department -</p>
            <div>
              <Paragraph className='mb-5 font-medium'>
                To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and
                then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever
                implementation you prefer.
              </Paragraph>
              <Paragraph className='font-medium'>
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
