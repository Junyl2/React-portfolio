import { useEffect } from 'react';
import { FiGlobe, FiTool, FiPackage, FiPenTool } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, easing: 'ease-in-out' });
  }, []);

  const programmingSkills = ['HTML5', 'CSS3', 'JavaScript', 'Java', 'SQL'];
  const toolsUsed = [
    'VS Code',
    'IntelliJ',
    'WordPress',
    'Elementor',
    'Figma',
    'Locally',
    'Git',
    'GitHub',
  ];
  const libraries = ['React.js', 'React Router', 'AOS'];
  const frameworks = ['Tailwind CSS', 'Bootstrap', 'SCSS'];

  return (
    <section className="container" id="skills">
      <div className="flex justify-center pb-15" data-aos="fade">
        <h1 className="text-[var(--text-color)] text-center heading-size relative">
          TECH SKILLS
          <span className="block h-[3px] w-1/2 bg-violet-400 mx-auto mt-2 rounded-full" />
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Languages */}
        <div className="flex flex-col gap-5 w-full" data-aos="fade">
          <h2 className="sub-heading-size header-color flex items-center gap-2">
            <FiGlobe className="text-[var(--text-color)]" /> Languages & Query
            Languages
          </h2>
          <ul className="flex flex-wrap gap-3">
            {programmingSkills.map((s, i) => (
              <li
                key={i}
                className="skill-box global-text py-1 px-3 rounded-full break-words whitespace-nowrap cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="flex flex-col gap-5 w-full" data-aos="fade">
          <h2 className="sub-heading-size header-color flex items-center gap-2">
            <FiTool className="text-[var(--text-color)]" /> Development Tools &
            Platforms
          </h2>
          <ul className="flex flex-wrap gap-3">
            {toolsUsed.map((t, i) => (
              <li key={i} className="skill-box break-words whitespace-nowrap">
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Libraries */}
        <div className="flex flex-col gap-5 w-full" data-aos="fade">
          <h2 className="sub-heading-size header-color flex items-center gap-2">
            <FiPackage className="text-[var(--text-color)]" /> JavaScript
            Libraries & Utilities
          </h2>
          <ul className="flex flex-wrap gap-3">
            {libraries.map((s, i) => (
              <li
                key={i}
                className="skill-box break-words whitespace-nowrap cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Frameworks */}
        <div className="flex flex-col gap-5 w-full" data-aos="fade">
          <h2 className="sub-heading-size header-color flex items-center gap-2">
            <FiPenTool className="text-[var(--text-color)]" /> CSS Frameworks &
            UI Styling
          </h2>
          <ul className="flex flex-wrap gap-3">
            {frameworks.map((s, i) => (
              <li key={i} className="skill-box break-words whitespace-nowrap">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
