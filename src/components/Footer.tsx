import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="">
      <hr />
      <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3 className="font-bold text-xl text-indigo-600">Company Name</h3>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">
            Resources
          </div>
        </div>
        <div className="p-5 flex justify-center flex-col">
          <div className="text-sm uppercase text-indigo-600 font-bold text-center">
            Developers
          </div>
          <ul className="flex">
            <li>
              <h3 className="text-white">Khattab Fayyed</h3>
              <div className="flex m-5 ">
                <a href="/#" className="w-6 mr-4">
                  <FaLinkedinIn
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    size={25}
                  />
                </a>
                <a href="/#" className="w-6 ml-4">
                  <AiFillGithub
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    size={25}
                  />
                </a>
              </div>
            </li>
            <li>
              <h3 className="text-white">Omar Alsarawi</h3>
              <div className="flex p-5">
                <a href="/#" className="w-6 mx-1 ">
                  <FaLinkedinIn
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    size={25}
                  />
                </a>
                <a href="/#" className="w-6 mx-1">
                  <AiFillGithub
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    size={25}
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">
            Contact us
          </div>
          <a className="my-3 block" href="tel:+053491111">
            05/3491111 Sub: 3290{" "}
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="mailto:icec@bau.edu.jo">
            icec@bau.edu.jo<span className="text-teal-200 text-xs p-1"></span>
          </a>
        </div>
      </div>

      <div className=" pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1">
              <FaFacebookF className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
            <a href="/#" className="w-6 mx-1">
              <FaTwitter className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
            <a href="/#" className="w-6 mx-1">
              <FaInstagram className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
            <a href="/#" className="w-6 mx-1">
              <FaLinkedinIn className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
            <a href="/#" className="w-6 mx-1">
              <AiFillGithub className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
          </div>
          <div className="text-center mt-5 text-gray-600 text-xs">
            &copy; 2024 Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
