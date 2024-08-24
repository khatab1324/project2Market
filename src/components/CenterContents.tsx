import { AboutUs } from "./AboutUs";
import { Opinion } from "./Opinion";
import { Particepents } from "./Particepents";
import { Sponsors } from "./Sponsors";

export const CenterContents = () => {
  return (
    <section className=" text-white p-4">
      <AboutUs />
      <Opinion />
      <Particepents />
      <Sponsors />
    </section>
  );
};
