import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageCarousel from '../components/ImageCarousell';
import webdev from '../assets/web-dev.jpg';
import webdesign from '../assets/web-design.jpg';
import uiux from '../assets/Ui-UX.jpg';
/* import aboutImg from '@assets/about-pp.png'; */
import aboutImg from '@assets/junyl.jpg';
import powerbi from '@assets/dashboard.jpg';
import { Link } from 'react-scroll';
import { FiExternalLink } from 'react-icons/fi';

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      className="flex relative flex-col items-center justify-center min-h-screen  text-[var(--text-color)]  container
      "
      id="about"
    >
      <div className="mt-10 sm:mt-10 md:mt-0 lg:mt-0">
        <div
          className="flex flex-col  lg:flex-row gap-10 items-center md:justify-center lg:items-center  justify-center"
          data-aos="fade"
        >
          <div className="w-60 h-70 sm:w-70 sm:h-90 rounded-lg md:h-100 md:w-80 max-w-sm profile-bg">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-lg shadow-lg w-60 h-70 sm:w-70 sm:h-90 md:h-100 md:w-80 object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 text-start max-w-2xl ">
            <div className="flex justify-center md:justify-center lg:justify-start items-center ">
              <h1 className="header-color text-center heading-size relative">
                ABOUT ME
                <span className="block h-[4px] w-1/2 divider-color mx-auto mt-2 rounded-full" />
              </h1>
            </div>

            <h4 className="text-md font-semibold text-center md:text-center lg:text-start text-[var(--text-color)]">
              JUNYL CABUSAS - WEB DEVELOPER
            </h4>
            <div className="space-y-6">
              <p className="global-text leading-relaxed indent-8 sm:indent-8 md:indent-16 lg:indent-0 text-justify">
                I'm a passionate and detail-oriented developer focused on
                crafting exceptional user experiences. While I specialize in
                front-end development, I have professional project experience
                with <strong>Next.js and TypeScript </strong>
                for a Korea-based company. My responsibilities included{' '}
                <strong>
                  API integrations, working with Swagger UI, and maintaining and
                  modifying existing projects, like modifying UI, fixing
                  responsiveness, bugs and fixing api connections on
                  Angular/Next.js project
                </strong>
                . My core expertise lies in building responsive and visually
                engaging websites using React.js, Next.js, and Tailwind CSS. I
                also design intuitive user interfaces with Figma and have
                hands-on experience in WordPress development using Elementor for
                efficient page building. Additionally, I've worked with
                Bootstrap to deliver responsive designs and maintain design
                consistency.
              </p>

              <p className="global-text leading-relaxed indent-8 sm:indent-8 md:indent-16 lg:indent-0 text-justify">
                I thrive in collaborative environments, value clean and
                maintainable code, and am constantly driven to learn and grow.
                Beyond front-end development, I'm expanding my backend knowledge
                through the MERN stack (MongoDB, Express.js, React.js, and
                Node.js) to strengthen my full-stack capabilities. My goal is to
                contribute to impactful projects, leverage my Next.js and
                TypeScript expertise, and continue evolving as a versatile
                developer.
              </p>
            </div>

            <div className="flex gap-6 mt-4 items-center">
              <a
                href="/myresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] sm:text-[13px] md:text-[14px] lg:text-[15px] group text-sm px-3 py-1.5 rounded-md nav-glow text-white contact-btn hover:bg-gray-100 flex items-center gap-1 transition "
              >
                Resume{' '}
                <FiExternalLink className="text-base opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="/certificates.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] sm:text-[13px] md:text-[14px] lg:text-[15px] group text-sm font-medium text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors flex items-center gap-1 underline underline-offset-4"
              >
                Certificates
                <FiExternalLink className="text-base opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="text-start mt-20">
          <h2
            className="header-color sub-heading-size font-bold mb-8"
            data-aos="fade"
          >
            What I do?
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="300"
          >
            {/* UI/UX */}
            <div className="card">
              <img
                src={uiux}
                alt="UI/UX"
                className="mb-2 rounded h-[180px] w-full object-cover"
              />
              <h5 className="card-title mb-2">UI/UX</h5>
              <p className="card-description">
                I create wireframes, interactive prototypes, and intuitive user
                flows using tools like Figma—ensuring a seamless and
                user-centered experience.
              </p>
            </div>

            {/* Web Development */}
            <div className="card" data-aos="fade" data-aos-delay="100">
              <img
                src={webdev}
                alt="Web Development"
                className="mb-2 rounded h-[180px] w-full object-cover"
              />
              <h5 className="card-title mb-2">Web Development</h5>
              <p className="card-description">
                I build responsive and visually appealing websites using
                React.js and Tailwind CSS—focusing on performance,
                accessibility, and modern design best practices.
              </p>
            </div>

            {/* Web Design */}
            <div className="card" data-aos="fade" data-aos-delay="100">
              <img
                src={webdesign}
                alt="Web Design"
                className="mb-2 rounded h-[180px] w-full object-cover"
              />
              <h5 className="card-title mb-2">Web Design</h5>
              <p className="card-description">
                I design clean, engaging landing pages and modern website
                layouts that align with brand identity and enhance user
                interaction.
              </p>
            </div>

            {/* Data Analytics */}
            <div className="card" data-aos="fade" data-aos-delay="100">
              <img
                src={powerbi}
                alt="Data Analytics"
                className="mb-2 rounded h-[180px] w-full object-cover"
              />
              <h5 className="card-title mb-2">Data Analytics</h5>
              <p className="card-description">
                I create insightful dashboards and reports using Power BI to
                visualize business data, uncover trends, and support data-driven
                decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Artworks */}
        <div className="mt-20" data-aos="fade-right" data-aos-delay="100">
          <h1 className="header-color text-start mb-4 sub-heading-size font-bold">
            My Artworks
          </h1>
          <p
            className="text-start max-w-2xl  mb-10 global-text text-gray-600 leading-relaxed"
            /*   data-aos="fade-right"
            data-aos-delay="100" */
          >
            Aside from coding, I express my creativity through drawing. This
            artistic perspective often influences my UI/UX decisions and helps
            me bring a unique visual touch to my web projects.
          </p>
        </div>
      </div>
      <section className="w-full" data-aos="fade-right">
        <ImageCarousel />
      </section>
    </section>
  );
};

export default About;
