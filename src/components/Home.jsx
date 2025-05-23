import HomeBg from '../assets/home-black.png';
import React, { useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      data-aos-delay="100"
      data-aos-duration="600"
      data-aos="fade-right"
      id="home"
      className="h-[100dvh] relative"
    >
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
          <div className="absolute inset-0 bg-overlay opacity-60 z-0" />

          {/* Content */}
          <div className=" flex flex-col items-start text-start justify-center h-full z-10  md:ml-20 lg:ml-25 pl-5 gap-3 mt-[-30px] md:mt-0">
            <div className="flex items-center justify-start w-full">
              <h2 className="text-gray-400 text-lg sm:text-xl md:text-2xl text-start">
                WEBSITE DEVELOPER
              </h2>
            </div>
            <div className="flex items-center justify-start w-full">
              <h2 className="landing-header font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-start">
                JUNYL <br />
                CABUSAS
              </h2>
            </div>
            <div className="flex items-center justify-start w-full border-l-4 border-l-white pl-3">
              <p className="landing-header text-sm text-start">
                An aspiring Web Developer <br />
                That has an eye for design <br />
                and a passion for coding.
              </p>
            </div>
            <button className="contact-btn border-1 border-white text-white p-2 text-sm sm:text-lg  rounded-full cursor-pointer flex md:hidden lg:hidden">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-30}
                spy={true}
                activeClass="active"
                className="nav-button "
              >
                Get In Touch
              </Link>
            </button>
          </div>
          <div className="flex flex-col gap-5 pr-5   z-10">
            <div className=" rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer hover:opacity-60">
              <i className="fab fa-facebook-f text-white text-sm sm:text-lg md:text-xl "></i>
            </div>
            <div className="rounded-full  w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer hover:opacity-60">
              <i className="fab fa-instagram text-white text-sm sm:text-lg md:text-xl"></i>
            </div>
            <div className=" rounded-full  w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer hover:opacity-60">
              <i className="fab fa-linkedin-in text-white text-sm sm:text-lg md:text-xl"></i>
            </div>
            <div className=" rounded-full  w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer hover:opacity-60">
              <i className="fab fa-facebook-messenger text-white text-sm sm:text-lg md:text-xl"></i>
            </div>
          </div>

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-30}
            className="fas fa-chevron-down text-white text-3xl animate-bounce absolute bottom-10 left-1/2 transform-translate-x-1/2 z-50 cursor-pointer"
          ></Link>
          {/* SVG Curve Transition */}
          <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[80px]"
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
    </section>
  );
};

export default Home;
