import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import Marquee from './Marquee';

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'infosec.sujay23@gmail.com',
    href: 'mailto:infosec.sujay23@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/sujay-lokhande',
    href: 'https://www.linkedin.com/in/sujay-lokhande-596479377/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@sujay-237',
    href: 'https://github.com/sujay-237',
  },
];

// Magnetic button wrapper
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.3);
    y.set(my * 0.3);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-ink-950 pt-12 md:pt-16"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative z-10 px-5 sm:px-8 md:px-10">
        <div className="mb-6 flex items-center gap-4 md:mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
            (06)
          </span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
            Contact
          </span>
        </div>

        {/* Big headline with letter-by-letter reveal */}
        <h2
          className="text-gradient-heading mx-auto max-w-6xl text-center font-black uppercase leading-[0.86] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)' }}
        >
          {'Let\u2019s build\n'.split('').map((ch, i) =>
            ch === ' ' ? <span key={i}>&nbsp;</span> : (
              <span key={i} className="inline-block overflow-hidden align-baseline">
                <motion.span
                  initial={{ y: '110%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.1 + i * 0.025, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              </span>
            )
          )}
          <span className="text-gradient-electric">
            {'something secure.'.split('').map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden align-baseline">
                <motion.span
                  initial={{ y: '110%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.7 + i * 0.03, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              </span>
            ))}
          </span>
        </h2>

        {/* Subhead + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-8 text-center md:mt-10"
        >
          <p
            className="font-light text-mist-200/80"
            style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
          >
            Open to hackathons, AI security builds, internship conversations, and
            student collaborations. Drop a line — I read everything.
          </p>

          <Magnetic>
            <a
              href="mailto:infosec.sujay23@gmail.com"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-mist-50 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-950 shadow-[0_20px_60px_-15px_rgba(56,189,248,0.5)] transition-transform"
            >
              <span className="relative z-10">Start a conversation</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-sky-300 via-lime-300 to-sky-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          </Magnetic>
        </motion.div>

        {/* Contact cards */}
        <div id="contact-cards" className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {CONTACT_METHODS.map((method, i) => {
            const Icon = method.icon;
            const isExternal = method.href.startsWith('http');
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="card-glow group relative flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-full border border-white/15 bg-white/[0.04] p-3 transition-all duration-500 group-hover:border-sky-300/60 group-hover:bg-sky-300/10">
                    <Icon className="text-mist-50" size={22} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    className="text-mist-300/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-mist-50"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist-300/55">
                    / {method.label.toLowerCase()}
                  </span>
                  <span className="break-all font-medium text-mist-50" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}>
                    {method.value}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Newsletter-ish line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 text-center md:mt-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/55">
            // open to internships & collabs
          </span>
          <p
            className="font-light text-mist-200/70"
            style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
          >
            Pune, Maharashtra / available remote &amp; hybrid / response time &lt; 24h
          </p>
        </motion.div>
      </div>

      {/* Footer marquee */}
      <div className="relative mt-24 border-t border-white/10 pt-12 md:mt-32">
        <Marquee speed={42} className="py-4">
          <span
            className="font-black uppercase tracking-[-0.04em] text-mist-50/10"
            style={{ fontSize: 'clamp(4rem, 16vw, 14rem)' }}
          >
            SUJAY LOKHANDE&nbsp;
            <span className="text-gradient-electric">★</span>&nbsp;
          </span>
        </Marquee>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 px-5 py-7 sm:flex-row sm:px-8 md:px-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist-300/55">
            © 2026 Sujay Lokhande / built with React + Framer Motion
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist-300/55">
            v3.0 · last deploy: today
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;