import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Link
      to="home"
      smooth={true}
      duration={600}
      offset={-100}
      className={`fixed z-[999] cursor-pointer transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 100px)',
        right: '24px',
      }}
      aria-label="Scroll to top"
    >
      {/* Button container */}
      <div className="group relative">
        {/* Background with border */}
        <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-lg transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:shadow-xl">
          <FiArrowUp className="text-lg text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:-translate-y-0.5" />
        </div>

        {/* Corner accent */}
        <div className="absolute -top-1 -right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 right-0 w-full h-[2px] bg-[var(--color-accent)]" />
          <div className="absolute top-0 right-0 w-[2px] h-full bg-[var(--color-accent)]" />
        </div>
      </div>
    </Link>
  );
}

export default ScrollToTop;
