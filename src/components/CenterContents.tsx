import { AboutUs } from "./AboutUs";
import { Spotlight } from "./background-beams-with-collision";
import { Opinion } from "./Opinion";
import { Particepents } from "./Particepents";
import { Regeister } from "./Regeister";

export const CenterContents = () => {
  return (
    <section className=" text-white p-4">
      <AboutUs />
      <Spotlight fill="#7044fa" />
      <Opinion />
      <Particepents />
      <Regeister />
    </section>
  );
};
