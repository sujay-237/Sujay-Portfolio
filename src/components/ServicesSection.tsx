import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    title: 'AI & Cybersecurity Systems',
    description:
      'Building intelligent tools around threat intelligence, system optimization, sandbox execution, and security analysis.',
    tags: ['Python', 'LLM', 'Sandbox'],
  },
  {
    number: '02',
    title: 'Python & C++ Development',
    description:
      'Using Python and C++ to prototype practical applications, backend modules, automation flows, and problem-solving logic.',
    tags: ['Python', 'C++', 'CLI'],
  },
  {
    number: '03',
    title: 'Security Research & Ethical Hacking',
    description:
      'Applying ethical hacking, social engineering defense, OSINT, LLM security, and GRC fundamentals to responsible testing and secure design.',
    tags: ['Red Team', 'OSINT', 'GRC'],
  },
  {
    number: '04',
    title: 'Hackathon Leadership',
    description:
      'Leading teams through fast builds like NeuroNet, Drishti AI, and WiseUp — from product direction to implementation and demo.',
    tags: ['Team Lead', 'Demo', 'MVP'],
  },
  {
    number: '05',
    title: 'Responsive Product Interfaces',
    description:
      'Designing dark-themed dashboards and accessible web interfaces that make complex AI outputs easier to understand and use.',
    tags: ['React', 'UI/UX', 'A11y'],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white px-5 rounded-t-[40px] py-20 sm:rounded-t-[50px] sm:px-8 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-900/55">
            (02)
          </span>
          <div className="h-px flex-1 bg-ink-900/15" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-900/55">
            Expertise
          </span>
        </div>

        {/* Massive heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center font-black uppercase leading-[0.88] tracking-[-0.04em] text-ink-900 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
        >
          What I <span className="text-gradient-lime" style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg,#0c0c0c 0%,#38bdf8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>ship.</span>
        </motion.h2>

        {/* Services list */}
        <div className="flex flex-col">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-t border-ink-900/15 py-8 transition-colors duration-500 hover:bg-ink-900/[0.02] sm:py-10 md:py-12"
            >
              {/* Bottom border for last item */}
              {i === SERVICES.length - 1 && (
                <div className="absolute -bottom-px left-0 right-0 h-px bg-ink-900/15" />
              )}

              <div className="flex flex-col items-start gap-6 md:flex-row md:items-start md:gap-10 md:gap-14">
                <span
                  className="shrink-0 font-black leading-none text-ink-900"
                  style={{ fontSize: 'clamp(2.5rem, 9vw, 7.5rem)' }}
                >
                  {service.number}
                </span>

                <div className="flex flex-1 flex-col gap-4 pt-1 md:pt-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="font-medium uppercase tracking-tight text-ink-900"
                      style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.1rem)' }}
                    >
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      className="mt-2 shrink-0 text-ink-900/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-ink-900"
                      size={28}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p
                    className="max-w-2xl font-light leading-relaxed text-ink-900/70"
                    style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
                  >
                    {service.description}
                  </p>

                  {/* Tag chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-900/15 bg-ink-900/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-900/70 transition-colors group-hover:border-ink-900/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;