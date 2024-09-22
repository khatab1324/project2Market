import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import clsx from "clsx";
import { StarsBg } from "./starsBg";

SwiperCore.use([Navigation]);

type major = {
  id: string;
  data: {
    id: string;
    projectTitle: string;
    projectDescription: string;
    particepentsNames: never[];
    place: number;
    image: string;
  }[];
};
export const WinnersCards: React.FC<{ major: major }> = ({
  major,
}: {
  major: {
    id: string;
    data: {
      id: string;
      projectTitle: string;
      projectDescription: string;
      particepentsNames: never[];
      place: number;
      image: string;
    }[];
  };
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [showNavButtons, setShowNavButtons] = useState(true);
  const groupSize = 3;
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(groupSize);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(groupSize);
    }
  };

  useEffect(() => {
    const checkSlidesVisibility = () => {
      if (swiperRef.current) {
        const totalSlidesWidth =
          swiperRef.current.slides.length *
          swiperRef.current.slides[0].clientWidth;
        const swiperWidth = swiperRef.current.el.clientWidth;

        setShowNavButtons(totalSlidesWidth > swiperWidth);
      }
    };

    checkSlidesVisibility();
    window.addEventListener("resize", checkSlidesVisibility);

    return () => {
      window.removeEventListener("resize", checkSlidesVisibility);
    };
  }, []);

  return (
    <div className="relative px-2 sm:px-6 lg:px-8 ">
      <div className="hidden lg:block">
        <StarsBg />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          840: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1224: {
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
          {major.data.map((winner) => (
            <SwiperSlide
              key={winner.id}
              className="px-4 z-50 transition-transform duration-700 ease-in-out transform sm:hover:scale-105"
            >
              <div
                className={clsx(
                  "feedback-card-winner px-6 sm:px-10 py-8 sm:py-5 rounded-[20px] max-w-[370px] mx-auto my-5 "
                )}
              >
                <div className="mb-8 sm:mb-4">
                  <h3 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[60.16px] leading-[43.16px] text-winnerGradient">
                    P2M TOP {winner.place}
                  </h3>
                </div>
                <div className="flex flex-row h-48 items-center">
                  <img
                    src={winner.image}
                    className="w-full h-40 sm:h-44 rounded-lg"
                    alt={winner.projectTitle}
                  />
                </div>
                <div className="flex">
                  <p
                    className={clsx(
                      "font-poppins font-semibold text-gradient  text-[20px] sm:text-[20px] lg:text-[19px] leading-[1.2] lg:leading-[32px] w-full mt-8 lg:mt-4 text-silverGradient"
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
      {showNavButtons && (
        <div className="flex items-center absolute bottom-[170px] -left-6 -right-6 transform -translate-y-1/2 ">
          <FaArrowCircleLeft
            size={20}
            className="swiper-button-prev cursor-pointer "
            onClick={handlePrev}
          />
          <FaArrowCircleRight
            size={20}
            className="swiper-button-next cursor-pointer "
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  );
};
