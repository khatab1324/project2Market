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
      <SectionIntro title="Who People We Are Aiming For" content="" />
      <div className="w-full flex justify-around flex-wrap ">
        {majorsForThisSession.map((majore) => {
          return <Majors key={majore.id} title={majore.title} />;
        })}
      </div>
    </div>
  );
};
