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
          <div className="absolute top-1/2 left-1/2 z-50 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src="image/svg+xml,%3csvg%20width='952'%20height='396'%20viewBox='0%200%20952%20396'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.35'%3e%3ccircle%20cx='417'%20cy='161'%20r='4'%20fill='white'/%3e%3ccircle%20opacity='0.5'%20cx='515'%20cy='116'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.5'%20cx='423'%20cy='279'%20r='4'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='366'%20cy='394'%20r='2'%20fill='white'/%3e%3ccircle%20cx='265'%20cy='327'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.2'%20cx='362'%20cy='209'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='548'%20cy='211'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.2'%20cx='607'%20cy='281'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.21'%20cx='789'%20cy='281'%20r='2'%20fill='white'/%3e%3ccircle%20cx='362'%20cy='65'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='192'%20cy='132'%20r='2'%20fill='white'/%3e%3ccircle%20cx='743'%20cy='2'%20r='2'%20fill='white'/%3e%3c/g%3e%3cpath%20d='M834%20150C827.373%20150%20822%20144.627%20822%20138C822%20131.373%20827.373%20126%20834%20126C840.627%20126%20846%20131.373%20846%20138C846%20144.627%20840.627%20150%20834%20150Z'%20fill='url(%23paint0_linear_701_17365)'/%3e%3cpath%20d='M4%20206C1.79086%20206%204.76837e-07%20204.209%204.76837e-07%20202C4.76837e-07%20199.791%201.79086%20198%204%20198C6.20914%20198%208%20199.791%208%20202C8%20204.209%206.20914%20206%204%20206Z'%20fill='url(%23paint1_linear_701_17365)'/%3e%3cpath%20d='M948%20206C945.791%20206%20944%20204.209%20944%20202C944%20199.791%20945.791%20198%20948%20198C950.209%20198%20952%20199.791%20952%20202C952%20204.209%20950.209%20206%20948%20206Z'%20fill='url(%23paint2_linear_701_17365)'/%3e%3cpath%20d='M154%20326C149.582%20326%20146%20322.418%20146%20318C146%20313.582%20149.582%20310%20154%20310C158.418%20310%20162%20313.582%20162%20318C162%20322.418%20158.418%20326%20154%20326Z'%20fill='url(%23paint3_linear_701_17365)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_701_17365'%20x1='834'%20y1='126'%20x2='834'%20y2='150'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2388E5BE'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_701_17365'%20x1='4'%20y1='198'%20x2='4'%20y2='206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DD734F'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_701_17365'%20x1='948'%20y1='198'%20x2='948'%20y2='206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DD734F'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_701_17365'%20x1='154'%20y1='310'%20x2='154'%20y2='326'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23B9AEDF'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              className="w-full"
              width="950"
              height="400"
              alt="Stars"
            ></img>
          </div>
          <BackgroundCircles parallaxRef={""} />
        </div>
        <div className="flex-grow"></div>{" "}
        {/*broooooo this for the space broooooo */}
        <div className="flex md:mr-4 mr-0">
          <StatsComponent />
        </div>
      </div>
    </section>
  );
};
