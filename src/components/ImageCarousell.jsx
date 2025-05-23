import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  const [selectedImage, setSelectedImage] = useState(null);

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
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-xl  shadow-[var(--card-shadow)] overflow-hidden  hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Art ${index}`}
                  className="w-full   h-60 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-black/80  flex items-center justify-center z-9999 p-4 w-screen h-screen"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] rounded-lg object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
