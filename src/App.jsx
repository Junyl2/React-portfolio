import React, { useEffect, useState, Suspense } from 'react';
import { usePageReady } from './hooks/UsePageReady';
import Loader from './context/Loader';
import StarsBackground from './components/StarsBackground';
import ToggleTheme from './context/ToggleTheme';
import { Footer } from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const Projects = React.lazy(() => import('./pages/Projects'));
const NavBar = React.lazy(() => import('./components/NavBar'));

const imagesToPreload = [
  './assets/home-black.png',
  './assets/about-pp.png',
  './assets/test1.jpg',
  './assets/test2.jpg',
  './assets/test3.jpg',
  './assets/test4.jpg',
  './assets/test5.jpg',
  './assets/test6.jpg',
  './assets/art7.jpg',
  './assets/art8.jpg',
  './assets/art9.jpg',

  // Add more images as needed
];

function App() {
  const isImagesReady = usePageReady(imagesToPreload);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (isImagesReady) {
      const delay = setTimeout(() => {
        setShowLoader(false);
      }, 2500); // delay after images are loaded

      return () => clearTimeout(delay);
    }
  }, [isImagesReady]);

  return (
    <>
      <Loader isVisible={showLoader} />
      {!showLoader && (
        <>
          <StarsBackground />
          <ToggleTheme />
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen text-white">
                ...
              </div>
            }
          >
            <header>
              <NavBar />
            </header>
            <main className="pb-20">
              <section>
                <Home />
              </section>
              <section>
                <About />
              </section>
              <section>
                <Skills />
              </section>
              <section>
                <Projects />
              </section>
              <section>
                <Contacts />
              </section>
            </main>
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
