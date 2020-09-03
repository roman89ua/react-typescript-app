import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-4 paddings1RemLR">
        <NavLink to="/" className="brand-logo">
          React & TS
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Some task to do</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
