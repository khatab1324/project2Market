import { aboutUsContents } from "../constants";
import { AboutIcec } from "./AboutIcec";
import { AboutP2M } from "./AboutP2M";
import { Majors } from "./Majors";
import { SectionIntro } from "./SectionIntro";

export const AboutUs = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center ">
      <AboutIcec />
      <AboutP2M />
      {/* this for what people we are aiming for  */}
      <SectionIntro title="how people we are aiming for" content="" />
      <div className="w-full flex justify-around flex-wrap ">
        <Majors title="AI/IOT" />
        <Majors title="IT" />
        <Majors title="ENGINEERS" />
      </div>
    </div>
  );
};
