import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiBriefcase, FiLayers, FiMail, FiArrowUpRight } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', to: 'home', offset: -100, icon: FiHome },
  { name: 'About', to: 'about', offset: -80, icon: FiUser },
  { name: 'Work', to: 'projects', offset: -80, icon: FiBriefcase },
  { name: 'Skills', to: 'skills', offset: -80, icon: FiLayers },
  { name: 'Contact', to: 'contacts', offset: -80, icon: FiMail },
];

function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* === DESKTOP LEFT SIDE NAVIGATION === */}
      <nav
        className="fixed left-0 top-0 h-full z-[1000] hidden lg:flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Container */}
        <div
          className={`h-full flex flex-col justify-between py-8 px-4 bg-[var(--color-bg-elevated)] border-r border-[var(--color-border)] transition-all duration-500 ease-out ${
            isHovered ? 'w-[180px]' : 'w-[72px]'
          }`}
        >
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-100}
            className="group cursor-pointer flex items-center gap-3"
          >
            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[var(--color-accent)] transition-transform duration-300 group-hover:scale-105">
              <span className="text-base font-semibold text-white">
                JC
              </span>
            </div>
            <span
              className={`text-sm font-medium text-[var(--color-text-primary)] whitespace-nowrap transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
              }`}
            >
              Junyl
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.to;

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={link.offset}
                    spy={true}
                    onSetActive={() => setActiveSection(link.to)}
                    className={`group relative flex items-center gap-3 px-3 py-3 cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'bg-[var(--color-accent)]/10'
                        : 'hover:bg-[var(--color-bg-tertiary)]'
                    }`}
                  >
                    {/* Active indicator line */}
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[var(--color-accent)] transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                      }`}
                    />

                    {/* Icon */}
                    <div
                      className={`w-10 h-10 -ml-3 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      <Icon className="text-xl" />
                    </div>

                    {/* Label */}
                    <span
                      className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)]'
                      } ${
                        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="contacts"
            smooth={true}
            duration={800}
            offset={-80}
            className="group cursor-pointer"
          >
            <div
              className={`flex items-center gap-2 px-3 py-3 bg-[var(--color-accent)] transition-all duration-300 group-hover:bg-[var(--color-accent-hover)]`}
            >
              <div className="w-10 h-10 -ml-3 flex-shrink-0 flex items-center justify-center">
                <FiArrowUpRight className="text-xl text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <span
                className={`text-sm font-medium text-white whitespace-nowrap transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
              >
                Let's Talk
              </span>
            </div>
          </Link>
        </div>
      </nav>

      {/* === TABLET TOP NAVIGATION === */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] hidden md:flex lg:hidden">
        <div className="w-full py-4 px-6 bg-[var(--color-bg-elevated)]/95 backdrop-blur-xl border-b border-[var(--color-border)]">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={800}
              offset={-100}
              className="group cursor-pointer flex items-center gap-3"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-[var(--color-accent)]">
                <span className="text-sm font-semibold text-white">JC</span>
              </div>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                Junyl Cabusas
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={link.offset}
                  spy={true}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ${
                    activeSection === link.to
                      ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10'
                      : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="contacts"
              smooth={true}
              duration={800}
              offset={-80}
              className="group px-5 py-2.5 bg-[var(--color-accent)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
            >
              <span className="text-sm font-medium text-white">Contact</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* === MOBILE BOTTOM NAVIGATION === */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[1000]">
        {/* Gradient fade */}
        <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent pointer-events-none" />

        {/* Navigation bar */}
        <div className="bg-[var(--color-bg-elevated)]/95 backdrop-blur-xl border-t border-[var(--color-border)]">
          <div className="flex items-center justify-around py-2 px-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={link.offset}
                  spy={true}
                  onSetActive={() => setActiveSection(link.to)}
                  className="relative flex flex-col items-center gap-1 px-4 py-2 cursor-pointer"
                >
                  {/* Active background */}
                  {isActive && (
                    <span className="absolute inset-1 bg-[var(--color-accent)]/10" />
                  )}

                  {/* Icon */}
                  <Icon
                    className={`relative text-lg transition-colors duration-300 ${
                      isActive
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-muted)]'
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`relative text-[10px] font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Safe area padding */}
          <div className="h-[env(safe-area-inset-bottom)]" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
