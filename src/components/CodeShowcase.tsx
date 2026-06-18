import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CODE_LINES: { tokens: { text: string; type?: 'kw' | 'fn' | 'str' | 'num' | 'cmt' | 'var' | 'punct' }[] }[] = [
  {
    tokens: [
      { text: '# ', type: 'cmt' },
      { text: 'sujay/portfolio.py — built for the AI era', type: 'cmt' },
    ],
  },
  {
    tokens: [{ text: 'from ' }, { text: 'typing', type: 'kw' }, { text: ' import ' }, { text: 'List, Dict', type: 'var' }],
  },
  {
    tokens: [],
  },
  {
    tokens: [
      { text: 'class ' },
      { text: 'ThreatHunter', type: 'kw' },
      { text: ':' },
    ],
  },
  {
    tokens: [
      { text: '    ' },
      { text: 'def ' },
      { text: '__init__', type: 'fn' },
      { text: '(' },
      { text: 'self', type: 'var' },
      { text: ', ' },
      { text: 'intel', type: 'var' },
      { text: ': ' },
      { text: 'List', type: 'kw' },
      { text: '[' },
      { text: 'str', type: 'kw' },
      { text: ']):' },
    ],
  },
  {
    tokens: [
      { text: '        ' },
      { text: 'self', type: 'var' },
      { text: '.intel = intel' },
    ],
  },
  {
    tokens: [
      { text: '        ' },
      { text: 'self', type: 'var' },
      { text: '.sandbox = ' },
      { text: 'True' },
    ],
  },
  {
    tokens: [],
  },
  {
    tokens: [
      { text: '    ' },
      { text: 'def ' },
      { text: 'analyze', type: 'fn' },
      { text: '(' },
      { text: 'self', type: 'var' },
      { text: ') -> ' },
      { text: 'Dict', type: 'kw' },
      { text: '[' },
      { text: 'str', type: 'kw' },
      { text: ', ' },
      { text: 'int', type: 'kw' },
      { text: ']:' },
    ],
  },
  {
    tokens: [
      { text: '        ' },
      { text: 'return ' },
      { text: '{' },
    ],
  },
  {
    tokens: [
      { text: '            ' },
      { text: '"status"', type: 'str' },
      { text: ': ' },
      { text: '"scanning"', type: 'str' },
      { text: ',' },
    ],
  },
  {
    tokens: [
      { text: '            ' },
      { text: '"hits"', type: 'str' },
      { text: ': ' },
      { text: '42', type: 'num' },
      { text: ',' },
    ],
  },
  {
    tokens: [
      { text: '            ' },
      { text: '"level"', type: 'str' },
      { text: ': ' },
      { text: '"critical"', type: 'str' },
      { text: ',' },
    ],
  },
  {
    tokens: [
      { text: '        ' },
      { text: '}' },
    ],
  },
  {
    tokens: [],
  },
  {
    tokens: [
      { text: '# ' },
      { text: '→ ', type: 'cmt' },
      { text: 'ship secure products, learn faster', type: 'cmt' },
    ],
  },
];

const TOKEN_COLOR: Record<string, string> = {
  kw: 'text-violet-300',
  fn: 'text-sky-300',
  var: 'text-lime-300',
  str: 'text-amber-200',
  num: 'text-orange-300',
  cmt: 'text-mist-300/40 italic',
  punct: 'text-mist-300/70',
};

