import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "./Slider.css";

const CeilingSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "/axSlider/p1.jpeg",
    "/axSlider/p2.jpeg",
    "/axSlider/p3.jpeg",
    "/axSlider/p4.jpeg",
    // "/axSlider/p2.jpeg",
    "/axSlider/p5.jpg",
  ];

  return (
    <div className="slider-container">
      {/* اسلایدر اصلی */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-slider"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Ceiling design ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* thumbnail ها */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        className="thumbs-slider"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Thumbnail ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CeilingSlider;
