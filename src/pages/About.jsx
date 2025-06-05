import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageCarousel from '../components/ImageCarousell';
import webdev from '../assets/web-dev.jpg';
import webdesign from '../assets/web-design.jpg';
import uiux from '../assets/Ui-UX.jpg';
import aboutImg from '@assets/about-pp.png';
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
      <div className="" data-aos="fade">
        <div className="flex flex-col  lg:flex-row gap-10 items-center md:items-start  justify-center">
          <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-lg md:h-100 md:w-100 max-w-sm profile-bg">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-lg shadow-lg w-60 h-60 sm:w-80 sm:h-80 md:h-100 md:w-100 object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 text-start max-w-2xl ">
            <div className="flex justify-center md:justify-start items-center ">
              <h1 className="header-color text-center heading-size relative">
                ABOUT ME
                <span className="block h-[4px] w-1/2 divider-color mx-auto mt-2 rounded-full" />
              </h1>
            </div>

            <h4 className="text-md font-semibold text-[var(--text-color)]">
              JUNYL CABUSAS - WEB DEVELOPER
            </h4>
            <p className="global-text pt-2 leading-relaxed">
              I'm a passionate and detail-oriented developer focused on crafting
              exceptional user experiences. While I specialize in front-end
              development, I'm always eager to expand my skill set and explore
              new technologies. My core expertise lies in building responsive
              and visually engaging websites using React.js and Tailwind CSS. I
              also design intuitive user interfaces with Figma and have some
              hands-on experience in WordPress development using Elementor for
              efficient page building and I've previously used Bootstrap to
              develop responsive front-end designs.
              <span className="flex flex-col pt-7">
                I thrive in collaborative environments, value clean and
                maintainable code, and am constantly driven to learn and grow.
                My goal is to contribute to meaningful projects that make a real
                impact while continuing to evolve as a developer.
              </span>
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="/cabusasjunyl.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 contact-btn text-white px-4 py-2 rounded-full shadow transform transition-all ease-in-out hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 nav-glow"
              >
                View Resume <FiExternalLink className="text-lg" />
              </a>

              {/* <Link
                to="contacts"
                spy={true}
                duration={500}
                offset={-30}
                smooth={true}
                activeClass="active"
                className="border border-[var(--heading-2)] px-4 py-2 rounded-full hover:bg-[var(--btn-hover))] text-[var(--text-color)] contact-glow transition-colors cursor-pointer"
              >
                Contact Me
              </Link> */}
              <a
                href="/certificates.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[var(--card-color)]  gap-2 px-5 py-2.5 border border-[var(--heading-2)] rounded-full text-[var(--text-color)] hover:bg-[var(--btn-hover)] hover:opacity-80 transition-all duration-300 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                Certificates
                <FiExternalLink className="text-base group-hover:scale-110 transition-transform duration-200" />
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
      <section
        className="w-full"
        data-aos="fade-right"
        /*  data-aos="fade"
        data-aos-delay="100" */
      >
        <ImageCarousel />
      </section>
    </section>
  );
};

export default About;
