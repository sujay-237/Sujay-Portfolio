import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import AnimatedText from './AnimatedText';

const ABOUT_TEXT =
  "I'm a software intern and dual-program student focused on AI, cybersecurity, and secure product development. Alongside my BTech in CS&IT (Cybersecurity) at Symbiosis Skills & Professional University and Foundation Degree studies in AI and Cybersecurity at IIT Patna, I build practical systems with Python, C++, and modern web technologies. I enjoy turning security research and complex ideas into useful products, both independently and with hackathon teams.";

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Focus Areas',
    items: [
      'Artificial Intelligence',
      'Cybersecurity',
      'Ethical Hacking',
      'Secure Systems',
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      'React',
      'GitHub',
      'Vercel',
      'OCR',
      'PDF workflows',
      'Responsive UI',
    ],
  },
];

const EXPERIENCE = [
  {
    organization: 'Mesmerise Soft-Tech Private Limited',
    role: 'Software Intern',
    period: 'June 2026 - Present',
    location: 'Pune / Pimpri-Chinchwad Area',
  },
  {
    organization: 'Internshala',
    role: 'Internshala Student Partner',
    period: 'August 2025 - October 2025',
  },
];

const EDUCATION = [
  {
    institution: 'Symbiosis Skills & Professional University',
    program: 'Bachelor of Technology - CS&IT (Cybersecurity)',
    period: '2025 - 2029',
  },
  {
    institution: 'Indian Institute of Technology, Patna',
    program: 'Foundation Degree - AI and Cybersecurity',
    period: 'August 2025 - August 2026',
  },
];

const CERTIFICATIONS = [
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    issued: 'June 2026',
  },
  {
    name: 'Certified LLM Security Professional (CLLMSP)',
    issuer: 'Red Team Leaders',
    issued: 'June 2026',
  },
  {
    name: 'Certified Social Engineering Defense Practitioner (CSEDP)',
    issuer: 'The SecOps Group',
    issued: 'June 2026',
  },
  {
    name: 'LLM Hacking Fundamentals',
    issuer: 'CyberExam',
    issued: 'June 2026',
  },
  {
    name: 'OSINT Fundamentals',
    issuer: 'CyberExam',
    issued: 'June 2026',
  },
  {
    name: 'GRC Fundamentals',
    issuer: 'CyberExam',
    issued: 'June 2026',
  },
  {
    name: 'AI Tools Workshop',
    issuer: 'Be10x',
    issued: 'February 2026',
  },
  {
    name: 'Ethical Hacking with AI',
    issuer: 'Internshala',
    issued: 'November 2025',
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-5 py-20 sm:px-8 md:px-10 md:py-28"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-14 sm:gap-16 md:gap-24">
        <div className="flex flex-col items-center gap-10 text-center sm:gap-14">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-3xl font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.1} className="w-full">
          <div className="grid w-full gap-12 border-y border-[#D7E2EA]/15 py-12 md:grid-cols-2 md:gap-16 md:py-16">
            <Timeline title="Experience" entries={EXPERIENCE} />
            <Timeline title="Education" entries={EDUCATION} />
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="w-full">
          <div className="flex flex-col gap-6">
            <SectionLabel>Skills</SectionLabel>
            <div className="flex flex-col gap-5 sm:gap-6">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-5"
                >
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 sm:w-44 sm:shrink-0 sm:text-right">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-3 py-1 text-sm text-[#D7E2EA]/80 transition-colors hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full">
          <div className="flex flex-col gap-6">
            <SectionLabel>Certifications</SectionLabel>
            <div className="grid gap-px overflow-hidden rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/15 sm:grid-cols-2">
              {CERTIFICATIONS.map((certification) => (
                <article
                  key={`${certification.name}-${certification.issuer}`}
                  className="flex min-h-36 flex-col justify-between gap-6 bg-[#0C0C0C] p-5 sm:p-6"
                >
                  <h3 className="text-base font-medium leading-snug text-[#D7E2EA] sm:text-lg">
                    {certification.name}
                  </h3>
                  <div className="flex items-end justify-between gap-4">
                    <span className="text-sm text-[#D7E2EA]/60">
                      {certification.issuer}
                    </span>
                    <span className="shrink-0 text-xs uppercase tracking-widest text-[#D7E2EA]/40">
                      {certification.issued}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <ContactButton />
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
}

const Timeline = ({ title, entries }: TimelineProps) => (
  <div className="flex flex-col gap-7">
    <SectionLabel>{title}</SectionLabel>
    <div className="flex flex-col gap-8">
      {entries.map((entry) => (
        <article
          key={`${entry.organization ?? entry.institution}-${entry.period}`}
          className="relative border-l border-[#D7E2EA]/20 pl-5"
        >
          <span className="absolute -left-[3px] top-2 h-[5px] w-[5px] rounded-full bg-[#D7E2EA]" />
          <h3 className="text-lg font-medium leading-snug text-[#D7E2EA] sm:text-xl">
            {entry.organization ?? entry.institution}
          </h3>
          <p className="mt-1 text-base text-[#D7E2EA]/80">
            {entry.role ?? entry.program}
          </p>
          <p className="mt-3 text-xs uppercase tracking-widest text-[#D7E2EA]/45">
            {entry.period}
          </p>
          {entry.location && (
            <p className="mt-1 text-sm text-[#D7E2EA]/45">{entry.location}</p>
          )}
        </article>
      ))}
    </div>
  </div>
);

interface SectionLabelProps {
  children: string;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/50">
    {children}
  </h3>
);

export default AboutSection;
