import React from "react";

const NavBar = () => {
  return (
    <nav className="navbarArea">
      <div className="logo">
        <h4>Z. H</h4>
      </div>
      <ul className="navList">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only"></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#serv-area">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://zakariahn.github.io/Hamburgers/"
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#connect">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
