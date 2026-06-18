import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

const Marquee = ({ children, speed = 30, reverse = false, className = '' }: MarqueeProps) => {
  return (
    <div className={`marquee-mask relative overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;