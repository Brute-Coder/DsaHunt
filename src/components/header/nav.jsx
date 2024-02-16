import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0">
      <nav className="bg-gray-600 flex justify-between items-center w-full">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden sm:flex">
          <ul className="flex items-center gap-[4vw]">
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
                className="text-m text-white hover:animate-pulse"
                to="/practice"
              >
                Practice
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

          <button className="bg-green-500 text-white px-5 py-2 rounded-sm hover:bg-green-700 cursor-pointer ml-4">
            GitHub
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden">
          <button
            className="bg-green-500 text-white px-5 py-2 rounded-sm hover:bg-green-700 cursor-pointer"
            onClick={toggleNavbar}
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          {isOpen && (
            <ul className="flex basis-full items-center flex-col absolute top-full left-0 bg-gray-600 w-full">
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
                  to="/practice"
                  onClick={toggleNavbar}
                >
                  Practice
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
