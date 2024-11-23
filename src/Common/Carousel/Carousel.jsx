import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Carousel({slide1,slide2,slide3}) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt='slide'/></SwiperSlide>
        <SwiperSlide><img src={slide2} alt='slide'/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt='slide'/></SwiperSlide>
        <SwiperSlide><img src={slide1} alt='slide'/></SwiperSlide>
        <SwiperSlide><img src={slide2} alt='slide'/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt='slide'/></SwiperSlide>
        <SwiperSlide><img src={slide1} alt='slide'/></SwiperSlide>
        <SwiperSlide><img src={slide2} alt='slide'/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt='slide'/></SwiperSlide>

      </Swiper>
    </>
  );
}
