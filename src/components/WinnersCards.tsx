import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { whatTheDoctorSaid, winnersSessonOne } from "../constants";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { SectionIntro } from "./SectionIntro";

SwiperCore.use([Navigation]);

export const WinnersCards: React.FC = () => {
  // Reference for the swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 5000); // Slide every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
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
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="multiple-slide-carousel"
      >
        <div className="relative">
          {winnersSessonOne.AiIot.map((winner) => (
            <SwiperSlide key={winner.id} className="p-3">
              <div className="flex flex-col justify-between px-6 sm:px-10 py-8 sm:py-12 rounded-[20px] max-w-[370px] mx-auto my-5 feedback-card">
                <FaQuoteLeft className="text-2xl sm:text-3xl text-white mb-4" />
                <div className="flex flex-row items-center">
                  <img
                    src={winner.image}
                    className="w-full h-1/3 "
                    alt={winner.projectTitle}
                  />
                </div>
                <p className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[1.6] text-white mb-6">
                  {winner.projectTitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="flex items-center absolute bottom-[170px] left-0 right-0 transform -translate-y-1/2">
        <FaArrowCircleLeft
          size={20}
          className="swiper-button-prev cursor-pointer"
        />
        <FaArrowCircleRight
          size={20}
          className="swiper-button-next cursor-pointer"
        />
      </div>
    </div>
  );
};
