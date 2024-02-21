import { Heading } from '@/components/global/framer/heading';
import Paragraph from '@/components/global/framer/paragraph';
import Pixels from '@/components/global/framer/pixels';
import { EVENTS } from '@/constants/events';
import { motion } from 'framer-motion';
import { Fragment, useState } from 'react';

const linearGradients = [
  'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
  'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
  'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
  'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
  'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
];

export function Events() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <Fragment>
      <section className='relative'>
        <div className='sticky h-screen top-0 z-10 pointer-events-none'>
          <Pixels inView />
        </div>
        <div className='mx-5 min-h-screen relative z-20'>
          <div className='min-h-screen'>
            <Heading className='text-background'>Events</Heading>
          </div>
          <div className='relative flex items-start px-4'>
            <div>
              {EVENTS.map(({ id, name, description }, index) => (
                <motion.div key={id} className={`h-screen event-card event-${index}`} onViewportEnter={() => setActiveCard(index)}>
                  <div>
                    <Heading className='text-background whitespace-pre-wrap'>{name}</Heading>
                    <Paragraph className='text-background pt-20 max-w-[700px]'>{description}</Paragraph>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{
                background: linearGradients[activeCard % linearGradients.length],
              }}
              className='hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
