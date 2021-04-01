import React from "react";
import { Link } from "react-router-dom";
import Logo from "../static/lol-friends-logos/vector/default-monochrome.svg";
import "../styles/HomeLogo.css";

export const HomeLogo = () => {
  return (
    <>
      <div className="container-fluid my-4">
        <Link to="/">
          <img className="mx-auto d-block home-logo" src={Logo} />
        </Link>
      </div>
    </>
  );
};
