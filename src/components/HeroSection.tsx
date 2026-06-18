import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedGradientBg from './AnimatedGradientBg';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

// Split a phrase into reveal-on-mount words
const RevealWord = ({ word, delay }: { word: string; delay: number }) => (
  <span className="inline-block overflow-hidden align-baseline">
    <motion.span
      initial={{ y: '110%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      {word}
    </motion.span>
  </span>
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [showVideo, setShowVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoError = () => setShowVideo(false);
  const toggleMute = () => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    const currentlyMuted = video.muted;
    const newMutedState = !currentlyMuted;
    
    // Directly update the video element
    video.muted = newMutedState;
    
    if (!newMutedState) {
      // Unmuting - ensure volume is set
      video.volume = Math.min(1, 0.75);
      video.play().catch((err) => {
        console.warn('Video play failed:', err);
      });
    }
    
    // Also update state for button text
    setIsMuted(newMutedState);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.25]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 240]);

  // One-tick scroll snap to About
  useEffect(() => {
    let fired = false;

    const goToAbout = () => {
      if (fired) return;
      fired = true;
      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const onWheel = (e: WheelEvent) => {
      if (fired) return;
      if (e.deltaY <= 0) return;
      if (window.scrollY > 60) return;
      e.preventDefault();
      goToAbout();
    };

    const onKey = (e: KeyboardEvent) => {
      if (fired) return;
      if (window.scrollY > 60) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToAbout();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[760px] w-full overflow-hidden bg-ink-950"
      style={{ paddingTop: 0 }}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AnimatedGradientBg />
      </motion.div>

      {/* Top eyebrow line */}
      <div className="absolute left-5 top-24 z-10 md:left-10 md:top-28">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="pill"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-400" />
          </span>
          Available for internships · 2026
        </motion.div>
      </div>

      {/* Top right corner version tag */}
      <div className="absolute right-5 top-28 z-10 hidden md:right-10 md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/60"
        >
          v3.0 / build 2026.06
        </motion.div>
      </div>

      {/* Intro video / placeholder */}
      <div className="absolute right-5 top-24 z-40 flex w-[240px] flex-col gap-2 md:right-10 lg:right-14 xl:right-20">
        {showVideo ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="relative h-32 w-full overflow-hidden rounded-[20px] border border-white/10 bg-black/60 shadow-[0_30px_120px_-35px_rgba(56,189,248,0.25)] pointer-events-auto"
          >
            <video
              ref={videoRef}
              src="/intro.mp4"
              autoPlay
              muted={isMuted}
              loop
              preload="auto"
              playsInline
              onError={handleVideoError}
              className="h-full w-full object-cover pointer-events-none"
            />
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-3 right-3 z-20 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-mist-100 transition hover:bg-white/10 cursor-pointer pointer-events-auto"
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-[28px] border border-white/10 bg-black/60 p-4 text-center text-sm text-mist-200/80 shadow-[0_30px_120px_-35px_rgba(56,189,248,0.25)]"
          >
            <span className="font-semibold text-mist-100">Intro video</span>
            <span className="text-[11px] leading-5 text-mist-300/75">
              Could not load the intro video. Check the file or source path.
            </span>
          </motion.div>
        )}
      </div>

      {/* Centered content */}
      <motion.div
        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center px-5 md:px-10"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Massive gradient title */}
          <h1
            className="font-black uppercase leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2.4rem, 9vw, 6rem)' }}
          >
            <span className="block">
              <RevealWord word="Sujay" delay={0.2} />
              &nbsp;
              <RevealWord word="Lokhande" delay={0.32} />
            </span>
            <span className="mt-2 block text-gradient-electric">
              <RevealWord word="Building" delay={0.5} />
              &nbsp;
              <RevealWord word="secure" delay={0.6} />
              &nbsp;
              <RevealWord word="things." delay={0.7} />
            </span>
          </h1>

          {/* Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between"
          >
            <p
              className="max-w-2xl font-light text-mist-100/85"
              style={{ fontSize: 'clamp(0.85rem, 1vw, 0.98rem)' }}
            >
              AI &amp; cybersecurity student / software intern building{' '}
              <span className="text-mist-50">threat-intel tools</span>,{' '}
              <span className="text-mist-50">secure web apps</span>, and{' '}
              <span className="text-mist-50">hackathon products</span> with Python, C++,
              and modern web stacks.
            </p>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-mist-50 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-950 transition-transform hover:scale-[1.03]"
              >
                <span className="relative z-10">View projects</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-sky-300 to-lime-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/60">
                scroll to explore ↓
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom strip — meta + scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-5 pb-8 md:px-10 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="hidden flex-col gap-1 sm:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/60">
            based / pune, india
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/60">
            focus / ai + security
          </span>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="group flex flex-col items-center gap-3"
          aria-label="Scroll to next section"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-200/70 transition-colors group-hover:text-mist-50">
            scroll
          </span>
          <div className="relative h-12 w-px overflow-hidden bg-white/15">
            <span className="absolute inset-x-0 top-0 h-1/2 w-full bg-gradient-to-b from-sky-300 to-lime-300 animate-scroll-line" />
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="hidden flex-col items-end gap-1 sm:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/60">
            current / software intern
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/60">
            @ mesmerise soft-tech
          </span>
        </motion.div>
      </div>

      {/* Floating skill chips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute right-5 bottom-32 z-10 hidden flex-col gap-2 lg:right-14 lg:flex xl:right-20"
      >
        {['Python', 'C++', 'AI/ML', 'Security', 'React'].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 + i * 0.1, duration: 0.6 }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mist-200 backdrop-blur"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;