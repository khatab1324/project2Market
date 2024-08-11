import { CenterContents } from "./components/CenterContents";
import { Footer } from "./components/Footer";
import { MovingPages } from "./components/MovingPages";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar section */}
      <div className="sm:px-16 bg-primary z-10 fixed absolute-0 w-full px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      {/* first section */}
      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
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
        <div className="xl:max-w-[1280px] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
