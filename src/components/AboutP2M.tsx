import { aboutP2M } from "../constants";
import { SectionIntro } from "./SectionIntro";
import pdfLogo from "../assets/pdf-svgrepo-com.svg";
import { FaFilePdf } from "react-icons/fa6";

import { FaRegFilePdf } from "react-icons/fa6";
import { PiFilePdfDuotone } from "react-icons/pi";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
export const AboutP2M = () => {
  return (
    <>
      <SectionIntro title="About P2M" content="" />
      {aboutP2M.map((content) => (
        <div
          key={content.id}
          className="w-[330px] h-[300px] p-5 text-white border-2 border-transparent rounded-lg flex flex-col cursor-pointer transform-gpu ransition-transform duration-500 ease-out hover:scale-105 hover:shadow-lg ss:mr-8 mb-10 backdrop-filter backdrop-blur-lg"
        >
          <div className="flex-1">
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-sm font-semibold text-[#717171] bg-white rounded-full">
                {content.contentNumber}
              </span>
              <span className="font-semibold ">{content.title}</span>
            </div>
            <hr className="mt-3" />
            <p className="text-xl font-semibold my-2">{content.content} </p>
            {content.id === "3" && (
              <a href="#" className="w-full flex justify-center">
                {" "}
                <BsFillFileEarmarkPdfFill size={135} />
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
