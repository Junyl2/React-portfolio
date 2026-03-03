import React, { Suspense } from 'react';

// Lazy load all page components
const Home = React.lazy(() => import('@pages/Home'));
const About = React.lazy(() => import('@pages/About'));
const Skills = React.lazy(() => import('@pages/Skills'));
const Contacts = React.lazy(() => import('@pages/Contacts'));
const Projects = React.lazy(() => import('@pages/Projects'));
const NavBar = React.lazy(() => import('@components/NavBar'));
const Footer = React.lazy(() => import('@components/Footer'));
const ScrollToTop = React.lazy(() => import('@components/ScrollToTop'));

// Minimal loading state
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent animate-spin" />
      <span className="text-caption">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      {/* Navigation */}
      <header>
        <NavBar />
      </header>

      {/* Main content */}
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll to top */}
      <ScrollToTop />
    </Suspense>
  );
}

export default App;
