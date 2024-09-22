import { majors } from "../constants";
import { MajorCard } from "./MajorCard";
import { SectionIntro } from "./SectionIntro";
export const Particepents = () => {
  return (
    <div id="particepents" className="scroll-m-28">
      <div className="w-full flex justify-center">
        <SectionIntro title="Winners In Season 1" content="" />
      </div>
      {majors.map((major) => {
        return <MajorCard key={major.id} id={major.id} title={major.title} />;
      })}
    </div>
  );
};
