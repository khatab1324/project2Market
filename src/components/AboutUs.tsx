import { majorsForThisSession } from "../constants";
import { AboutIcec } from "./AboutIcec";
import { AboutP2M } from "./AboutP2M";
import { Majors } from "./Majors";
import { SectionIntro } from "./SectionIntro";

export const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-row flex-wrap justify-center scroll-my-40 "
    >
      <AboutIcec />
      <AboutP2M />
      {/* this for what people we are aiming for  */}
      <SectionIntro title="how people we are aiming for" content="" />
      <div className="w-full flex justify-around flex-wrap ">
        {majorsForThisSession.map((majore) => {
          return <Majors title={majore.title} />;
        })}
      </div>
    </div>
  );
};
