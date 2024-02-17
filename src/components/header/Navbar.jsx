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
    <header className=" sticky top-0 z-30 ">
      <nav className=" bg-gray-600 flex justify-between items-center w-full">
        <Logo />
        <div className=" hidden sm:block">
          <ul className=" flex items-center gap-[4vw]">
            <li>
              <NavLink
                className=" text-white text-m hover:animate-pulse"
                to="/roadmap"
              >
                Roadmap
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-m text-white hover:animate-pulse"
                to="/resources"
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-white text-m hover:animate-pulse"
                to="/educators"
              >
                Educators
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" hidden sm:block ">
          <a href="https://github.com/Brute-Coder/DsaHunt" target="_blank">
            <button className=" bg-green-500 text-white px-5 py-2 rounded-sm hover:bg-green-700 cursor-pointer mr-4 hover:scale-105">
              Contribute
            </button>
          </a>
        </div>
        <div className="flex md:hidden lg:hidden">
          <button
            className=" bg-green-500 text-white px-5 py-2 rounded-sm hover:bg-green-700 cursor-pointer mr-4"
            onClick={toggleNavbar}
          >
            {isOpen ? <FaChevronUp /> : <FaBars />}
          </button>
          {isOpen && (
            <ul
              className="flex basis-full items-center flex-col absolute top-full 
            left-0 bg-gray-600 w-full gap-2"
            >
              <li>
                <NavLink
                  className="text-white w-full text-m hover:animate-pulse py-2 px-4"
                  to="/roadmap"
                  onClick={toggleNavbar}
                >
                  Roadmap
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white text-m hover:animate-pulse py-2 px-4"
                  to="/resources"
                  onClick={toggleNavbar}
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white text-m hover:animate-pulse py-2 px-4"
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
