import { AboutUs } from "./AboutUs";
import { Opinion } from "./Opinion";
import { StatsComponent } from "./stats";

export const CenterContents = () => {
  return (
    <section className=" text-white ">
      <StatsComponent />
      <AboutUs />
      
      <Opinion />
    </section>
  );
};
