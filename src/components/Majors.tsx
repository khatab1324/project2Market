import { majors } from "../constants";

export const Majors = () => {
  return (
    <div className=" flex justify-between w-full">
      {majors.map((major) => (
        <div
          key={major.id}
          className="relative w-72 h-44 bg-neutral-50 rounded-lg -skew-x-6 -translate-y-6 hover:-translate-y-2 hover:translate-x-1 hover:skew-x-0 duration-500 p-2 card-compact hover:bg-base-200 transition-all [box-shadow:15px_15px_#031845] hover:[box-shadow:7px_4px_#D01D45]"
        >
          <span className="w-full h-full">
            <div className="bg-gradient-to-r from-indigo-700  to-slate-800 text-neutral-50 h-full rounded-lg border border-opacity-5 flex justify-center items-center hover:bg-gradient-to-r hover:from-indigo-900 hover:via-purple-800 hover:to-orange-700">
              <span className="text-gradient font-poppins font-semibold text-[32px]">
                {major.title}
              </span>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};
