import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

import { FiExternalLink } from 'react-icons/fi';
function Projects() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: 'ease-in-out',
    });
  }, []);

  const firstProjectTech = [
    'React.js',
    'Tailwind CSS',
    'CSS',
    'JavaScript',
    'TMDB API',
    'AOS',
    'React Router',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
    'GitHub',
  ];
  const secondProjectTech = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'AOS',
    'Optimization',
    'Formsubmit',
    'Git',
    'GitHub',
  ];
  const thirdProjectTech = [
    'Wordpress',
    'Elementor',
    'HTML',
    'CSS',
    'JavaScript',
  ];
  const fourthProjectTech = [
    'React.js',
    'Tailwind CSS',
    'CSS',
    'JavaScript',
    'Axios',
    'Git',
    'GitHub',
  ];

  const projectList = [
    {
      title: 'Online Streaming App',
      githubLink: 'https://github.com/Junyl2/react-movie-app',
      description:
        'A responsive movie streaming web app that allows users to browse, search, add watch list and view movie trailers in real-time.',
      image: project1,
      techStack: firstProjectTech,
      liveLink: 'https://junyl2.github.io/react-movie-app',
    },
    {
      title: 'First Personal Portfolio',
      githubLink: 'https://github.com/Junyl2/junyl-portfolio',

      description:
        'A clean, responsive multi-page dynamic website portfolio built with HTML, CSS, JavaScript and Bootstrap. Optimized for SEO and accessibility.',
      image: project2,
      techStack: secondProjectTech,

      liveLink: 'https://junyl2.github.io/junyl-portfolio',
    },
    {
      title: 'School Website',
      githubLink: 'https://github.com/Junyl2/TCC---School-website',
      description:
        'A responsive, performance-optimized website showcasing school information, programs, enrollment, events, and services. Includes contact details for inquiries. Backend integration coming soon',
      image: project3,
      techStack: secondProjectTech,
      liveLink: 'https://talisactcitycollege.netlify.app',
    },
    {
      title: 'React Course',
      githubLink: 'https://github.com/Junyl2/Armada-logics-React-Course',
      description:
        'I took React.js course from Armada Logics, Inc. during my remote intership. This course covers the fundamentals of React, including components, rendering, state management, hooks, axios and more.  ',
      image: project5,
      techStack: fourthProjectTech,
      liveLink: 'https://junyl2.github.io/Armada-logics-React-Course',
    },

    {
      title: 'Travel App',
      description:
        'Built a fully responsive travel app UI featuring package tours, chat functionality, an admin dashboard, and a chat inbox. Showcased dynamic UI, mobile-ready design, and real-time interactivity for a client demo.',
      image: project4,
      techStack: thirdProjectTech,
      liveLink: '',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12" id="projects">
      <div className="flex justify-center pb-15" data-aos="fade">
        <h1 className="text-[var(--text-color)] text-center heading-size relative">
          PROJECTS
          <span className="block h-[4px] w-1/2 divider-color mx-auto mt-2 rounded-full" />
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white shadow-lg rounded-xl overflow-hidden p-5 flex flex-col justify-start items-start transition duration-300"
            data-aos="fade"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            <h2 className="card-title text-xl font-bold text-[var(--text-color)] mt-4 mb-4">
              {project.title}
            </h2>
            <p className="card-description text-gray-600 mb-4">
              {project.description}
            </p>

            {project.techStack && (
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="tech-box  text-sm px-3 py-1   rounded-full text-gray-800"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            {/* <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-center contact-btn hover:opacity-90 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Live Demo
            </a> */}

            <div className="absolute bottom-4 right-4 flex items-center gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-color)] hover:opacity-80 transition"
                  title="GitHub Repository"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-color)] hover:opacity-80 transition"
                  title="Live Project"
                >
                  <FiExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
