import { FaQuoteLeft } from "react-icons/fa";
import { whatTheDoctorSaid } from "../constants";
export const Opinion = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 mt-8 relative z-[1]">
        <h2
          className={
            "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full"
          }
        >
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]`}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {whatTheDoctorSaid.map((doctor) => (
          <div className=" flex flex-col justify-between  px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
            <FaQuoteLeft />
            <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
              {doctor.quote}
            </p>

            <div className="flex flex-row">
              <img
                src={
                  "https://cdn.britannica.com/35/254035-050-DB1A8457/Steven-Yeun-New-York-City-2023.jpg"
                }
                className="w-[48px] h-[48px] rounded-full"
              />
              <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                  {doctor.name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                  {doctor.postion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
