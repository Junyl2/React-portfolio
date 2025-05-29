import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ToggleTheme() {
  const [isDark, setIsDark] = useState(true); // default to dark

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-in-out',
    });

    // Default is dark if not saved
    const useDark =
      savedTheme === 'dark' ||
      (!savedTheme &&
        !window.matchMedia('(prefers-color-scheme: light)').matches); // default dark

    document.documentElement.setAttribute(
      'data-theme',
      useDark ? 'dark' : 'light'
    );
    setIsDark(useDark);
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="toggle-theme fixed top-4 right-4 md:top-auto md:bottom-4 z-[50]">
      <input
        type="checkbox"
        id="toggle-theme"
        className="toggle-theme-checkbox hidden"
        onChange={handleToggle}
        checked={isDark}
      />
      <label
        htmlFor="toggle-theme"
        className={`toggle-theme-label cursor-pointer flex items-center w-12 h-6 rounded-full relative transition-colors
          ${isDark ? 'bg-gray-700' : 'contact-btn'}`}
      >
        <span
          className={`toggle-theme-ball absolute top-1 w-4 h-4 rounded-full transition-transform
            ${isDark ? 'left-3' : 'left-9'} bg-white`}
          style={{ transform: 'translateX(-50%)' }}
        ></span>
      </label>
    </div>
  );
}

export default ToggleTheme;
