import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import ToggleTheme from './context/ToggleTheme';
import React, { Suspense } from 'react';
import StarsBackground from './components/StarsBackground';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const NavBar = React.lazy(() => import('./components/NavBar'));
function App() {
  return (
    <>
      {/*  <ToggleTheme />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main> */}
      <StarsBackground />
      <ToggleTheme />

      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center">
            <h1>Loading Junyl's Portfolio</h1>
          </div>
        }
      >
        <header>
          <NavBar />
        </header>
        <main>
          <section>
            <Home />
          </section>
          <section className="sm:px-3">
            <About />
          </section>
        </main>
      </Suspense>
    </>
  );
}

export default App;
