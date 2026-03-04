import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutImg from '@assets/junyl.jpg';
import {
  FiDownload,
  FiExternalLink,
  FiCode,
  FiLayout,
  FiPieChart,
} from 'react-icons/fi';

// Services data
const services = [
  {
    icon: FiCode,
    title: 'Digital Solutions',
    description:
      'Helping businesses establish and grow their online presence with modern, scalable web applications.',
  },
  {
    icon: FiLayout,
    title: 'Brand Experience',
    description:
      'Transforming your vision into engaging digital experiences that connect with your audience and drive results.',
  },
  {
    icon: FiPieChart,
    title: 'Business Intelligence',
    description:
      'Empowering data-driven decisions with interactive dashboards and actionable insights.',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden lg:pl-[72px]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

      <div className="container relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 max-w-2xl">
            <span className="inline-flex items-center gap-3 text-sm text-[var(--color-text-tertiary)] mb-6">
              <span className="w-12 h-px bg-[var(--color-accent)]" />
              <span className="font-medium tracking-wide uppercase text-xs">About</span>
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] leading-[1.1] tracking-[-0.03em]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Building digital
              <br />
              <span className="text-[var(--color-accent)]">experiences</span> that matter
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left Column - Image */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="relative">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-tertiary)]">
                  <img
                    src={aboutImg}
                    alt="Junyl Cabusas"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Status badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm">
                      <span className="w-2 h-2 bg-[var(--color-accent)] animate-pulse" />
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">
                        Available for work
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -right-6 top-1/4 p-5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-xl"
                >
                  <div
                    className="text-3xl font-semibold text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    50+
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">
                    Projects
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="lg:col-span-7 space-y-10">
              {/* Bio */}
              <motion.div variants={itemVariants} className="space-y-5">
                <p
                  className="text-lg text-[var(--color-text-secondary)] leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  I'm a website developer passionate about building modern web applications
                  that solve real problems. I specialize in converting designs into responsive,
                  production-ready code using the latest frameworks and technologies.
                </p>
                <p
                  className="text-base text-[var(--color-text-tertiary)] leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  My approach combines technical precision with an eye for design details.
                  I've worked on various projects including business websites, mobile app, e-commerce platforms,
                  and dashboards — always focusing on performance, accessibility,
                  and clean code architecture.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="/junyl-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
                >
                  <FiDownload className="text-white" />
                  <span
                    className="text-sm font-medium text-white"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Download Resume
                  </span>
                </a>

                <a
                  href="/certificates.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300"
                >
                  <span
                    className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    View Certificates
                  </span>
                  <FiExternalLink className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="mt-32">
            <div className="flex items-center gap-4 mb-10">
              <h3
                className="text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                How I help businesses grow
              </h3>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="group p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[var(--color-accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)]/15 transition-colors duration-300">
                      <IconComponent className="text-xl text-[var(--color-accent)]" />
                    </div>

                    {/* Title */}
                    <h4
                      className="text-lg font-semibold text-[var(--color-text-primary)] mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="text-sm text-[var(--color-text-tertiary)] leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
