'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, ReactNode } from 'react';

export function Parent({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <section key={pathname}>{children}</section>
    </AnimatePresence>
  );
}

const anim = {
  exit: (i: number) => {
    console.log('exit');

    return {
      opacity: 1,
      transition: { duration: 0, delay: 0.03 * i },
    };
  },
};

export default function Client({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence
      mode='wait'
      onExitComplete={() => {
        console.log('exited');
      }}
    >
      <motion.div key={pathname} variants={anim} exit={'exit'}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
