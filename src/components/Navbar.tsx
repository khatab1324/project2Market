import { useState } from "react";
import { navLinks } from "../constants";
import bauLogo from "./../assets/ICEC Logo_Primary_C.png";
// import youthInnovationClub from "./../assets/youthInnovationClub.png";
import youthInnovationClub from "./../assets/P2M_P2M Logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMenueOpen, setisMenueOpen] = useState(false);
  return (
    <nav className="w-full py-1 flex justify-center items-center navbar">
      <img src={bauLogo} alt="hoobank" className="w-[70px] h-[70px]" />
      {/* <img
        src={youthInnovationClub}
        alt=""
        className="w-[124px] h-[110px] ml-8"
      /> */}
      <img
        src={youthInnovationClub}
        alt=""
        className="w-[90px] h-[93.5px] ml-"
      />{" "}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <span
          className="hover:cursor-pointer"
          onClick={() => setisMenueOpen(!isMenueOpen)}
        >
          {!isMenueOpen ? (
            <HiMenuAlt2
              color="white"
              size={25}
              style={{ objectFit: "contain", alignItems: "center" }}
            />
          ) : (
            <AiOutlineCloseCircle color="white" size={28} />
          )}
        </span>
        <div
          className={`${
            !isMenueOpen ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-16 right-1 mx-4 my-3 min-w-[150px] rounded-xl sidebar`}
        >
          <ul className=" flex justify-end items-start flex-1 flex-col">
            {navLinks.map((item, index) => (
              <li
                key={item.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === item.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(item.title)}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
