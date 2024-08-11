import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import { Navigation } from "swiper/modules";
import clsx from "clsx";
import { winnersSessonOne } from "../constants";
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
                  " px-6 sm:px-10 py-8 sm:py-5 rounded-[20px] max-w-[370px] mx-auto my-5  feedback-card-winner h-96 ",
                  {
                    "px-6 sm:px-10 py-8 sm:py-12": winner.place == 3,
                  }
                )}
              >
                {/* <FaQuoteLeft className="text-2xl sm:text-3xl text-white mb-4" /> */}
                <div className="flex justify-center mb-8 sm:mb-4">
                  {/* <img src={bauLogo} alt="" className="w-16 h-16 " /> */}
                  <h3 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[60.16px] leading-[43.16px] text-winnerGradient">
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
                  {/* {winner.place === 1 && (
                    <img
                      src={firstPlaceMedal}
                      alt=""
                      className="w-[40px] h-[40px] mt-4 relative right-2 "
                    />
                  )}
                  {winner.place === 2 && (
                    <img
                      src={secondPlaceMedal}
                      alt=""
                      className="w-[40px] h-[40px] mt-4"
                    />
                  )}
                  {winner.place === 3 && (
                    <img
                      src={theerdPlaceMedal}
                      alt=""
                      className="w-[40px] h-[40px] mt-4"
                    />
                  )} */}
                  <p
                    className={clsx(
                      "font-poppins font-semibold text-gradient text-[32px] sm:text-[32px] lg:text-[30px]  leading-[1.2] lg:leading-[76.8px] w-full  mt-8 lg:mt-4  text-center text-silverGradient ",
                      {
                        // "text-goldGradient": winner.place === 1,
                        // "text-silverGradient": winner.place === 2,
                        // "text-bronzeGradient": winner.place === 3,
                      }
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
