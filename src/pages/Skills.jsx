import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaNetworkWired,
  FaSitemap,
  FaPlus,
  FaMinus,
  FaChartPie,
  FaBroom,
  FaSyncAlt,
  FaProjectDiagram,
  FaSatelliteDish,
  FaFilm,
  FaMagic,
} from 'react-icons/fa';
import { SiElementor } from 'react-icons/si';

function Skills() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 600, easing: 'ease-in-out' });

    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const programmingSkills = [
    {
      name: 'HTML5',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      link: 'https://www.w3.org/html/',
    },
    {
      name: 'CSS3',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      link: 'https://www.w3schools.com/css/',
    },
    {
      name: 'JavaScript',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'TypeScript',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
      link: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Java',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      link: 'https://www.java.com/',
    },
    {
      name: 'SQL',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      link: 'https://www.mysql.com/',
    },
  ];

  const toolsUsed = [
    {
      name: 'Vite',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg',
      link: 'https://vitejs.dev/',
    },
    {
      name: 'VS Code',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
      link: 'https://code.visualstudio.com/',
    },
    {
      name: 'IntelliJ',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg',
      link: 'https://www.jetbrains.com/idea/',
    },
    {
      name: 'NetBeans',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg',
      link: 'https://netbeans.apache.org/',
    },
    {
      name: 'WordPress',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg',
      link: 'https://wordpress.com/',
    },
    {
      name: 'Elementor',
      logo: <SiElementor size={30} title="Elementor" />,
      link: 'https://elementor.com/',
    },
    {
      name: 'SEO',
      logo: 'https://cdn-icons-png.flaticon.com/512/281/281769.png',
      link: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    },

    {
      name: 'Figma',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
      link: 'https://figma.com/',
    },
    {
      name: 'Local by Flywheel',
      logo: <FaSitemap size={30} title="Local by Flywheel" />,
      link: 'https://localwp.com/',
    },
    {
      name: 'Git',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      link: 'https://git-scm.com/',
    },
    {
      name: 'GitHub',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
      link: 'https://github.com/',
    },
    {
      name: 'Optimization',
      logo: <FaMagic size={24} title="Web Performance Optimization" />,
      link: 'https://web.dev/performance/',
    },
  ];

  const libraries = [
    {
      name: 'React.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      link: 'https://reactjs.org/',
    },
    {
      name: 'Next.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
      link: 'https://nextjs.org/',
    },
    {
      name: 'React Router',
      logo: <FaNetworkWired size={30} title="React Router" />,
      link: 'https://reactrouter.com/',
    },
    {
      name: 'Redux',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
      link: 'https://redux.js.org/',
    },
    {
      name: 'Zustand',
      logo: <FaProjectDiagram size={24} title="Zustand" />,
      link: 'https://zustand-demo.pmnd.rs/',
    },
    {
      name: 'AOS',
      logo: <FaMagic size={24} title="AOS" />,
      link: 'https://michalsnik.github.io/aos/',
    },
    {
      name: 'Framer Motion',
      logo: <FaFilm size={24} title="Framer Motion" />,
      link: 'https://www.framer.com/motion/',
    },
    {
      name: 'Axios',
      logo: <FaSatelliteDish size={24} title="Axios" />,
      link: 'https://axios-http.com/',
    },
  ];

  const frameworks = [
    {
      name: 'Tailwind CSS',
      logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
      link: 'https://tailwindcss.com/',
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      link: 'https://getbootstrap.com/',
    },
    {
      name: 'SCSS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
      link: 'https://sass-lang.com/',
    },
    {
      name: 'DaisyUI',
      logo: 'https://logo.svgcdn.com/l/daisyUI.png',
      link: 'https://daisyui.com/',
    },
  ];

  const backendTechnologies = [
    {
      name: 'PHP',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
      link: 'https://www.php.net/',
    },
    {
      name: 'Node.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      link: 'https://nodejs.org/',
    },
    {
      name: 'Express.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
      link: 'https://expressjs.com/',
    },
    {
      name: 'MongoDB',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      name: 'Firebase',
      logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
      link: 'https://firebase.google.com/',
    },
    {
      name: 'npm',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg',
      link: 'https://www.npmjs.com/',
    },
  ];

  const dataAnalyticsSkills = [
    {
      name: 'Power BI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
      link: 'https://powerbi.microsoft.com/',
    },
    {
      name: 'Excel',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
      link: 'https://www.microsoft.com/en-us/microsoft-365/excel',
    },

    {
      name: 'SQL',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      link: 'https://www.mysql.com/',
    },
    {
      name: 'Data Visualization',
      logo: <FaChartPie size={24} title="Data Visualization" />,
      link: 'https://datavizproject.com/',
    },
    {
      name: 'Data Cleaning',
      logo: <FaBroom size={24} title="Data Cleaning" />,
      link: 'https://en.wikipedia.org/wiki/Data_cleansing',
    },
    {
      name: 'Data Transformation',
      logo: <FaSyncAlt size={24} title="Data Transformation" />,
      link: 'https://learn.microsoft.com/en-us/power-query/',
    },
    {
      name: 'Data Modeling',
      logo: <FaProjectDiagram size={24} title="Data Modeling" />,
      link: 'https://learn.microsoft.com/en-us/power-bi/transform-model/',
    },
  ];

  const renderSkill = (skill) => (
    <li
      key={skill.name}
      className="skill-box flex items-center gap-2 break-words whitespace-nowrap cursor-pointer"
    >
      <a href={skill.link} target="_blank" rel="noopener noreferrer">
        {typeof skill.logo === 'string' ? (
          <img
            src={skill.logo}
            alt={skill.name}
            width="30"
            height="30"
            title={skill.name}
            className="hover:scale-110 transition-transform"
          />
        ) : (
          skill.logo
        )}
      </a>
      {skill.name}
    </li>
  );

  const SkillSection = ({ title, skills, note }) => (
    <details
      open={isDesktop}
      className="group card transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer sub-heading-size header-color select-none">
        <span>{title}</span>
        <span className="ml-2">
          <FaPlus className="group-open:hidden" />
          <FaMinus className="hidden group-open:inline-block" />
        </span>
      </summary>
      {note && <p className="mt-2 text-sm text-gray-500 italic">{note}</p>}
      <ul className="flex flex-wrap gap-3 mt-4">{skills.map(renderSkill)}</ul>
    </details>
  );

  return (
    <section className="container" id="skills">
      <div className="flex justify-center pb-10" data-aos="fade">
        <h1 className="text-[var(--text-color)] text-center heading-size relative">
          TECHNICAL SKILLS
          <span className="block h-[4px] w-1/2 divider-color mx-auto mt-2 rounded-full" />
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6" data-aos="fade">
        <SkillSection
          title="Languages & Query Languages"
          skills={programmingSkills}
        />
        <SkillSection
          title="Development Tools & Platforms"
          skills={toolsUsed}
        />
        <SkillSection
          title="JavaScript Libraries & Utilities"
          skills={libraries}
        />
        <SkillSection title="CSS Frameworks & UI Styling" skills={frameworks} />
        <SkillSection
          title="Back-End Technologies & Tools"
          skills={backendTechnologies}
          note="Currently learning and applying these back-end technologies to expand my MERN/full-stack development skills."
        />
        <SkillSection
          title="Data Analytics & Reporting Tools"
          skills={dataAnalyticsSkills}
          note="Improving data analytics proficiency through self-driven projects while assisting a data engineer in a part-time capacity. Focused on Power BI, Excel, SQL, and applying data modeling and transformation techniques."
        />
      </div>
    </section>
  );
}

export default Skills;
