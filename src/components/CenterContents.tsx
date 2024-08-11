import { AboutUs } from "./AboutUs";
import { Opinion } from "./Opinion";
import { Particepents } from "./Particepents";
import { Sponsors } from "./Sponsors";
import { StatsComponent } from "./stats";

export const CenterContents = () => {
  return (
    <section className=" text-white ">
      <StatsComponent />
      <AboutUs />
      <Opinion />
      <Particepents />
      <Sponsors />
    </section>
  );
};
