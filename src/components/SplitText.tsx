import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** opacity range [start, end] for inactive->active */
  dim?: [number, number];
  /** scroll trigger offsets */
  offset?: [string, string];
  /** words vs chars */
  by?: 'word' | 'char';
}

const WordSpan = ({
  word,
  start,
  end,
  progress,
  dim,
  rise,
}: {
  word: string;
  start: number;
  end: number;
  progress: MotionValue<number>;
  dim: [number, number];
  rise: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, [start, end], [dim[0], dim[1]]);
  return (
    <span className="inline-block overflow-hidden align-baseline">
      <motion.span
        style={{ opacity, y: rise }}
        className="inline-block will-change-transform"
      >
        {word}
      </motion.span>
    </span>
  );
};

const SplitText = ({
  text,
  className,
  style,
  dim = [0.18, 1],
  offset = ['start 0.85', 'end 0.2'],
  by = 'word',
}: SplitTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  // framer-motion's offset type is restrictive; runtime accepts these string pairs.
  // Use any-cast here to keep the public prop permissive.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { scrollYProgress } = useScroll({ target: ref, offset: offset as any });

  const rise = useTransform(scrollYProgress, [0, 1], [24, 0]);

  const tokens = by === 'word' ? text.split(' ') : Array.from(text);
  const total = tokens.length;

  return (
    <p ref={ref} className={className} style={style}>
      {tokens.map((token, i) => {
        const start = i / total;
        const end = start + 1 / total;
        const display = by === 'word' ? `${token}\u00A0` : token;
        return (
          <WordSpan
            key={i}
            word={display}
            start={start}
            end={end}
            progress={scrollYProgress}
            dim={dim}
            rise={rise}
          />
        );
      })}
    </p>
  );
};

export default SplitText;