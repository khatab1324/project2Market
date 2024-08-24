import { Vortex } from "./animationForTitle";
import { BackgroundCircles } from "./smallComponent/backGroundCircel";
import { StatsComponent } from "./stats";
// import {BackgroundCircles} from "./"
export const MovingPages = () => {
  return (
    //   <Vortex>

    //   </Vortex>
    <section className="flex md:flex-row flex-col h-screen sm:pt-36 pt-24 ">
      <div className="flex-1 flex flex-col justify-center items-center xl:px-0 sm:px-16 px-6">
        <div className="h-full flex flex-col justify-center items-center font-poppins font-semibold ss:text-[100px] text-[42px] text-white ss:leading-[120.8px] leading-[75px]">
          <span className="text-gradient">Project2Market</span>
          <span className="ss:text-[60px]">Season 2</span>
        </div>
        <div className="flex-grow"></div>{" "}
        {/*broooooo this for the space broooooo */}
        <div className="flex md:mr-4 mr-0">
          <StatsComponent />
        </div>
      </div>
      {/* <BackgroundCircles parallaxRef={""} /> */}
    </section>
  );
};
