import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowRight } from 'react-icons/fi';

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
        ${scrolled ? 'bg-black/80' : 'bg-transparent'}
        md:rounded-none  backdrop-blur-lg `}
      data-aos="fade"
    >
      <div className="flex items-center justify-around md:justify-between landing-container py-3">
        {/* md:ml-20 lg:ml-25 */}
        <ul className="flex justify-around  md:justify-start w-full md:w-auto md:rounded-full p-1.5 nav-bg transition-all duration-300 md:gap-2">
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
              offset={-40}
              spy={true}
              activeClass="active"
              className="nav-button"
            >
              About
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
              to="contacts"
              smooth={true}
              duration={500}
              offset={-20}
              spy={true}
              activeClass="active"
              className="nav-button"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* get in touch */}
        <Link
          to="contacts"
          smooth={true}
          duration={500}
          offset={-10}
          spy={true}
          activeClass="active"
          className="contact-btn text-white py-2 px-4 gap-1 text-[12px] rounded-full cursor-pointer hidden  md:flex lg:flex items-center justify-center tansform transition-all ease-in-out hover:scale-105 nav-glow"
        >
          Get In Touch <FiArrowRight />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
