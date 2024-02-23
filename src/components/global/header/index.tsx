import { useNav } from '@/client/store/use-nav';
import { APP, APP_LINKS } from '@/constants/app';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { background, blur, height, opacity, translate } from './anim';

export function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className='px-5 bg-primary-color text-background sticky top-0 w-full z-20'>
      <div className='h-14 flex items-center justify-between relative'>
        <div className='w-full'>
          <Link href={'/'} className='text-background font-medium'>
            Eblaze
          </Link>
        </div>
        <button
          type='button'
          className='flex items-center justify-center'
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div className='flex items-center justify-center relative font-medium'>
            <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>
              Menu
            </motion.p>
            <motion.p className='absolute' variants={opacity} animate={isActive ? 'open' : 'closed'}>
              Close
            </motion.p>
          </div>
        </button>
      </div>
      <motion.div
        variants={background}
        initial='initial'
        animate={isActive ? 'open' : 'closed'}
        className='bg-background opacity-50 h-full w-full absolute left-0 top-full'
      />
      <AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
    </header>
  );
}

function Nav() {
  const selectedLink = useNav((state) => state.selectedLink);

  return (
    <motion.div variants={height} initial='initial' animate='enter' exit='exit' className='overflow-hidden'>
      <div className='flex lg:mb-0 mb-20 gap-[50px]'>
        <div className='flex flex-col justify-between'>
          <Body />
          <Footer />
        </div>
        <NavImage src={APP_LINKS[selectedLink.index].src} isActive={selectedLink.isActive} />
      </div>
    </motion.div>
  );
}

function Body() {
  const { selectedLink, updateSelectedLink } = useNav((state) => state);

  return (
    <div className='flex flex-wrap mt-10 lg:mt-20 lg:max-w '>
      {APP_LINKS.map(({ id, label, href }, index) => {
        return (
          <Link key={id} href={href}>
            <motion.p
              className='text-[32px] lg:text-[5vw] flex overflow-hidden pr-[30px] lg:pr-[2vw] pt-[10px] m-0'
              onMouseOver={() => {
                updateSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                updateSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={selectedLink.isActive && selectedLink.index !== index ? 'open' : 'closed'}
            >
              {label.split('').map((char, i) => (
                <motion.span
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={i}
                  custom={[i * 0.02, (label.length - i) * 0.01]}
                  variants={translate}
                  initial='initial'
                  animate='enter'
                  exit='exit'
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}

function NavImage({ src, isActive }: { src: string; isActive: boolean }) {
  return (
    <motion.div variants={opacity} initial='initial' animate={isActive ? 'open' : 'closed'} className='lg:block hidden w-[500px] h-[350px] relative'>
      <Image src={`/images/nav/${src}`} className='object-contain' fill={true} alt='image' loading='lazy' unoptimized />
    </motion.div>
  );
}

function Footer() {
  return (
    <div className='flex flex-end flex-wrap lg:justify-between text-xs mt-10 pb-5 font-medium'>
      <ul className='w-1/2 mt-2.5 overflow-hidden p-0'>
        <motion.li custom={[0.3, 0]} variants={translate} initial='initial' animate='enter' exit='exit'>
          <Link href={`mailto:${APP.email}`} target='_blank' rel='noreferrer'>
            {APP.email}
          </Link>
        </motion.li>
      </ul>
      <ul className='w-1/2 mt-2.5 overflow-hidden p-0'>
        <motion.li custom={[0.3, 0]} variants={translate} initial='initial' animate='enter' exit='exit'>
          <Link href={'https://www.instagram.com/e_blaze_2k24'} target='_blank' rel='noreferrer'>
            Instagram: Eblaze_2k24
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}
