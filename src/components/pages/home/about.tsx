import { Column } from '@/components/global/animation/parallax-card';
import Paragraph from '@/components/global/animation/word';
import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function About() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [400, -400]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section>
      <div ref={gallery} className='h-screen mx-5 flex items-center justify-evenly overflow-y-hidden'>
        <Column className='' y={y}>
          <div className='relative -top-0'>
            <h2 className='text-6xl'>About</h2>
            <Paragraph
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat suscipit modi dolor nostrum numquam quaerat aut et magni obcaecati
            totam qui quibusdam ducimus esse, maxime deleniti sequi quae aspernatur, excepturi accusamus! Quas soluta ratione quod atque laudantium!'
            />
          </div>
        </Column>
        <Column className='' y={y2}>
          <div>
            <Paragraph
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat suscipit modi dolor nostrum numquam quaerat aut et magni
              obcaecati totam qui quibusdam ducimus esse, maxime deleniti sequi quae aspernatur, excepturi accusamus! Quas soluta ratione quod atque
              laudantium!'
            />
          </div>
        </Column>
      </div>
    </section>
  );
}
