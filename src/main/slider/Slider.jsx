import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="slide-img"
            src="/pubg.avif"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-img"
            src="/freefire.jpeg"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-img"
           src="/efootball2023.jpg"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-img"
            src="/callof.jpg"
            alt=""
            srcset=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
