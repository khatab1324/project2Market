import { Vortex } from "./animationForTitle";
import { BackgroundCircles } from "./smallComponent/backGroundCircel";
import { StatsComponent } from "./stats";
import tempImage from "../assets/WhatsApp Image 2024-07-31 at 4.12.01 PM.jpeg";
// import {BackgroundCircles} from "./"
import rocket from "../assets/rocket-svgrepo-com.svg";
import curve from "../assets/hero/curve.png";
import heroBackground from "../assets/hero/hero-background.jpg"
export const MovingPages = () => {
  return (
    //   <Vortex>

    //   </Vortex>
    <section className="flex md:flex-row flex-col sm:pt-28 pt-28 ">
      <div className="flex-1 flex flex-col justify-center items-center xl:px-0 sm:px-16 px-6">
        <div className="h-full flex z-20 flex-col justify-center items-center font-poppins font-semibold ss:text-[100px] text-[42px] text-white ss:leading-[120.8px] leading-[75px]">
          <span className="text-gradient">Project2Market</span>
          <div className="flex">
            <span className="inline-block relative ss:text-[60px]">
              Season 2{" "}
              <img
                src={curve}
                className="absolute z-50 top-full left-0 w-full xl:-mt-6"
                width={624}
                height={28}
                alt="Curve"
              />{" "}
            </span>{" "}
            <img src={rocket} className=" w-[60px] ml-5" alt="" />
          </div>
        </div>
        <div className="flex-grow"></div>{" "}
        {/*broooooo this for the space broooooo */}
        <div className="md:mr-4 mr-0">
          <div className="relative sm:w-[23rem] w-[10rem] mx-auto sm:max-w-5xl">
            `{" "}
            <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="bg-conic-gradient"></div>
              <div className="h-[0.5rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className=" rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/590]">
                <img
                  src={tempImage}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
            </div>
            <div className="absolute -z-10 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
          </div>
          <StatsComponent />
          <div className="relative mb-24">
            {/* <BackgroundCircles parallaxRef={""} /> */}
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};
