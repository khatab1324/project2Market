import { Vortex } from "./animationForTitle";
import { BackgroundCircles } from "./smallComponent/backGroundCircel";
import { StatsComponent } from "./stats";
import tempImage from "../assets/WhatsApp Image 2024-07-31 at 4.12.01 PM.jpeg";
// import {BackgroundCircles} from "./"
export const MovingPages = () => {
  return (
    //   <Vortex>

    //   </Vortex>
    <section className="flex md:flex-row flex-col h-screen sm:pt-36 pt-24 ">
      <div className="flex-1 flex flex-col justify-center items-center xl:px-0 sm:px-16 px-6">
        <div className="h-full flex flex-col justify-center items-center font-poppins font-semibold ss:text-[100px] text-[42px] text-white ss:leading-[120.8px] leading-[75px]">
          <span className="text-gradient">Project2Market</span>
          <span className="ss:text-[60px]">Season 2 
            
          </span>
        </div>
        <div className="flex-grow"></div>{" "}
        {/*broooooo this for the space broooooo */}
        <div className="md:mr-4 mr-0">
          <div className="relative w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            `{" "}
            <div className="relative z-10 p-0.5 rounded-2xl ">
              <div className="bg-conic-gradient"></div>
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img
                    src={tempImage}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />
                </div>{" "}
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
