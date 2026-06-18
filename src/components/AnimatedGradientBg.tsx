import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedGradientBgProps {
  className?: string;
}

const AnimatedGradientBg = ({ className = '' }: AnimatedGradientBgProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.12),transparent_60%)]" />
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Soft moving blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[42rem] w-[42rem] rounded-full bg-sky-500/20 blur-3xl"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-lime-300/10 blur-3xl"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 0.95, 1],
          opacity: [0.5, 0.8, 0.6, 0.5],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid-faint bg-grid-32 opacity-[0.18]" />

      {/* Vignette to fade edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0a0c_85%)]" />
    </div>
  );
};

export default AnimatedGradientBg;