import { useEffect, useState } from "react";
import { statsOfTheCompetition } from "../constants";

interface Stat {
  id: string;
  title: string;
  value: string;
}

interface AnimatedValue {
  id: string;
  value: number;
}

const useAnimateValues = (stats: Stat[]): AnimatedValue[] => {
  const [animatedValues, setAnimatedValues] = useState<AnimatedValue[]>(
    stats.map((state) => ({
      id: state.id,
      value: 0,
    }))
  );

  useEffect(() => {
    const animateValue = (
      start: number,
      end: number,
      duration: number,
      callback: (value: number) => void
    ) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        callback(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    stats.forEach((state) => {
      // Convert state.value to a number
      const endValue = parseInt(state.value, 10);
      animateValue(0, endValue, 2000, (newValue) => {
        setAnimatedValues((prevValues) =>
          prevValues.map((val) =>
            val.id === state.id ? { ...val, value: newValue } : val
          )
        );
      });
    });
  }, [stats]);

  return animatedValues;
};

export const StatsComponent: React.FC = () => {
  const animatedValues = useAnimateValues(statsOfTheCompetition);

  return (
    <div className="flex flex-row flex-wrap xs:justify-center justify-start ss:mb-20 mb-16 ss:mt-20 mt-16 lg:justify-around xl:justify-between">
      {animatedValues.map((state) => (
        <div
          key={state.id}
          className="flex justify-center items-center sm:mr-10 m-4"
        >
          <h3 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[60.16px] leading-[43.16px] text-white">
            {statsOfTheCompetition.find((s) => s.id === state.id)?.title}:
          </h3>
          <p
            className="font-poppins font-normal xs:text-[38.89px] text-[20.89px] xs:leading-[38.89px] leading-[40.16px] text-gradient uppercase ml-4 transition-all duration-500 ease-out"
            style={{ transitionProperty: "opacity, transform" }}
          >
            {state.value}
          </p>
        </div>
      ))}
    </div>
  );
};
