import { useState } from "react";
import { navLinks } from "../constants";
import bauLogo from "./../assets/bauLogo.png";
import youthInnovationClub from "./../assets/P2M_P2M Logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMenueOpen, setisMenueOpen] = useState(false);
  return (
    <nav className="w-full  flex justify-center items-center navbar">
      <a
        href="https://www.bau.edu.jo/bauar/Units/ICEC/Home.aspx"
        target="_blank"
      >
        <img
          src={bauLogo}
          alt="hoobank"
          className="w-[63px] h-[63px] cursor-pointer"
        />
      </a>
      <img
        src={youthInnovationClub}
        alt=""
        className="w-[70px] h-[73.5px] sm:w-[90px] sm:h-[93.5px] md:ml-4 "
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
