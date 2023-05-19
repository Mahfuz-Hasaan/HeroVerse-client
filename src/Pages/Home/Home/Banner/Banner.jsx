import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

import { Autoplay, Pagination, Navigation } from "swiper";

import cover_1 from '../../../../assets/cover/batman.jpg'
import cover_2 from '../../../../assets/cover/captain-america.jpg'
import cover_3 from '../../../../assets/cover/dc.jpg'
import cover_4 from '../../../../assets/cover/dc_2.jpg'
import cover_5 from '../../../../assets/cover/ironman.jpg'
import cover_6 from '../../../../assets/cover/ironmanr.jpg'
import cover_7 from '../../../../assets/cover/marvel.jpg'
import cover_8 from '../../../../assets/cover/robot.jpg'

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={cover_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={cover_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={cover_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={cover_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={cover_5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={cover_6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={cover_7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={cover_8} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
