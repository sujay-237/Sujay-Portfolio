import { motion } from 'framer-motion';
import Marquee from './Marquee';

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    label: 'Focus Areas',
    items: [
      'Artificial Intelligence',
      'Cybersecurity',
      'Ethical Hacking',
      'Secure Systems',
      'LLM Security',
      'OSINT',
    ],
  },
  {
    label: 'Tools & Platforms',
    items: ['React', 'Vite', 'GitHub', 'Vercel', 'OCR', 'PDF workflows'],
  },
];

const StackSection = () => {
  return (
    <section id="stack" className="relative w-full overflow-hidden bg-ink-950 py-16 md:py-24">
      {/* Section number */}
      <div className="mb-10 flex items-center gap-4 px-5 sm:px-8 md:mb-14 md:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
          (03)
        </span>
        <div className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
          Stack
        </span>
      </div>

      {/* Marquee groups */}
      <div className="flex flex-col gap-6">
        {SKILL_GROUPS.map((group, gi) => (
          <div key={group.label} className="relative">
            <div className="mb-2 flex items-baseline gap-3 px-5 sm:px-8 md:px-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/50">
                / {group.label}
              </span>
            </div>
            <Marquee speed={30 + gi * 6} reverse={gi % 2 === 1}>
              {group.items.concat(group.items).map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="group inline-flex shrink-0 items-center gap-3"
                >
                  <span
                    className="font-black uppercase tracking-[-0.03em] text-mist-50/90 transition-colors group-hover:text-mist-50"
                    style={{ fontSize: 'clamp(1.6rem, 4.5vw, 4rem)' }}
                  >
                    {item}
                  </span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: 360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                    className="inline-block h-3 w-3 rounded-full border border-mist-300/40"
                  />
                </span>
              ))}
            </Marquee>
          </div>
        ))}
      </div>

      {/* Bottom — small subtext */}
      <div className="mt-12 flex items-center justify-between px-5 sm:px-8 md:px-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/55">
          // build with the right tool for the job
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/55">
          constantly learning ↗
        </span>
      </div>
    </section>
  );
};

export default StackSection;