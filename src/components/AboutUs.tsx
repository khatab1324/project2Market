import { aboutUsContents } from "../constants";
import { Majors } from "./Majors";
import { SectionIntro } from "./SectionIntro";

export const AboutUs = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <SectionIntro title="Our Goals" content="" />
      {aboutUsContents.map((content) => (
        <div
          key={content.id}
          className="w-[330px] h-[270px] p-5 text-white border-2 border-transparent rounded-lg flex flex-col cursor-pointer transform-gpu transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-4deg] ss:mr-8 mb-5"
        >
       
          <div className="flex-1">
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-sm font-semibold text-[#717171] bg-white rounded-full">
                {content.contentNumber}
              </span>
              <span className="font-semibold ">{content.title}</span>
            </div>
            <hr className="mt-3" />
            <p className="text-xl font-semibold my-6 ">{content.content} </p>
          </div>
        </div>
      ))}
      {/* this for what people we are aiming for  */}
      <SectionIntro title="how people we are aiming for" content="" />
      <div className="w-full flex justify-around flex-wrap ">
        <Majors title="AI/IOT"/>
        <Majors title="IT"/>
        <Majors title="ENGINEERS"/>
      </div>
    </div>
  );
};
