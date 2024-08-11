import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import clsx from "clsx";
import { winnersSessonOne } from "../constants";
SwiperCore.use([Navigation]);

export const WinnersCards: React.FC = () => {
  // Reference for the swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <Swiper
        // loop={true}
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
              <div
                className={clsx(
                  " feedback-card-winner px-6 sm:px-10 py-8 sm:py-5 rounded-[20px] max-w-[370px] mx-auto my-5 h-96  ",
                 
                )}
              >
                {/* <FaQuoteLeft className="text-2xl sm:text-3xl text-white mb-4" /> */}
                <div className=" mb-8 sm:mb-4 ">
                  <h3 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[60.16px] leading-[43.16px] text-winnerGradient ">
                    P2M TOP 1
                  </h3>
                </div>
                <div className="flex flex-row items-center">
                  <img
                    src={winner.image}
                    className="w-full h-1/3 rounded-lg"
                    alt={winner.projectTitle}
                  />
                </div>
                <div className="flex ">
                  <p
                    className={clsx(
                      "font-poppins font-semibold text-gradient text-[32px] sm:text-[32px] lg:text-[30px]  leading-[1.2] lg:leading-[76.8px] w-full  mt-8 lg:mt-4  text-silverGradient "
                    )}
                  >
                    {winner.projectTitle}
                  </p>
                </div>
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
