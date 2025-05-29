import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
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
      document.body.classList.add('modal-open');
      window.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  const renderModal = () => {
    if (selectedIndex === null) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className="relative w-full max-w-4xl max-h-full mx-auto flex items-center justify-center"
        >
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
                  alt={`Full view ${idx + 1}`}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => setSelectedIndex(null)}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 text-white text-4xl p-2 rounded-full hover:text-gray-300 transition z-50"
          >
            <FiX />
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <div className="relative max-w-7xl mx-auto rounded-xl">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={img}
                  alt={`Artwork ${index + 1}`}
                  className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {renderModal()}
    </>
  );
};

export default ImageCarousel;
