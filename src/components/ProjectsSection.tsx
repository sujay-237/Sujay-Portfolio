import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  liveUrl: string;
  buttonLabel?: string;
  imageFit?: 'cover' | 'contain';
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  accent: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Hackathon / AI Cybersecurity',
    name: 'NeuroNet',
    description:
      'An AI-powered cybersecurity toolkit for advanced threat intelligence, OS simulation, sandbox execution, dynamic security analysis, and system optimization.',
    liveUrl: 'https://neuronet-phi.vercel.app/',
    col1Image1: '/NeuroNet.png',
    col1Image2: '/NeuroNet1.png',
    col2Image: '/NeuroNet2.png',
    accent: 'from-sky-400 to-cyan-300',
  },
  {
    number: '02',
    category: 'Healthcare / Queue Management',
    name: 'Kinestro',
    description:
      'A healthcare queue management system with patient-facing displays, receptionist controls, triage priorities, live token updates, estimated wait times, and queue analytics.',
    liveUrl: 'https://github.com/sujay-237/Kinestro',
    buttonLabel: 'GitHub Repo',
    col1Image1: '/Kinestro.png',
    col1Image2: '/Kinestro1.png',
    col2Image: '/Kinestro2.png',
    accent: 'from-lime-300 to-emerald-300',
  },
  {
    number: '03',
    category: 'Hackathon / AI Finance',
    name: 'WiseUp',
    description:
      'An intelligent financial management app with AI-driven resource advice, budget tracking, OCR capabilities, and English/Hindi interface support.',
    liveUrl: 'https://github.com/sujay-237/Wiseup',
    buttonLabel: 'GitHub Repo',
    imageFit: 'contain',
    col1Image1: '/WiseUp.png',
    col1Image2: '/WiseUp1.png',
    col2Image: '/WiseUp2.png',
    accent: 'from-violet-400 to-fuchsia-300',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageClass =
    project.imageFit === 'contain'
      ? 'h-full w-full object-contain bg-ink-800'
      : 'h-full w-full object-cover';

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const borderGlow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(125,211,252,0.18)', 'rgba(196,255,93,0.32)', 'rgba(125,211,252,0.18)']
  );

  return (
    <div
      ref={cardRef}
      className="sticky w-full"
      style={{ top: `${96 + index * 28}px`, height: '85vh' }}
    >
      <motion.article
        style={{
          scale,
          boxShadow: useTransform(borderGlow, (c) => `0 -8px 80px -20px ${c}`),
        }}
        className="card-glow shimmer-border relative mx-auto flex h-full w-full flex-col gap-4 rounded-[40px] border border-white/10 bg-ink-900 p-4 sm:gap-6 sm:rounded-[50px] sm:p-6 md:gap-8 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-6">
          <div className="flex w-full min-w-0 flex-row items-start gap-3 sm:gap-6 md:gap-10">
            <div
              className="shrink-0 font-black leading-none text-mist-50"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 8.5rem)' }}
            >
              {project.number}
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1 pt-1 sm:gap-3 sm:pt-3 md:pt-4">
              <span
                className="font-mono uppercase tracking-[0.25em] text-mist-300/70"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.95rem)' }}
              >
                / {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-mist-50"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p
                className="max-w-2xl text-mist-200/70"
                style={{ fontSize: 'clamp(0.8rem, 1.25vw, 1rem)' }}
              >
                {project.description}
              </p>
            </div>
          </div>

          <div className="w-full shrink-0 self-start pt-1 sm:w-auto sm:self-auto sm:pt-2 md:pt-3">
            <LiveProjectButton
              href={project.liveUrl}
              label={project.buttonLabel}
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-5">
          <div className="flex min-h-0 flex-col gap-3 sm:gap-4 md:gap-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className={`${imageClass} transition-transform duration-700 hover:scale-105`}
                loading="lazy"
                draggable={false}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className={`${imageClass} transition-transform duration-700 hover:scale-105`}
                loading="lazy"
                draggable={false}
              />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="min-h-0 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
          >
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className={`${imageClass} transition-transform duration-700 hover:scale-105`}
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 w-full rounded-t-[40px] bg-ink-950 px-4 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <div className="mb-12 flex items-center gap-4 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
          (04)
        </span>
        <div className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
          Selected work
        </span>
      </div>

      <FadeIn y={50}>
        <h2
          className="text-gradient-heading mb-12 text-center font-black uppercase leading-[0.88] tracking-[-0.04em] md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
        >
          Things<br />I&apos;ve built.
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;