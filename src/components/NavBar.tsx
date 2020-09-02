import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-4 paddings1RemLR">
        <a href="/" className="brand-logo">
          React & TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/tasks">Some task to do</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
