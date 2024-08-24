import { majors } from "../constants";
import { MajorCard } from "./MajorCard";
import { SectionIntro } from "./SectionIntro";
export const Particepents = () => {
  return (
    <div>
      <SectionIntro title="Winners in season 1" content="" />
      {/* <div className="flex w-full justify-between"> */}
      {majors.map((major) => {
        return <MajorCard key={major.id} id={major.id} title={major.title} />;
      })}
      {/* </div> */}
    </div>
  );
};
