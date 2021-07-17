import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";

const Navbar = () => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        OpenSkyJs
      </Link>
      <Link to={PATHS.AIRPORTS} className="airports">
        Airports
      </Link>
    </nav>
  );
};

export default Navbar;
