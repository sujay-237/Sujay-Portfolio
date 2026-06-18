import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import SplitText from './SplitText';

const ABOUT_TEXT =
  "I'm a software intern and dual-program student focused on AI, cybersecurity, and secure product development. Alongside my BTech in CS&IT at Symbiosis Skills and my IIT Patna Foundation Degree in AI and Cybersecurity, I build practical systems with Python, C++, and modern web technologies — turning security research and complex ideas into useful products.";

const STATS = [
  { value: '8+', label: 'Certifications' },
  { value: '4', label: 'Hackathon builds' },
  { value: '2', label: 'Degrees in progress' },
  { value: '1', label: 'Active internship' },
];

const EXPERIENCE = [
  {
    organization: 'Mesmerise Soft-Tech Private Limited',
    role: 'Software Intern',
    period: 'June 2026 — Present',
    location: 'Pune / Pimpri-Chinchwad Area',
  },
  {
    organization: 'Internshala',
    role: 'Internshala Student Partner',
    period: 'August 2025 — October 2025',
  },
];

const EDUCATION = [
  {
    institution: 'Symbiosis Skills & Professional University',
    program: 'B.Tech — CS&IT (Cybersecurity)',
    period: '2025 — 2029',
  },
  {
    institution: 'Indian Institute of Technology, Patna',
    program: 'Foundation Degree — AI & Cybersecurity',
    period: 'August 2025 — August 2026',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden px-5 py-24 sm:px-8 md:px-10 md:py-36">
      {/* Section number + label */}
      <FadeIn className="relative z-10 mb-12 flex items-center gap-4 md:mb-20">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
          (01)
        </span>
        <div className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
          About me
        </span>
      </FadeIn>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20 md:gap-32">
        {/* Heading + split-text intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <FadeIn y={50}>
              <h2
                className="text-gradient-heading font-black uppercase leading-[0.9] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2.8rem, 10vw, 8.5rem)' }}
              >
                A<br />builder<br />first.
              </h2>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-8 lg:pt-6">
            <SplitText
              text={ABOUT_TEXT}
              className="font-light leading-relaxed text-mist-100/90"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.3rem)' }}
            />

            {/* Stats */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-4">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-1 bg-ink-950 p-5"
                  >
                    <span
                      className="text-gradient-lime font-black leading-none"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}
                    >
                      {s.value}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-300/70">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Experience + Education timeline */}
        <FadeIn>
          <div className="grid w-full gap-12 border-t border-white/10 pt-14 md:grid-cols-2 md:gap-16">
            <Timeline title="Experience" entries={EXPERIENCE} accent="from-sky-400 to-cyan-300" />
            <Timeline title="Education" entries={EDUCATION} accent="from-lime-300 to-emerald-300" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

interface TimelineEntry {
  organization?: string;
  institution?: string;
  role?: string;
  program?: string;
  period: string;
  location?: string;
}

interface TimelineProps {
  title: string;
  entries: TimelineEntry[];
  accent: string;
}

const Timeline = ({ title, entries, accent }: TimelineProps) => (
  <div className="flex flex-col gap-8">
    <div className="flex items-center gap-3">
      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${accent}`} />
      <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-mist-200/80">{title}</h3>
    </div>
    <div className="flex flex-col gap-8">
      {entries.map((entry, i) => (
        <motion.article
          key={`${entry.organization ?? entry.institution}-${entry.period}`}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative border-l border-white/15 pl-6"
        >
          <span className={`absolute -left-[4px] top-2 h-2 w-2 rounded-full bg-gradient-to-br ${accent}`} />
          <h4 className="text-lg font-medium leading-snug text-mist-50 sm:text-xl">
            {entry.organization ?? entry.institution}
          </h4>
          <p className="mt-1.5 text-base text-mist-200/75">
            {entry.role ?? entry.program}
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-mist-300/55">
            {entry.period}
          </p>
          {entry.location && (
            <p className="mt-1 text-sm text-mist-300/45">{entry.location}</p>
          )}
        </motion.article>
      ))}
    </div>
  </div>
);

export default AboutSection;