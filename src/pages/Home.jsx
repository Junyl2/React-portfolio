import HomeBg from '../assets/home-black.png';
import React, { useEffect, useState } from 'react';
import { FiArrowDownRight, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const titles = [
  'developer',
  'designer',
  'optimizer',
  'engineer',
  'builder',
  'architect',
  'innovator',
  'specialist',
];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-[100dvh] relative" data-aos="fade-right">
      <div className="relativ mt-[-60px] md:mt-0">
        <div
          className="h-screen w-full relative flex items-center justify-between"
          style={{
            backgroundImage: `url(${HomeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-overlay opacity-90 z-0" />

          {/* Content */}
          <div className="relative flex items-center justify-between w-full landing-container">
            <div className="flex flex-col items-start text-start justify-center h-full z-10   gap-4">
              <div className="flex items-center justify-start w-full">
                <h2 className="text-gray-400 text-lg sm:text-xl md:text-2xl text-start">
                  WEBSITE{' '}
                  <span className="text-white transition-all duration-500 ease-in-out">
                    {titles[currentTitle].toUpperCase()}
                  </span>
                </h2>
              </div>
              <div className="flex items-center justify-start w-full">
                <h2 className="landing-header font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-start">
                  JUNYL <br /> CABUSAS
                </h2>
              </div>
              <div className="flex items-center justify-start w-full border-l-4 border-l-white pl-3">
                <p className="landing-header text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-start">
                  An aspiring Web Developer <br /> that has an eye for design{' '}
                  <br /> and a passion for coding.
                </p>
              </div>
              <button className="contact-btn  text-white py-2 px-3 text-[12px] sm:text-sm rounded-full cursor-pointer flex items-center justify-center gap-2 md:hidden lg:hidden tansform transition-all ease-in-out hover:scale-105">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-30}
                  spy={true}
                  activeClass="active "
                  className="flex items-center justify-center gap-1"
                >
                  Get In Touch <FiArrowRight />
                </Link>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col space-y-5 z-10">
              {/* GitHub */}
              <a
                href="https://github.com/Junyl2"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-all transform icon-hover"
              >
                <i className="fab fa-github text-white text-sm sm:text-lg md:text-xl"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/Junyl2"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-all transform icon-hover"
              >
                <i className="fab fa-linkedin-in text-white text-sm sm:text-lg md:text-xl"></i>
              </a>

              {/* Gmail */}
              <a
                href="mailto:your.artbyjunylc@gmail.com"
                className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-all transform icon-hover"
              >
                <i className="fas fa-envelope text-white text-sm sm:text-lg md:text-xl"></i>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/junyl2"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-all transform icon-hover"
              >
                <i className="fab fa-facebook-f text-white text-sm sm:text-lg md:text-xl"></i>
              </a>
            </div>

            {/* Scroll Down Icon */}
          </div>

          {/* SVG Curve Transition */}
          <div className="absolute bottom-[-2.5%] w-full overflow-hidden leading-[0] z-10">
            <div className="relative block w-[calc(100%+1.3px)] h-[80px] mask-blend">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 50"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 C300,50 900,0 1200,40 L1200,50 L0,50 Z"
                  className="divider-gradient"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-30}
        className="fas fa-chevron-down text-white text-3xl animate-bounce absolute bottom-5  left-1/2 transform-translate-x-1/2 z-50 cursor-pointer"
      ></Link>
    </section>
  );
};

export default Home;
