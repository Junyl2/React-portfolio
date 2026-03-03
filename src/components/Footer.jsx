function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] lg:pl-[72px]">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-[var(--color-text-primary)] font-semibold text-lg mb-1">
              Junyl Cabusas
            </h3>
            <p className="text-caption">
              Website Developer & Product Builder
            </p>
          </div>

          {/* Center - Quick links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Junyl2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/Junyl2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
            <a
              href="mailto:artbyjunylc@gmail.com"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-center sm:text-left">
            &copy; {currentYear} Junyl Cabusas. All rights reserved.
          </p>
          <p className="text-caption">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Bottom padding for mobile nav */}
      <div className="h-16 md:h-0" />
    </footer>
  );
}

export default Footer;
