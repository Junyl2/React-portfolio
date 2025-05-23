import React, { useState, useEffect } from 'react';

const STAR_COUNT = 100;
const STAR_MIN_SIZE = 1;
const STAR_MAX_SIZE = 3;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const generateStars = () => {
    const newStars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      newStars.push({
        id: i,
        x: randomBetween(0, window.innerWidth),
        y: randomBetween(0, window.innerHeight),
        size: randomBetween(STAR_MIN_SIZE, STAR_MAX_SIZE),
        opacity: randomBetween(0.2, 0.6),
        twinkleDuration: randomBetween(2000, 5000), // ms
      });
    }
    setStars(newStars);
  };

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: windowSize.width,
          height: windowSize.height,
          background:
            'radial-gradient(circle, rgba(0,0,10,0.95) 0%, rgba(0,0,5,1) 100%)',
          pointerEvents: 'none',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        {stars.map(({ id, x, y, size, opacity, twinkleDuration }) => (
          <div
            key={id}
            style={{
              position: 'absolute',
              top: y,
              left: x,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: `rgba(255, 255, 255, ${opacity})`,
              animation: `twinkle ${twinkleDuration}ms ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Twinkle keyframes */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </>
  );
};

export default StarsBackground;
