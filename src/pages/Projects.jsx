import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

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
  ];
  const secondProjectTech = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'AOS',
    'Optimization',
  ];
  const thirdProjectTech = [
    'Wordpress',
    'Elementor',
    'HTML',
    'CSS',
    'JavaScript',
  ];

  const projectList = [
    {
      title: 'Online Streaming App',
      description:
        'A responsive movie streaming web app that allows users to browse, search, and view movie trailers in real-time. Built with React, TMDB API, and Tailwind CSS.',
      image: project1,
      techStack: firstProjectTech,
      liveLink: 'https://junyl2.github.io/react-movie-app',
    },
    {
      title: 'First Personal Portfolio',
      description:
        'A clean, responsive multi-page dynamic website portfolio built with HTML, CSS, JavaScript and Bootstrap. Optimized for SEO and accessibility.',
      image: project2,
      techStack: secondProjectTech,

      liveLink: 'https://junyl2.github.io/junyl-portfolio',
    },
    {
      title: 'School Website',
      description:
        'Static school website built with HTML, CSS, and JavaScript showcasing school information, events, and conact details. Fully responsive and optimized for performace. ',
      image: project3,
      techStack: secondProjectTech,
      liveLink: 'https://talisactcitycollege.netlify.app',
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
          PERSONAL PROJECTS
          <span className="block h-[3px] w-1/2 bg-violet-400 mx-auto mt-2 rounded-full" />
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white shadow-lg rounded-xl overflow-hidden p-5 flex flex-col justify-between hover:shadow-xl transition duration-300"
            data-aos="fade"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            <h2 className="card-title text-xl font-bold text-[var(--text-color)] mb-2">
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
                    className="skill-box bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-800"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-center contact-btn hover:opacity-90 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
