import React from "react";
import { Link } from "react-router-dom";
import Region from "../components/Region";

import "../styles/Navbar.css";
import "../scripts/Navbar.js";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg py-0">
        <Link to="/" className="navbar-brand d-flex mx-1">
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
        <div className="navbar-collapse collapse" id="navbarText">
          <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item mx-3 active">
              <Link className="nav-link" to="/">
                <i className="fas fa-search mx-1"></i>
                <span className="nav-item-name">Summoner </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/leaderboard">
                <i className="fas fa-trophy mx-1"></i>
                <span className="nav-item-name">Leaderboard </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/champions">
                <i className="fas fa-dragon mx-1"></i>
                <span className="nav-item-name">Champions </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/reports">
                <i className="fas fa-flag mx-1"></i>
                <span className="nav-item-name">Reports </span>
              </Link>
            </li>
            <li className="nav-item ms-3 me-4">
              <Link className="nav-link" to="/news">
                <i className="fas fa-newspaper mx-1"></i>
                <span className="nav-item-name">News </span>
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
