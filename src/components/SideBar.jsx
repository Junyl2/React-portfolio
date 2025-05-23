import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiMenuAlt3,
  HiHome,
  HiUser,
  HiBriefcase,
  HiDocumentText,
  HiLightningBolt,
  HiMail,
} from 'react-icons/hi';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? 'text-blue-500 font-bold flex items-center gap-2'
      : 'text-gray-700 flex items-center gap-2';

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden flex items-center px-4 py-2 m-4 text-white bg-gray-800 rounded shadow z-50 fixed top-4 left-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenuAlt3 className="mr-2 text-xl" />
        Explore
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar p-4 space-y-4 h-full fixed top-0 left-0 z-40 transform bg-white dark:bg-gray-900 w-60 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:block`}
      >
        <h2 className="text-xl font-semibold mb-4">Navigation</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/"
            className={navLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            <HiHome /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            <HiUser /> About
          </NavLink>
          <NavLink
            to="/projects"
            className={navLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            <HiBriefcase /> Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={navLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            <HiDocumentText /> Resume
          </NavLink>
          <NavLink
            to="/skills"
            className={navLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            <HiLightningBolt /> Skills
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            <HiMail /> Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