const CodeShowcase = () => {
  const [typedCount, setTypedCount] = useState(0);
  const [activeLine, setActiveLine] = useState(0);

  // Build a single string of the entire code so we can "type" it out.
  const fullText = CODE_LINES.map((l) => l.tokens.map((t) => t.text).join('')).join('\n');

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 2;
      if (i >= fullText.length) {
        setTypedCount(fullText.length);
        window.clearInterval(id);
      } else {
        setTypedCount(i);
      }
    }, 14);
    return () => window.clearInterval(id);
  }, [fullText]);

  // Track active line for the gutter highlight
  useEffect(() => {
    let line = 0;
    let consumed = 0;
    for (const l of CODE_LINES) {
      const len = l.tokens.map((t) => t.text).join('').length + 1;
      if (typedCount <= consumed + len) {
        setActiveLine(line);
        break;
      }
      consumed += len;
      line += 1;
    }
  }, [typedCount]);

  // Render highlighted tokens line by line, slicing each line to typedCount
  let consumed = 0;
  const rendered = CODE_LINES.map((line, lineIdx) => {
    const lineStr = line.tokens.map((t) => t.text).join('');
    const lineStart = consumed;
    const lineEnd = consumed + lineStr.length;
    consumed = lineEnd + 1; // +1 for \n

    const charsToShow = Math.max(0, Math.min(lineStr.length, typedCount - lineStart));
    const isCurrent = activeLine === lineIdx && typedCount < fullText.length;

    return (
      <div
        key={lineIdx}
        className={`flex gap-4 px-4 transition-colors duration-150 ${
          isCurrent ? 'bg-sky-400/5' : ''
        }`}
      >
        <span className="w-6 select-none text-right font-mono text-[11px] text-mist-300/30">
          {lineIdx + 1}
        </span>
        <pre className="whitespace-pre font-mono text-[12px] leading-relaxed text-mist-100 sm:text-[13px]">
          {line.tokens.map((t, ti) => {
            // Approximate slice: figure out the character window for this token within lineStr
            let tokenStart = 0;
            for (let k = 0; k < ti; k++) {
              tokenStart += line.tokens[k].text.length;
            }
            const tokenEnd = tokenStart + t.text.length;

            const visibleStart = Math.max(0, charsToShow - tokenStart);
            const visibleText = t.text.slice(0, visibleStart);

            return (
              <span key={ti} className={TOKEN_COLOR[t.type ?? ''] ?? 'text-mist-100'}>
                {visibleText}
              </span>
            );
          })}
          {isCurrent && <span className="ml-0.5 inline-block h-3 w-1.5 -mb-0.5 bg-sky-300 animate-blink align-middle" />}
        </pre>
      </div>
    );
  });

  return (
    <section className="relative w-full overflow-hidden bg-ink-950 px-5 py-24 sm:px-8 md:px-10 md:py-36">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 md:gap-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist-300/60">
            (04.5) // philosophy
          </span>
          <h2
            className="text-gradient-heading font-black uppercase leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 7rem)' }}
          >
            Built <span className="text-gradient-electric">secure.</span><br />
            Built <span className="text-gradient-electric">fast.</span>
          </h2>
          <p
            className="max-w-2xl font-light leading-relaxed text-mist-200/80"
            style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
          >
            I prototype with Python, harden with C++, ship interfaces in React. Here&apos;s
            the shape of the work that comes out.
          </p>
        </motion.div>

        {/* Code window */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="shimmer-border relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-[0_30px_120px_-30px_rgba(56,189,248,0.25)] backdrop-blur"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-white/5 bg-ink-800/70 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist-300/70">
              ~/sujay/portfolio.py
            </span>
            <span className="font-mono text-[11px] text-mist-300/40">python</span>
          </div>

          {/* Code */}
          <div className="max-h-[460px] overflow-auto py-3">{rendered}</div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-white/5 bg-ink-800/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mist-300/60">
            <span>utf-8</span>
            <span>{typedCount}/{fullText.length} chars</span>
            <span className="text-lime-300">● ready</span>
          </div>
        </motion.div>

        {/* Below: small tagline */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-300/55">
            // the same pattern across every build
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-mist-100/80" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}>
            <span>research</span><span className="text-mist-300/40">→</span>
            <span>prototype</span><span className="text-mist-300/40">→</span>
            <span>secure</span><span className="text-mist-300/40">→</span>
            <span>ship</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;