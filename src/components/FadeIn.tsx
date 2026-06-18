import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: 'div' | 'span' | 'section' | 'article' | 'p' | 'h1' | 'h2' | 'h3';
  once?: boolean;
  amount?: number;
}

const transition: Transition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1],
};

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.9,
  y = 40,
  x = 0,
  className,
  as = 'div',
  once = true,
  amount = 0.2,
}: FadeInProps) => {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount, margin: '0px 0px -80px 0px' }}
      transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default FadeIn;