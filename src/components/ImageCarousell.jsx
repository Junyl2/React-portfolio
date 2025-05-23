import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiX } from 'react-icons/fi';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import test1 from '@assets/test1.jpg';
import test2 from '@assets/test2.jpg';
import test3 from '@assets/test3.jpg';
import test4 from '@assets/test4.jpg';
import test5 from '@assets/test5.jpg';
import test6 from '@assets/test6.jpg';
import art7 from '@assets/art7.jpg';
import art8 from '@assets/art8.jpg';
import art9 from '@assets/art9.jpg';

const images = [test1, test2, test3, test4, art9, test6, art7, art8, test5];

const ImageCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedIndex(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="relative max-w-7xl mx-auto rounded-xl px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-xl shadow-[var(--card-shadow)] overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={img}
                  alt={`Art ${index}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4">
          <div className="w-xl" ref={modalRef}>
            <Swiper
              modules={[Navigation]}
              navigation
              initialSlide={selectedIndex}
              onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Selected ${idx}`}
                    className="w-full max-h-[80vh] rounded-lg object-contain relative"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="absolute top-15 right-6 md:top-2 md:right-2  text-white text-5xl font-bold hover:text-gray-300 z-50 cursor-pointer"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close modal"
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
