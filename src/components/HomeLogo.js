import React from "react";

import Logo from "../static/lol-friends-logos/vector/default-monochrome.svg";
import "../styles/HomeLogo.css"

export const HomeLogo = () => {
  return (
    <>
      <div className="container-fluid my-4">
        <img className="mx-auto d-block" src={Logo} />
      </div>
    </>
  );
};
