import { statsOfTheCompetition } from "../constants";
export const StatsComponent = () => {
  return (
    <div className="flex flex-row  flex-wrap  ss:mb-20 mb-16 ss:mt-20 mt-16">
      {statsOfTheCompetition.map((state) => (
        <div
          key={state.id}
          className="flex  justify-center items-center sm:mr-10 m-2"
        >
          <h3 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[60.16px] leading-[43.16px] text-white">
            {state.title}:
          </h3>
          <p className="font-poppins font-normal xs:text-[38.89px] text-[20.89px] xs:leading-[38.89px] leading-[40.16px] text-gradient uppercase ml-4">
            {state.value}
          </p>
        </div>
      ))}
    </div>
  );
};
