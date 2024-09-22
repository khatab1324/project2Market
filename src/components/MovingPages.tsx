import { StatsComponent } from "./stats";
import tempImage from "../assets/hero/Ibtikari1.png";
import rocket from "../assets/rocket-svgrepo-com.svg";
import curve from "../assets/hero/curve.png";
import { StarsBg } from "./starsBg";
export const MovingPages = () => {
  return (
    <section className="flex md:flex-row flex-col sm:pt-32 pt-24 mb-10">
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
        <div className=" md:mr-4 mr-0 lg:h-[550px] sm:h-[630px] h-[630px]">
          <div className="relative sm:w-[23rem] w-[15rem] mx-auto sm:max-w-5xl">
            <div className="bg-conic-gradient"></div>

            <div className="  overflow-hidden">
              <img src={tempImage} width={1024} height={490} alt="AI" />
            </div>
          </div>
          <StatsComponent />
          <div className="relative mb-24">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};
