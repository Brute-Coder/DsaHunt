import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaBars, FaChevronUp } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNavbar() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="sticky top-0 z-30 ">
      <nav className="flex items-center justify-between w-full bg-gray-600 ">
        <Logo />
        <div className="hidden sm:block">
          <ul className=" flex items-center gap-[4vw]">
            <li>
              <NavLink
                className="text-white text-m hover:animate-pulse"
                to="/roadmap"
              >
                Roadmap
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white text-m hover:animate-pulse"
                to="/resources"
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white text-m hover:animate-pulse"
                to="/educators"
              >
                Educators
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden gap-2 md:flex md:p-3 sm:block">
          <a href="https://chat.whatsapp.com/C9ue5s9Km2T1YLPFhT6JR1" target="_blank">
            <button className="px-5 py-2 text-white bg-green-500 rounded-sm cursor-pointer hover:bg-green-700 hover:scale-105">
             Join Us
            </button>
          </a>
          <a href="https://github.com/Brute-Coder/DsaHunt" target="_blank">
            <button className="px-5 py-2 text-white bg-green-500 rounded-sm cursor-pointer hover:bg-green-700 hover:scale-105">
              Contribute
            </button>
          </a>
        </div>
        <div className="flex md:hidden lg:hidden">
          <button
            className="px-5 py-2 mr-4 text-white bg-green-500 rounded-sm cursor-pointer hover:bg-green-700"
            onClick={toggleNavbar}
          >
            {isOpen ? <FaChevronUp /> : <FaBars />}
          </button>
          {isOpen && (
            <ul
              className="absolute left-0 flex flex-col items-center w-full gap-2 bg-gray-600 basis-full top-full"
            >
              <li>
                <NavLink
                  className="w-full px-4 py-2 text-white text-m hover:animate-pulse"
                  to="/roadmap"
                  onClick={toggleNavbar}
                >
                  Roadmap
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2 text-white text-m hover:animate-pulse"
                  to="/resources"
                  onClick={toggleNavbar}
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2 text-white text-m hover:animate-pulse"
                  to="/educators"
                  onClick={toggleNavbar}
                >
                  Educators
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
