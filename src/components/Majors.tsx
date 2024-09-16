import bg from "../assets/bgFromCard/card-1.svg";
export const Majors = ({ title }: { title: string }) => {
  return (
    <div className="container  mr-4 xs:w-44  w-32">
      <div className="flex  justify-center items-center gap-10 mb-10 ">
        <div className="w-full flex justify-center items-center">
          <img
            src={bg}
            alt="Background"
            className="absolute h-28 w-32 ss:w-36 sm:w-40 "
          />

          <div className=" flex flex-wrap flex-row p-[2.4rem] ">
            <h1
              className="xs:text-2xl text-xl flex justify-center drop-shadow-xl shadow-white"
              style={{
                textShadow:
                  "0px 0px 60px rgba(0, 0, 255, 1), 0px 0px 60px rgba(0,0, 255, 1)",
              }}
            >
              {title}
            </h1>
            <div className="flex items-center mt-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
