import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import "../scripts/Navbar.js";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary "> 
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">LoL Friends</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/"> Home</Link>
          <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
          <Link className="nav-link" to="/champions">Champions</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
