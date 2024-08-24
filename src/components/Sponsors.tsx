import { SectionIntro } from "./SectionIntro";
import fristSponser from "../assets/sponsers/drive-download-20240820T165350Z-001/Diamond/الماسي beeezcrowd_logo.png";
export const Sponsors = () => {
  return (
    <div>
      <SectionIntro title="Sponsors" content="" />
      <section className="  w-full flex justify-center items-center p-8">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a className="flex items-center lg:justify-center" target="_blank">
              <img className="h-12" src={fristSponser} alt="" />
            </a>
            <a
              className="flex items-center lg:justify-center"
              target="_blank"
            ></a>
            <a className="flex items-center lg:justify-center" target="_blank">
              
            </a>
            <a
              className="flex items-center lg:justify-center"
              target="_blank"
            ></a>
            <a
              className="flex items-center lg:justify-center"
              target="_blank"
            ></a>
            <a
              className="flex items-center lg:justify-center"
              target="_blank"
            ></a>
          </div>
        </div>
      </section>
    </div>
  );
};
