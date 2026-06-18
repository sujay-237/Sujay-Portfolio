import { motion } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  issued: string;
  tag?: string;
}

const CERTIFICATIONS: Certification[] = [
  { name: 'Ethical Hacker', issuer: 'Cisco Networking Academy', issued: 'Jun 2026', tag: 'Red Team' },
  { name: 'Certified LLM Security Professional (CLLMSP)', issuer: 'Red Team Leaders', issued: 'Jun 2026', tag: 'AI Security' },
  { name: 'Certified Social Engineering Defense Practitioner (CSEDP)', issuer: 'The SecOps Group', issued: 'Jun 2026', tag: 'Defense' },
  { name: 'LLM Hacking Fundamentals', issuer: 'CyberExam', issued: 'Jun 2026', tag: 'AI Security' },
  { name: 'OSINT Fundamentals', issuer: 'CyberExam', issued: 'Jun 2026', tag: 'Recon' },
  { name: 'GRC Fundamentals', issuer: 'CyberExam', issued: 'Jun 2026', tag: 'Governance' },
  { name: 'AI Tools Workshop', issuer: 'Be10x', issued: 'Feb 2026', tag: 'AI Tools' },
  { name: 'Ethical Hacking with AI', issuer: 'Internshala', issued: 'Nov 2025', tag: 'AI + Hacking' },
];

const CertificationsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-ink-950 px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-4 md:mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
            (05)
          </span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
            Certifications
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient-heading mb-12 max-w-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:mb-20"
          style={{ fontSize: 'clamp(2.6rem, 9vw, 7.5rem)' }}
        >
          Always<br />learning.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.article
              key={`${cert.name}-${cert.issuer}`}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -4 }}
              className="group relative flex min-h-[160px] flex-col justify-between gap-6 bg-ink-900 p-6 transition-colors duration-500 hover:bg-ink-800 sm:p-7"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                {cert.tag && (
                  <span className="rounded-full border border-sky-300/30 bg-sky-300/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-sky-300">
                    {cert.tag}
                  </span>
                )}
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-300/45">
                  {cert.issued}
                </span>
              </div>

              {/* Title + issuer */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-medium leading-snug text-mist-50 sm:text-lg">
                  {cert.name}
                </h3>
                <span className="text-sm text-mist-200/65">{cert.issuer}</span>
              </div>

              {/* Hover glow */}
              <span className="pointer-events-none absolute -bottom-px left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300 to-transparent transition-all duration-700 group-hover:w-3/4" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;