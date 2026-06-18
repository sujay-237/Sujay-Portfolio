import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleContactScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById('contact-cards') || document.getElementById('contact');
    if (!target) return;
    const headerOffset = 88;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/70 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
          <a href="#top" className="group flex items-center gap-2">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 to-lime-300">
              <span className="font-mono text-[11px] font-bold text-ink-950">SL</span>
            </span>
            <span className="hidden font-medium text-mist-100 sm:inline">/sujay.dev</span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + i * 0.08 }}
                  className="group relative text-xs font-medium uppercase tracking-[0.18em] text-mist-200/70 transition-colors hover:text-mist-50"
                >
                  <span className="mr-1.5 font-mono text-[10px] text-mist-300/60">
                    0{i + 1}
                  </span>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contact-cards"
              onClick={handleContactScroll}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="group relative hidden overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-mist-50 backdrop-blur-md transition-all hover:border-sky-400/40 hover:bg-white/[0.07] md:inline-flex"
            >
              <span className="relative z-10">Hire me</span>
              <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-sky-400/30 to-lime-300/20 transition-transform duration-500 group-hover:translate-y-0" />
            </motion.a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-mist-100"
              aria-label="Toggle menu"
            >
              <span className="block h-px w-4 bg-current" style={{
                transform: mobileOpen ? 'translateY(2px) rotate(45deg)' : 'translateY(-2px)',
              }} />
              <span className="block h-px w-4 bg-current" style={{
                transform: mobileOpen ? 'translateY(-2px) rotate(-45deg)' : 'translateY(2px)',
              }} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="relative flex h-full flex-col items-center justify-center gap-7 px-8"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-medium uppercase tracking-tight text-mist-50"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;