import React from "react";
import { NavLink, Link } from "react-router-dom";
import Region from "../components/Region";
import Emoji from "../misc/Emoji";

import "../styles/Navbar.css";
import "../scripts/Navbar.js";

const Navbar = () => {
  return (
    <div id="fullNavbar">
      <nav className="navbar navbar-dark bg-dark navbar-expand-md py-0">
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
            <li className="nav-item mx-3 ">
              <NavLink
                exact
                className="nav-link"
                activeStyle={{ color: "#ffffff" }}
                to="/"
              >
                <i className="fas fa-search mx-1"></i>
                <span className="nav-item-name">Summoner </span>
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className="nav-link"
                to="/leaderboard"
                activeStyle={{ color: "#ffffff" }}
              >
                <i className="fas fa-trophy mx-1"></i>
                <span className="nav-item-name">
                  Leaderboard <Emoji symbol="✨" label="sheep" />
                </span>
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className="nav-link"
                to="/champions"
                activeStyle={{ color: "#ffffff" }}
              >
                <i className="fas fa-dragon mx-1"></i>
                <span className="nav-item-name">Champions </span>
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className="nav-link"
                to="/reports"
                activeStyle={{ color: "#ffffff" }}
              >
                <i className="fas fa-flag mx-1"></i>
                <span className="nav-item-name">Reports </span>
              </NavLink>
            </li>
            <li className="nav-item ms-3 me-4">
              <NavLink
                className="nav-link"
                to="/news"
                activeStyle={{ color: "#ffffff" }}
              >
                <i className="fas fa-newspaper mx-1"></i>
                <span className="nav-item-name">News </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Region />
      </nav>
    </div>
  );
};

export default Navbar;
