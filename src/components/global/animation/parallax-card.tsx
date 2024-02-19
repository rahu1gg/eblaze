import { cn } from '@/lib/utils/cn';
import { MotionValue, motion } from 'framer-motion';
import { ReactNode } from 'react';

export const Column = ({ children, className, y }: { children: ReactNode; y: MotionValue<number>; className?: string }) => {
  return (
    <motion.div className={cn('relative', className)} style={{ y }}>
      {children}
    </motion.div>
  );
};
