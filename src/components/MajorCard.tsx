import { majors, winnersSessonOne } from "../constants";
import { StarsBg } from "./starsBg";
import { WinnersCards } from "./WinnersCards";

export const MajorCard = ({ id, title }: { id: string; title: string }) => {
  

  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center sm:mb-16 mb-6 mt-8 relative z-[1]">
        <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[48px] text-gradient leading-[1.2] lg:leading-[76.8px] w-full lg:w-1/2 mb-4 lg:mb-0 ">
          {title}
        </h2>
      </div>
      {id === winnersSessonOne.AiIot.id && (
        <WinnersCards major={winnersSessonOne.AiIot} />
      )}{" "}
      {id === winnersSessonOne.It.id && (
        <WinnersCards major={winnersSessonOne.It} />
      )}{" "}
      {id === winnersSessonOne.engineers.id && (
        <WinnersCards major={winnersSessonOne.engineers} />
      )}{" "}
    </div>
  );
};
