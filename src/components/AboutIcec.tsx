import { aboutIcec } from "../constants";
import { SectionIntro } from "./SectionIntro";

export const AboutIcec = () => {
  return (
    <>
      <SectionIntro title="About ICEC" content="" />
      {aboutIcec.map((content) => (
        <div
          key={content.id}
          className="w-[330px] h-[270px] p-5 text-white border-2 border-transparent rounded-lg flex flex-col cursor-pointer transform-gpu ransition-transform duration-500 ease-out hover:scale-105 hover:shadow-lg ss:mr-8 mb-5 backdrop-filter backdrop-blur-lg"
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
    </>
  );
};
