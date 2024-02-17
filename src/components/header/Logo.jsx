import React from "react";
import logo from "../../assets/logoDSA.png";
import { NavLink } from "react-router-dom";
function Logo() {
  return (
    <NavLink to="/">
      <div className="h-16 w-16 p-2 ml-1">
        <img src={logo} alt="logo" />
      </div>
    </NavLink>
  );
}

export default Logo;
