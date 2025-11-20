import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import currentProject from '@assets/currentProject.png';
import careProject from '@assets/all-devices-black.png';
import solarProject from '@assets/solar.png';
import lodongProject from '@assets/lodong_web.png';
import petSave from '@assets/pet-save.png';
import project1 from '@assets/movie-mock.png';
import project2 from '@assets/project2.png';
import project3 from '@assets/tcc-mock.png';
import project4 from '@assets/project4.png';
import project5 from '@assets/project5.png';
import project6 from '@assets/project6.png';
import nflix from '@assets/nflix-min.png';
import ghub from '@assets/ghub-min.png';
import sflow from '@assets/sflow-min.png';
import sm from '@assets/sm-min.png';
import aimlab from '@assets/aimlab.png';
import { FiExternalLink } from 'react-icons/fi';

function Projects() {
  const [showFull, setShowFull] = useState({});

  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: 'ease-in-out' });
  }, []);

  const handleToggle = (index) => {
    setShowFull((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const clothingTech = [
    'React.Js',
    'Tailwind CSS',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Redux',
    'Axios',
    'React Router',
    'Git',
    'GitHub',
  ];

  const firstProjectTech = [
    'React.js',
    'Tailwind CSS',
    'Framer Motion',
    'CSS',
    'JavaScript',
    'TMDB API',
    'AOS',
    'React Router',
    'Firebase',
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

  const careManagement = [
    'Next.js',
    'TypeScript',
    'Modular CSS',
    'Redux',
    'Framer Motion',
    'Axios',
    'Java',
    'Spring Boot',
    'Swagger UI',
  ];

  const solar = [
    'Angular',
    'TypeScript',
    'CSS',
    'BootStrap',
    'Swagger UI',
    'Java',
    'SpringBoot',
  ];

  const projectList = [
    {
      title: 'Pet Save App',
      githubLink: 'https://github.com/Junyl2/pet_save_app_workspace',
      description:
        'I built the front-end for client/seller/admin pages and integrated APIs for a Korea-based pet e-commerce mobile app, delivering a fast, modern, and fully responsive user experience.',
      image: petSave,
      techStack: careManagement,
      liveLink: 'https://petsave.co.kr',
    },

    {
      title: 'Care Management Website ',
      githubLink: 'https://github.com/PackageWeb/care_manager_web',
      description:
        'I developed the front-end and implemented API integration for a care management platform (Korea-based Company) designed to assist the elderly in Korea with essential services such as health monitoring, meal assistance, bathing support, and more. The project focused on delivering a user-friendly and fully responsive interface with seamless connectivity to backend services, ensuring smooth access to various care options.',
      image: careProject,
      techStack: careManagement,
      liveLink: 'https://kdolbom.com/',
    },
    {
      title: 'Solar Maintenance Dashboard',
      githubLink: 'https://github.com/Junyl2/Solar_mantainance_workspace',
      description:
        'Contributed by modifying the UI to be fully responsive and improving API connections for seamless performance.',
      image: solarProject,
      techStack: solar,
      liveLink: 'https://on-energy.kr/',
    },
    {
      title: 'Lodong Company Dashboard',
      githubLink: 'https://github.com/Junyl2/lodong_web_workspace',
      description:
        'Integrated APIs and improved data handling features for the company’s internal dashboard, enhancing efficiency and usability.',
      image: lodongProject,
      techStack: careManagement,
      liveLink: '',
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
      title: 'Online Streaming Website',
      githubLink: 'https://github.com/Junyl2/react-movie-app',
      description:
        'A responsive movie streaming web app that allows users to browse, search, add to a watch list, and view movie trailers in real-time. Logged-in users can save their watch list to their account using Firebase Authentication. A full-stack version using Express.js and MongoDB for persistent favorite storage is also implemented but not yet deployed, as it still needs polishing and optimization.',
      image: project1,
      techStack: firstProjectTech,
      liveLink: 'https://junyl2.github.io/react-movie-app',
    },
    {
      title: 'Clothing E-commerce',
      githubLink: 'https://github.com/Junyl2/Revive',
      description:
        'I initiated a clothing e-commerce project using the MERN stack and completed the front-end for the homepage with a responsive landing design and navigation setup. I wasn’t able to finish the full build as I shifted focus to real-world projects, and since it wasn’t hosted, no live link is available',
      image: currentProject,
      techStack: clothingTech,
      liveLink: '',
    },
    {
      title: 'First Personal Portfolio',
      githubLink: 'https://github.com/Junyl2/junyl-portfolio',
      description:
        'A clean, responsive multi-page dynamic website portfolio built with HTML, CSS, JavaScript and Bootstrap. Optimized for SEO and accessibility.',
      image: project2,
      techStack: secondProjectTech,
      liveLink: 'https://junyl2.github.io/junyl-portfolio/',
    },

    {
      title: 'Travel App',
      description:
        'Built a fully responsive travel app UI featuring package tours, chat functionality, an admin dashboard, and a chat inbox. Showcased dynamic UI, mobile-ready design, and real-time interactivity for a client demo. Currently under development within a WordPress environment and not yet deployed.',
      image: project4,
      techStack: thirdProjectTech,
      liveLink: '',
    },

    {
      title: 'Internship Practice Projects (Desktop UI)',
      description:
        'A collection of cloned UIs (Netflix, StackOverflow, GitHub, SM Appliances) and a simple game developed during my internship at Armada Logics as part of the Web Fundamentals training. These were created under strict 1–3 hour deadlines, which added pressure and limited the time for polishing details such as full responsiveness, font styling, and complete UI finishing. At this stage, I’m still developing my proficiency, but I made sure to follow semantic HTML, CSS, and JavaScript best practices as much as possible. These projects mainly reflect my progress and growing understanding of front-end development',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      customLinks: [
        {
          label: 'Cloned Netflix UI',
          github: 'https://github.com/Junyl2/Cloned-netflix',
          live: 'https://clonednflix.netlify.app',
        },
        {
          label: 'Cloned StackOverflow UI',
          github: 'https://github.com/Junyl2/tech-forum-ui',
          live: 'https://clonedsoverflow.netlify.app',
        },
        {
          label: 'Cloned GitHub UI',
          github: 'https://github.com/Junyl2/developer-dashboard-ui',
          live: 'https://clonedghub.netlify.app/',
        },
        {
          label: 'Cloned SM Appliances UI',
          github: 'https://github.com/Junyl2/ecommerce-layout-practice',
          live: 'https://clonedsmapplicanes.netlify.app',
        },
        {
          label: 'Simple Aimlab',
          github: 'https://github.com/Junyl2/Catching-the-Fireflies',
          live: 'https://junyl2.github.io/Catching-the-Fireflies/',
        },
      ],
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
        {projectList.map((project, index) => {
          const isInternship = project.title === 'Internship Practice Projects';
          const isExpanded = showFull[index] || isInternship;
          const shortDesc = project.description?.slice(0, 150);
          const showReadMore =
            project.description && project.description.length > 150;

          return (
            <div
              key={index}
              className={`relative project-card bg-white rounded-xl overflow-hidden p-5 flex flex-col justify-start items-start transition duration-300 ${
                project.customLinks ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              data-aos="fade"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 md:h-60 lg:h-80 object-contain rounded-md mb-4"
                />
              )}

              <h2 className="card-title text-xl font-bold text-[var(--text-color)] mt-4 mb-4">
                {project.title}
              </h2>

              {project.description && (
                <p className="card-description text-gray-600 mb-2">
                  {isExpanded ? project.description : `${shortDesc}...`}
                </p>
              )}

              {showReadMore && !isInternship && (
                <button
                  onClick={() => handleToggle(index)}
                  className="text-blue-600 hover:underline text-sm mb-2"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              )}

              {project.techStack && (
                <div>
                  <p className="mb-2 text-sm font-medium">Technologies Used:</p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <li
                        key={i}
                        className="tech-box text-sm px-3 py-1 rounded-full text-gray-800 bg-gray-100"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.customLinks ? (
                <div className="mt-4 w-full">
                  <p className="mb-2 text-sm font-semibold">Projects:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {project.customLinks.map((link, i) => {
                      let imageSrc;
                      if (link.label.includes('Netflix')) imageSrc = nflix;
                      else if (link.label.includes('StackOverflow'))
                        imageSrc = sflow;
                      else if (link.label.includes('GitHub')) imageSrc = ghub;
                      else if (link.label.includes('SM Appliances'))
                        imageSrc = sm;
                      else if (link.label.includes('Aimlab')) imageSrc = aimlab;

                      return (
                        <div
                          key={i}
                          className="flex flex-col justify-start bg-[var(--card-color)] p-3 rounded-md border-1 border-[var(--border-color)]"
                        >
                          {imageSrc && (
                            <img
                              src={imageSrc}
                              alt={link.label}
                              className="w-full max-h-48 h-auto object-contain rounded-md mb-2"
                            />
                          )}

                          <div className="mb-2">
                            <span className="text-sm font-medium text-[var(--text-color)]">
                              {link.label}
                            </span>
                            <p className="text-[10px] text-gray-400 italic">
                              Desktop focused only
                            </p>
                          </div>

                          <div className="flex justify-center gap-4 mt-auto">
                            <a
                              href={link.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="GitHub Repository"
                              className="text-[var(--text-color)] hover:opacity-80 transition"
                            >
                              <i className="fab fa-github fa-lg"></i>
                            </a>
                            <a
                              href={link.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Live Demo"
                              className="text-[var(--text-color)] hover:opacity-80 transition"
                            >
                              <FiExternalLink size={20} />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="absolute bottom-4 right-4 flex items-center gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      className="text-[var(--text-color)] hover:opacity-80 transition"
                    >
                      <i className="fab fa-github fa-lg"></i>
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Project"
                      className="text-[var(--text-color)] hover:opacity-80 transition"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
