import { Spotlight } from "./components/background-beams-with-collision";
import { CenterContents } from "./components/CenterContents";
import { Footer } from "./components/Footer";
import { MovingPages } from "./components/MovingPages";
import { Navbar } from "./components/Navbar";
import { TracingBeam } from "./components/TestPage";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar section */}
      <div
        className="sm:px-16 bg-primary z-50 fixed absolute-0 w-full px-6 flex justify-center items-center
      "
      >
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <TracingBeam className="">
        {/* first section */}
        <div className="sm:px-6 px-16 bg-primary flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full px-16">
            {/* <MovingPages /> */}
            <Spotlight fill="#7044fa" />

            <MovingPages />
          </div>
        </div>
        {/* second section */}
        <div className="bg-primary sm:px-16 px-4 flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            <CenterContents />
          </div>
        </div>
        {/* theird section */}

        <div className="bg-primary flex justify-center items-start">
          <div className=" w-full">
            <Footer />
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}

export default App;
