import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

// Import images
import projectMain from '@assets/projects/project.png';
import project1New from '@assets/projects/1.png';
import project4th from '@assets/projects/4th.png';
import project7th from '@assets/projects/7th.png';
import project1 from '@assets/projects/project-1.png';
import project2 from '@assets/projects/project-2.png';
import project3 from '@assets/projects/project-3.png';
import project4 from '@assets/projects/project-4.png';
import project5 from '@assets/projects/project-5.png';
import project6 from '@assets/projects/project-6.png';
import project7 from '@assets/projects/project-7.png';
import secondLast from '@assets/projects/second-last.png';
import mobile from '@assets/projects/mobile.png';
import project5th from '@assets/projects/5th.png';
import project6th from '@assets/projects/6th.png';
import after6 from '@assets/projects/after-6.png';
import project8th from '@assets/projects/8.png';

// Project Card Component with scroll-driven image animation
const ProjectCard = ({ project, index, isLast }) => {
  const cardRef = useRef(null);

  // Track scroll progress of this card through viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'], // From entering bottom to leaving top
  });

  // Image starts small (0.75), smoothly grows to larger size (1.05) in center, then back to normal
  // Skip animation for last project to avoid broken image
  const imageScale = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], isLast ? [1, 1, 1, 1, 1] : [0.75, 1.02, 1.05, 1.02, 0.9]);
  // Opacity: smooth fade in and out (no fade for last project)
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], isLast ? [1, 1, 1, 1, 1] : [0.3, 1, 1, 1, 0.5]);

  return (
    <article ref={cardRef} className="group">
      {/* Divider line */}
      <div className="h-px bg-[var(--color-border)] mb-6" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 items-start md:items-center py-6 md:py-8">
        {/* Index number */}
        <div className="col-span-2 md:col-span-1">
          <span
            className="text-xs text-[var(--color-text-muted)] tracking-wider"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Project info */}
        <div className="col-span-10 md:col-span-4 lg:col-span-3">
          <div className="flex items-start gap-3">
            <div>
              <h3
                className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] leading-tight tracking-[-0.02em] group-hover:text-[var(--color-accent)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm text-[var(--color-text-muted)] mt-1"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {project.subtitle}
              </p>
            </div>
            {project.featured && (
              <span className="shrink-0 px-2 py-1 text-[9px] uppercase tracking-[0.15em] bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Year */}
        <div className="hidden md:block md:col-span-1">
          <span
            className="text-sm text-[var(--color-text-muted)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {project.year}
          </span>
        </div>

        {/* Image with scroll-driven animation */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-4 md:mt-0">
          <motion.div
            className="relative aspect-[16/9]"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Actions */}
        <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-end gap-3 mt-4 md:mt-0">
          {project.liveLink && (
            <div className="flex flex-col items-start md:items-end gap-1">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span>{project.tempLink ? 'Preview' : 'View'}</span>
                <FiArrowUpRight className="text-base transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
              {project.tempLink && (
                <span className="text-[9px] text-[var(--color-text-muted)] italic">Awaiting domain</span>
              )}
            </div>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <FiGithub className="text-base" />
              <span className="hidden lg:inline">Source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

// Projects data - editorial style
const projects = [
  {
    title: 'Billy Økland',
    subtitle: 'Personal Website',
    year: '2026',
    image: projectMain,
    liveLink: 'https://www.billyokland.com/',
    featured: true,
  },
  {
    title: 'Rena Begravelse',
    subtitle: 'Funeral Services',
    year: '2026',
    image: project1,
    liveLink: 'https://www.renabegravelse.no/',
  },
  {
    title: 'Brattvåg Vassverk',
    subtitle: 'Water Utility Services',
    year: '2026',
    image: project1New,
    liveLink: 'https://brattv-g-vassverk-sa.vercel.app/',
    tempLink: true,
    featured: true,
  },
  {
    title: 'Format Grupen',
    subtitle: 'Business Services',
    year: '2026',
    image: project4th,
    liveLink: 'https://format-grupen-as.vercel.app/',
    tempLink: true,
  },
  {
    title: 'Winge Reidmaskin',
    subtitle: 'Equipment Services',
    year: '2026',
    image: project5th,
    liveLink: 'https://www.wingereidmaskin.no/',
  },
  {
    title: 'Daling Byggservice',
    subtitle: 'Construction Services',
    year: '2026',
    image: project6th,
    liveLink: 'https://www.dalingbyggservice.no/',
  },
  {
    title: 'Pecav',
    subtitle: 'Business Services',
    year: '2026',
    image: after6,
    liveLink: 'https://www.pecav.no/',
  },
  {
    title: 'NM Lasservice',
    subtitle: 'Business Services',
    year: '2026',
    image: project8th,
    liveLink: 'https://nm-lasservice.vercel.app/',
    tempLink: true,
  },
  {
    title: 'Bergenhus AS',
    subtitle: 'Construction Company',
    year: '2025',
    image: project2,
    liveLink: 'https://www.bergenhusas.no/',
  },
  {
    title: 'Renhold SP',
    subtitle: 'Cleaning Services',
    year: '2025',
    image: project3,
    liveLink: 'https://www.renholdsp.no/',
  },
  {
    title: 'MNN AS',
    subtitle: 'Business Services',
    year: '2025',
    image: project7th,
    liveLink: 'https://m-n-n-as.vercel.app/',
    tempLink: true,
  },
  {
    title: 'KBTT',
    subtitle: 'Business Services',
    year: '2025',
    image: project4,
    liveLink: 'https://www.kbtt.no/',
    featured: true,
  },
  {
    title: 'Gumme',
    subtitle: 'Corporate Website',
    year: '2025',
    image: project5,
    liveLink: 'https://www.gumme.no/',
  },
  {
    title: 'Hansen Fjellsprengning',
    subtitle: 'Rock Blasting Services',
    year: '2025',
    image: project6,
    liveLink: 'https://www.hansenfjellsprengning.no/',
  },
  {
    title: 'Oppsal Bil',
    subtitle: 'Auto Dealership',
    year: '2025',
    image: project7,
    liveLink: 'https://www.oppsalbil.no/',
    featured: true,
  },
  {
    title: 'Kdolbom',
    subtitle: 'Korean Website',
    year: '2025',
    image: secondLast,
    liveLink: 'https://kdolbom.com/',
  },
  {
    title: 'Pet Save',
    subtitle: 'E-commerce',
    year: '2025',
    image: mobile,
    liveLink: 'https://petsave.co.kr/',
    featured: true,
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-32 lg:py-40 lg:pl-[72px] overflow-hidden"
    >
      <div className="container">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          {/* Issue/Edition style header */}
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Portfolio / Works
            </span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              2025—2026
            </span>
          </div>

          {/* Large editorial title */}
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[var(--color-text-primary)] leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Selected
            <br />
            <span className="text-[var(--color-accent)]">Works</span>
          </h2>

          <p
            className="text-lg text-[var(--color-text-tertiary)] max-w-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Latest works out of all projects made.
          </p>
        </motion.div>

        {/* Editorial Grid Layout */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isLast={index === projects.length - 1} />
          ))}

          {/* Final divider */}
          <div className="h-px bg-[var(--color-border)]" />
        </div>

        {/* Editorial footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 md:mt-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p
            className="text-[var(--color-text-muted)] text-sm max-w-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            These projects represent a selection of my work. More available on request.
          </p>
          <Link
            to="contacts"
            smooth={true}
            duration={800}
            offset={-80}
            className="group inline-flex items-center gap-3 px-6 py-3 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] transition-all duration-300 cursor-pointer"
          >
            <span
              className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact Me
            </span>
            <FiArrowUpRight className="text-[var(--color-text-muted)] group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
