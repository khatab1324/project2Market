import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { whatTheDoctorSaid } from "../constants";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { SectionIntro } from "./SectionIntro";

SwiperCore.use([Navigation]);

export const Opinion = () => {
  // Reference for the swiper instance
  const swiperRef = React.useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 5000); // Slide every 2 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <SectionIntro
        title="what People  saying about us"
        content="we are the best compatition in jordan and we are aim to univarsity student"
      />
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="multiple-slide-carousel"
      >
        <div className="relative ">
          {whatTheDoctorSaid.map((doctor) => (
            <SwiperSlide key={doctor.id} className="p-3">
              <div className="flex flex-col justify-between px-6 sm:px-10 py-8 sm:py-12 rounded-[20px] max-w-[370px] mx-auto my-5 feedback-card ">
                <FaQuoteLeft className="text-2xl sm:text-3xl text-white mb-4" />
                <p className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[1.6] text-white mb-6">
                  {doctor.quote}
                </p>
                <div className="flex flex-row items-center">
                  <img
                    src="https://cdn.britannica.com/35/254035-050-DB1A8457/Steven-Yeun-New-York-City-2023.jpg"
                    className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full"
                    alt={doctor.name}
                  />
                  <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[16px] sm:text-[20px] leading-tight text-white ">
                      {doctor.name}
                    </h4>
                    <p className="font-poppins font-normal text-[14px] sm:text-[16px] leading-tight text-dimWhite">
                      {doctor.postion}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="flex  items-center absolute bottom-[170px] left-0 right-0 transform -translate-y-1/2  ">
        <FaArrowCircleLeft
          size={20}
          className="swiper-button-prev cursor-pointer "
        />
        <FaArrowCircleRight
          size={20}
          className="swiper-button-next cursor-pointer"
        />
      </div>
    </div>
  );
};
