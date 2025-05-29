import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageCarousel from '../components/ImageCarousell';
import webdev from '../assets/web-dev.jpg';
import webdesign from '../assets/web-design.jpg';
import uiux from '../assets/Ui-UX.jpg';
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
      className="flex relative flex-col items-center justify-center min-h-screen  text-[var(--text-color)]  container
      "
      id="about"
    >
      <div className="" data-aos="fade">
        <div className="flex flex-col  lg:flex-row gap-10 items-center  justify-center">
          <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-lg md:h-100 md:w-100 max-w-sm profile-bg">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-lg shadow-lg w-60 h-60 sm:w-80 sm:h-80 md:h-100 md:w-100 object-cover "
            />
          </div>

          <div className="flex flex-col gap-4 text-start max-w-2xl ">
            <div className="flex justify-start ">
              <h1 className="header-color text-center heading-size relative">
                ABOUT ME
                <span className="block h-[3px] w-1/2 bg-violet-500 mx-auto mt-2 rounded-full" />
              </h1>
            </div>

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
                className="contact-btn text-white px-4 py-2 rounded-full shadow tansform transition-all ease-in-out hover:scale-105 nav-glow"
              >
                Download CV
              </a>
              <a
                href="/contact"
                className="border border-[var(--heading-2)] px-4 py-2 rounded-full hover:bg-[var(--btn-hover))] text-[var(--text-color)] contact-glow transition-colors"
              >
                Contact Me
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
            <div className="card">
              <img
                src={uiux}
                alt="Web Design"
                className="mb-2 rounded h-[180px] w-full object-cover"
              />
              <h5 className="card-title mb-2"> UI/UX</h5>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="card" data-aos="fade" data-aos-delay="100">
              <img
                src={webdev}
                alt="Web Design"
                className="mb-2 rounded h-[180px] w-full object-cover"
              />
              <h5 className="card-title mb-2">Web Development</h5>
              <p className="card-description">
                Crafting responsive, user-friendly websites tailored to your
                needs.
              </p>
            </div>
            <div className="card" data-aos="fade" data-aos-delay="100">
              <img
                src={webdesign}
                alt="Web Design"
                className="mb-2 rounded h-[180px] w-full object-cover"
              />
              <h5 className="card-title mb-2">Web Design</h5>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            className="text-start max-w-2xl  mb-10  text-gray-600"
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
