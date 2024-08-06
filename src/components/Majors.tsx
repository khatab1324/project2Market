import bg from "../assets/bgFromCard/card-1.svg";
export const Majors = ({ title }: { title: string }) => {
  return (
    // <div className=" flex justify-between w-full">
    //   {majors.map((major) => (
    //     <div
    //       key={major.id}
    //       className="relative w-72 h-44 bg-neutral-50 rounded-lg -skew-x-6 -translate-y-6 hover:-translate-y-2 hover:translate-x-1 hover:skew-x-0 duration-500 p-2 card-compact hover:bg-base-200 transition-all [box-shadow:15px_15px_#031845] hover:[box-shadow:7px_4px_#D01D45]"
    //     >
    //       <span className="w-full h-full">
    //         <div className="bg-gradient-to-r from-indigo-700  to-slate-800 text-neutral-50 h-full rounded-lg border border-opacity-5 flex justify-center items-center hover:bg-gradient-to-r hover:from-indigo-900 hover:via-purple-800 hover:to-orange-700">
    //           <span className="text-gradient font-poppins font-semibold text-[32px]">
    //             {major.title}
    //           </span>
    //         </div>
    //       </span>
    //     </div>
    //   ))}
    // </div>
    <div className="container  mr-4 xs:w-44  w-32">
      <div className="flex  justify-center items-center gap-10 mb-10 ">
        <div
          className=" bg-no-repeat bg-[length:100%_100%]  flex  justify-center items-center w-full"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className=" flex flex-wrap flex-row p-[2.4rem] ">
            <h1
              className="xs:text-2xl text-xl flex justify-center animate-colorCycle drop-shadow-2xl shadow-white "
              style={{ textShadow: "0px 0px 40px rgba(0, 0, 255, 1)" }}
            >
              {title}
            </h1>

            {/* <p className="body-2 mb-6 text-n-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              aliquam mollitia sapiente est commodi, harum non sed molestiae,
              soluta, fugit explicabo aliquid atque. Maxime reprehenderit odio,
              blanditiis numquam dolore reiciendis.
            </p> */}
            <div className="flex items-center mt-auto">
              {/* <img
                src={item.iconUrl}
                width={48}
                height={48}
                alt={item.title}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
