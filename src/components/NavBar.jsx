import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);

      AOS.init({
        once: true,
        duration: 600,
        easing: 'ease-in-out',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled ? 'md:fixed md:top-0 ' : 'md:absolute md:top-0'
      } fixed bottom-0 md:bottom-auto w-full z-[1000] transition-all duration-500 ease-in-out
        ${scrolled ? 'bg-black/30' : 'bg-transparent'}
        md:rounded-none rounded-t-xl backdrop-blur-lg `}
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div className="flex items-center justify-center md:justify-between  lg:px-5 lg:py-2 md:py-1 transition-all duration-300  md:pr-2">
        <ul className="flex justify-evenly md:justify-start w-full md:w-auto gap-2 md:rounded-full p-1.5 nav-bg transition-all duration-300 md:ml-20 lg:ml-25 ">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              className=" nav-button"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-30}
              spy={true}
              activeClass="active"
              className="nav-button"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-30}
              spy={true}
              activeClass="active"
              className="nav-button"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-30}
              spy={true}
              activeClass="active"
              className="nav-button"
            >
              Skills
            </Link>
          </li>
          <li className="hide-contact">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-30}
              spy={true}
              activeClass="active"
              className="nav-button "
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Optional desktop-only button */}
        <button className="contact-btn text-white p-3 text-sm border-white border-1  rounded-full cursor-pointer hidden  md:flex lg:flex">
          Get In Touch
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
