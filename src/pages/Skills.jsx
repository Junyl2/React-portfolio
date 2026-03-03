import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Skill data organized for editorial layout
const skillData = {
  primary: [
    { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  ],
  categories: [
    {
      title: 'Languages',
      items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'PHP'],
    },
    {
      title: 'Frameworks',
      items: ['React', 'Next.js', 'Redux', 'Express.js', 'Framer Motion'],
    },
    {
      title: 'Styling',
      items: ['Tailwind CSS', 'Bootstrap', 'CSS Modules', 'Styled Components'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Firebase', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Tools',
      items: ['Git', 'Figma', 'VS Code', 'Vite', 'WordPress'],
    },
    {
      title: 'Analytics',
      items: ['Power BI', 'Excel', 'Data Visualization'],
    },
  ],
};

function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 md:py-32 lg:py-40 lg:pl-[72px] bg-[var(--color-bg-secondary)]"
    >
      <div className="container">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          {/* Breadcrumb style header */}
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Expertise / Stack
            </span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          {/* Large editorial title */}
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[var(--color-text-primary)] leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tech
            <br />
            <span className="text-[var(--color-accent)]">Stack</span>
          </h2>

          <p
            className="text-lg text-[var(--color-text-tertiary)] max-w-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The technologies and tools I use to bring digital products to life.
          </p>
        </motion.div>

        {/* Primary Skills - Large Feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Primary Stack
            </span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillData.primary.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative p-8 md:p-10 bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
              >
                {/* Number */}
                <span
                  className="absolute top-4 left-4 text-[10px] text-[var(--color-text-muted)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3
                  className="text-center text-lg md:text-xl font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {skill.name}
                </h3>

                {/* Corner accent on hover */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-transparent group-hover:border-r-[var(--color-accent)] transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Index - Editorial List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Full Index
            </span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {skillData.categories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-[var(--color-border)]">
                  <span
                    className="text-xs text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {String(catIndex + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-sm font-medium text-[var(--color-text-primary)] uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center gap-3 py-1 cursor-default"
                    >
                      <span className="w-1 h-1 bg-[var(--color-border)] group-hover:bg-[var(--color-accent)] transition-colors duration-300" />
                      <span
                        className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Editorial Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 md:mt-28 pt-8 border-t border-[var(--color-border)]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-[var(--color-accent)] animate-pulse" />
              <p
                className="text-sm text-[var(--color-text-muted)]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Continuously learning and expanding my toolkit
              </p>
            </div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Updated 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
