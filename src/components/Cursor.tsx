import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.5 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    setHidden(false);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const enterInteractive = () => setHovering(true);
    const leaveInteractive = () => setHovering(false);

    window.addEventListener('mousemove', move);

    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', enterInteractive);
      el.addEventListener('mouseleave', leaveInteractive);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [data-cursor-hover]');
      els.forEach((el) => {
        el.removeEventListener('mouseenter', enterInteractive);
        el.removeEventListener('mouseleave', leaveInteractive);
        el.addEventListener('mouseenter', enterInteractive);
        el.addEventListener('mouseleave', leaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', enterInteractive);
        el.removeEventListener('mouseleave', leaveInteractive);
      });
      observer.disconnect();
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
      >
        <motion.div
          animate={{
            scale: hovering ? 1.6 : 1,
            opacity: hovering ? 0.55 : 0.9,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-sky-300 to-lime-300 mix-blend-screen blur-[1px]" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
      >
        <motion.div
          animate={{
            width: hovering ? 56 : 28,
            height: hovering ? 56 : 28,
            borderColor: hovering ? 'rgba(196, 255, 93, 0.8)' : 'rgba(125, 211, 252, 0.55)',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border"
        />
      </motion.div>
    </>
  );
};

export default Cursor;