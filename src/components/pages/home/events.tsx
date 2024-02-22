import { Heading } from '@/components/global/framer/heading';
import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import { Arrow } from '@/components/global/icons';
import { EVENTS, Event } from '@/constants/events';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Events() {
  return (
    <section className='bg-muted'>
      <div className='mx-5'>
        <div>
          <div>
            <Heading className='sm:text-[23vw] text-[22vw]'>Events</Heading>
          </div>
          <Line />
          <div>
            <Paragraph className='flex items-center justify-end gap-4'>
              <Arrow className='size-5 rotate-180' /> <span className='font-medium text-lg'>scroll down</span>
            </Paragraph>
          </div>
        </div>
        <div className='relative px-4'>
          {EVENTS.map((card) => (
            <EventCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ name, description }: Event) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className='h-screen flex justify-center items-center relative'>
      <div ref={ref} className='w-full'>
        <div>
          <div>
            <Heading className='mb-5 lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-foreground text-left'>{name}</Heading>
          </div>
          <Line />
          <Paragraph className='max-w-[700px] py-2 text-lg'>{description}</Paragraph>
        </div>
      </div>
      <motion.img src='/images/2.jpeg' className='inline-block absolute w-56 m-0 md:right-20 ' style={{ y }} alt='event-image' />
    </div>
  );
}
