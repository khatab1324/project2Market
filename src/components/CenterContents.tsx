import { AboutUs } from "./AboutUs";
import { Opinion } from "./Opinion";
import { Particepents } from "./Particepents";
import { Regeister } from "./Regeister";
import { Sponsors } from "./Sponsors";

export const CenterContents = () => {
  return (
    <section className=" text-white p-4">
      <AboutUs />
      <Opinion />
      <Particepents />
      {/* <Sponsors /> */}
      <Regeister />
    </section>
  );
};
