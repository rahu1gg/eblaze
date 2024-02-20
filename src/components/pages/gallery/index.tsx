import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Picture1 from '../../../public/images/1.jpeg';
import Picture2 from '../../../public/images/2.jpeg';
import Picture3 from '../../../public/images/3.jpg';
import Picture4 from '../../../public/images/4.jpg';
import Picture5 from '../../../public/images/5.jpg';
import Picture6 from '../../../public/images/6.jpg';
import Picture7 from '../../../public/images/7.jpeg';
import styles from './styles.module.scss';

export default function ZoomParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className='relative min-h-[300vh]'>
      <div className='sticky overflow-hidden top-0 h-screen'>
        {pictures.map(({ src, scale }, index) => {
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <motion.div key={index} style={{ scale }} className={`w-full h-full absolute top-0 flex items-center justify-center ${styles.el}`}>
              <div className={`relative w-[25vw] h-[25vh] ${styles.imageContainer}`}>
                <Image className={'object-cover'} src={src} fill alt='image' placeholder='blur' />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
