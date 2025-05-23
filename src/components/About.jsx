import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageCarousel from './ImageCarousell';

import aboutImg from '@assets/about-pp.png';

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
      className="flex relative flex-col items-center justify-center min-h-screen  text-[var(--text-color)] px-4 py-12
      "
      id="about"
    >
      <div className="max-w-6xl w-full mt-15 " data-aos="fade-right">
        <div className="flex  flex-col  lg:flex-row gap-10 items-center justify-center">
          <div
            className="w-60 h-60 sm:w-80 sm:h-80 rounded-lg md:h-100 md:w-100 max-w-sm profile-bg"
            /*  style={{
              boxShadow: 'inset 0 -20px 40px 10px rgba(183, 0, 255, 1)',
            }} */
          >
            <img
              src={aboutImg}
              alt="About"
              className="rounded-lg shadow-lg w-60 h-60 sm:w-80 sm:h-80 md:h-100 md:w-100 object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 text-start max-w-2xl ">
            <h1 className="about-gradient text-start heading-size">ABOUT ME</h1>

            <h4 className="text-md font-semibold text-[var(--heading-1)]">
              JUNYL CABUSAS - WEB DEVELOPER
            </h4>

            <p className="global-text">
              I'm a passionate developer experienced in building full-stack
              applications using ReactJs, TailwindCss, WordPress, Elementor,
              HTML5, CSS3, Sass, Bootstrap, NodeJs, ExpressJs and modern web
              tools. I love crafting visually appealing websites, user-friendly,
              clean, and efficient web solutions.
              <span className="flex flex-col pt-7">
                I'm detail-oriented, always eager to learn new technologies, and
                thrive in team environments where collaboration leads to
                impactful results. My goal is to continuously grow as a
                developer and contribute to meaningful projects.
              </span>
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="resume.pdf"
                download
                className="bg-[var(--heading-2)] hover:opacity-90 text-white px-4 py-2 rounded-md shadow"
              >
                Download CV
              </a>
              <a
                href="/contact"
                className="border border-[var(--heading-2)] text-[var(--heading-2)] px-4 py-2 rounded-md hover:bg-[var(--heading-2)] hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="text-start mt-20">
          <h2
            className="header-color heading-size font-bold mb-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            WHAT I DO?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="card"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <div className="text-3xl mb-4"></div>
              <h5 className="text-xl font-semibold mb-2"> UI/UX</h5>
              <p className="global-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              className="card"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <div className="text-3xl mb-4"></div>
              <h5 className="text-xl font-semibold mb-2">Web Development</h5>
              <p className="global-text">
                Crafting responsive, user-friendly websites tailored to your
                needs.
              </p>
            </div>
            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <div className="text-3xl mb-4"></div>
              <h5 className="text-xl font-semibold mb-2">Web Design</h5>
              <p className="global-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Artworks */}
        <div className="mt-20">
          <h1
            className="header-color text-start mb-4 heading-size font-bold"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            My Artworks
          </h1>
          <p
            className="text-start max-w-2xl  mb-10 global-text"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Aside from coding, I express my creativity through drawing. This
            artistic perspective often influences my UI/UX decisions and helps
            me bring a unique visual touch to my web projects.
          </p>
        </div>
      </div>
      <section className="max-w-6xl w-full">
        <ImageCarousel />
      </section>
    </section>
  );
};

export default About;
