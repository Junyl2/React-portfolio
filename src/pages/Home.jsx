import { useEffect, useState, useRef } from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import profileImg from '@assets/about-pp.png';

// Animated counter component
const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const startValue = 0;
    const endValue = parseInt(value);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityRange = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gradient accent */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[60%] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 70% 20%, var(--color-accent-subtle) 0%, transparent 60%)',
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity: opacityRange }}
        className="relative z-10 w-full lg:pl-[72px]"
      >
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column - Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* Eyebrow */}
              <motion.div variants={itemVariants} className="mb-8">
                <span className="inline-flex items-center gap-3 text-sm text-[var(--color-text-tertiary)]">
                  <span className="w-12 h-px bg-[var(--color-accent)]" />
                  <span className="font-medium tracking-wide">Website Developer</span>
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={itemVariants} className="mb-8">
                <span className="block text-[var(--color-text-primary)] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold leading-[1.08] tracking-[-0.04em]" style={{ fontFamily: 'var(--font-display)' }}>
                  I design & build
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold leading-[1.08] tracking-[-0.04em] mt-2" style={{ fontFamily: 'var(--font-display)' }}>
                  <span className="text-[var(--color-accent)]">digital experiences</span>
                </span>
                <span className="block text-[var(--color-text-primary)] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold leading-[1.08] tracking-[-0.04em] mt-2" style={{ fontFamily: 'var(--font-display)' }}>
                  that deliver.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-[var(--color-text-tertiary)] max-w-xl leading-relaxed mb-12"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Specializing in <span className="text-[var(--color-text-secondary)]">React</span> & <span className="text-[var(--color-text-secondary)]">Next.js</span> —
                transforming designs into performant, accessible web applications.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                {/* Primary CTA */}
                <Link
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-accent)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
                >
                  <span className="text-white font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                    View My Work
                  </span>
                  <FiArrowRight className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {[
                    { icon: FiGithub, href: 'https://github.com/Junyl2', label: 'GitHub' },
                    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/Junyl2', label: 'LinkedIn' },
                    { icon: FiMail, href: 'mailto:artbyjunylc@gmail.com', label: 'Email' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      aria-label={label}
                      className="group w-12 h-12 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300"
                    >
                      <Icon className="text-lg text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                variants={itemVariants}
                className="mt-16 pt-8 border-t border-[var(--color-border)]"
              >
                <div className="flex flex-wrap gap-10 md:gap-16">
                  {[
                    { value: 50, suffix: '+', label: 'Projects' },
                    { value: 1, suffix: '+', label: 'Years Exp.' },
                    { value: 100, suffix: '%', label: 'Satisfaction' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <span
                        className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                      </span>
                      <span
                        className="text-sm text-[var(--color-text-muted)]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end pt-20 md:pt-24 lg:pt-0"
            >
              <div className="relative">
                {/* Main image container - sharp edges */}
                <div className="relative w-[220px] h-[280px] sm:w-[260px] sm:h-[320px] lg:w-[380px] lg:h-[480px]">
                  {/* Background accent shape */}
                  <div
                    className="absolute -bottom-4 -right-4 w-full h-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20"
                  />

                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                    <img
                      src={profileImg}
                      alt="Junyl Cabusas"
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Corner accent - top left */}
                  <div className="absolute -top-3 -left-3 w-8 h-8">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-accent)]" />
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-[var(--color-accent)]" />
                  </div>

                  {/* Corner accent - bottom right */}
                  <div className="absolute -bottom-3 -right-3 w-8 h-8">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[var(--color-accent)]" />
                    <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[var(--color-accent)]" />
                  </div>

                  {/* Status badge */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm border border-[var(--color-border)]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] animate-pulse" />
                      <span
                        className="text-xs font-medium text-[var(--color-text-primary)]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Available for work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Unique Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity: opacityRange }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-[calc(72px+3rem)] lg:translate-x-0 z-20"
      >
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-80}
          className="group flex items-center gap-4 cursor-pointer"
        >
          {/* Vertical line with animated segment */}
          <div className="relative h-16 w-px bg-[var(--color-border)] overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent"
            />
          </div>

          {/* Text */}
          <span
            className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.2em] group-hover:text-[var(--color-accent)] transition-colors duration-300 writing-vertical"
            style={{
              fontFamily: 'var(--font-body)',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)'
            }}
          >
            Scroll
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
