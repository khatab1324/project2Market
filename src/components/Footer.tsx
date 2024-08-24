import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import bauLogo from "./../assets/bauLogo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-screen-lg mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <a href="https://www.bau.edu.jo/bauar/Units/ICEC/Home.aspx">
              <img
                src={bauLogo}
                alt="Project 2 Market Logo"
                className="h-12 w-auto"
              />
            </a>
            <h3 className="text-2xl font-bold text-indigo-500">
              Project 2 Market
            </h3>
          </div>

          {/* Developers Section */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg uppercase font-semibold text-indigo-500 mb-4">
              Developers
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center space-x-6">
                  <h5 className="text-white text-lg">Khattab Fayyed</h5>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/khattab-fayyad-760354261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      aria-label="LinkedIn Khattab Fayyed"
                      className="text-gray-400 hover:text-indigo-500 transition-colors"
                    >
                      <FaLinkedinIn size={22} />
                    </a>
                    <a
                      href="https://github.com/khatab1324"
                      aria-label="GitHub Khattab Fayyed"
                      className="text-gray-400 hover:text-indigo-500 transition-colors"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-6">
                  <h5 className="text-white text-lg">Omar Alsarawi</h5>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/omar-sarawi-570440273/"
                      aria-label="LinkedIn Omar Alsarawi"
                      className="text-gray-400 hover:text-indigo-500 transition-colors"
                    >
                      <FaLinkedinIn size={22} />
                    </a>
                    <a
                      href="https://github.com/omarSarawi"
                      aria-label="GitHub Omar Alsarawi"
                      className="text-gray-400 hover:text-indigo-500 transition-colors"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 py-6 border-t border-gray-700">
          <div className="flex space-x-6">
            <a
              href="tel:+053491111"
              className="flex items-center text-gray-400 hover:text-indigo-500 transition-colors"
            >
              <FaPhone size={18} className="mr-2" />
            </a>
            <a
              href="mailto:icec@bau.edu.jo"
              className="flex items-center text-gray-400 hover:text-indigo-500 transition-colors"
            >
              <FaEnvelope size={18} className="mr-2" />
            </a>
            <a
              href="https://www.facebook.com/icecBAU?mibextid=ZbWKwL"
              aria-label="Facebook"
              className="text-gray-400 hover:text-indigo-500 transition-colors"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.instagram.com/youth_innovation_committee?igsh=MWU5b3FvdHlkczZ5MA=="
              aria-label="Instagram"
              className="text-gray-400 hover:text-indigo-500 transition-colors"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/bau-youth-innovation-committee/"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-indigo-500 transition-colors"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs py-4">
          &copy; 2024 Project 2 Market Season 2. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
