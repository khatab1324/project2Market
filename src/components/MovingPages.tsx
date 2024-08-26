import { Vortex } from "./animationForTitle";
import { BackgroundCircles } from "./smallComponent/backGroundCircel";
import { StatsComponent } from "./stats";
import tempImage from "../assets/WhatsApp Image 2024-07-31 at 4.12.01 PM.jpeg";
// import {BackgroundCircles} from "./"
import rocket from "../assets/rocket-svgrepo-com.svg";
import curve from "../assets/hero/curve.png";
import heroBackground from "../assets/hero/hero-background.jpg";
import { Spotlight } from "./background-beams-with-collision";
import { StarsBg } from "./starsBg";
export const MovingPages = () => {
  return (
    //   <Vortex>

    //   </Vortex>
    <section className="flex md:flex-row flex-col sm:pt-36 pt-24 ">
      <StarsBg />
      <div className="flex-1 flex flex-col justify-center items-center xl:px-0 sm:px-16 px-6 ">
        <div className="h-full flex z-20 flex-col justify-center items-center font-poppins font-semibold md:text-[100px] ss:text-[80px] xs:text-[60px] text-[42px] text-white ss:leading-[120.8px] leading-[75px] drop-shadow-glowForTitle">
          <span className="text-gradient">Project2Market</span>
          <div className="flex">
            <span className="inline-block relative sm:text-[70px] ss:text-[60px]">
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
        <div className="mt-4 md:mr-4 mr-0 lg:h-[550px] sm:h-[550px] h-[630px]">
          <div className="relative sm:w-[23rem] w-[15rem] mx-auto sm:max-w-5xl">
            `{" "}
            <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="bg-conic-gradient"></div>
              <div className="h-[0.6rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className=" rounded-b-[0.9rem] overflow-hidden md:aspect-[1024/590] lg:aspect-[1024/590] aspect-[1024/690]">
                <img
                  src={tempImage}
                  // className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[40%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
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
