import { AboutUs } from "./AboutUs";
import { Opinion } from "./Opinion";
import { Particepents } from "./Particepents";
import { StatsComponent } from "./stats";

export const CenterContents = () => {
  return (
    <section className=" text-white ">
      <StatsComponent />
      <AboutUs />
      <Opinion />
      <Particepents />
    </section>
  );
};
