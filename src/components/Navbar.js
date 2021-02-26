import React from "react";
import { Link } from "react-router-dom";
import Region from "../components/Region";

import "../styles/Navbar.css";
import "../scripts/Navbar.js";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg py-0">
        <Link to="/" className="navbar-brand d-flex w-50 mx-3">
          LoL Friends
        </Link>
        <button
          className="navbar-toggler btn-lg"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100" id="navbarText">
          <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item mx-3 active">
              <Link className="nav-link" to="/">
                Summoner
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/leaderboard">
                Leaderboard
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/champions">
                Champions
              </Link>
            </li>
          </ul>
        </div>
        <Region />
      </nav>
    </>
  );
};

export default Navbar;
