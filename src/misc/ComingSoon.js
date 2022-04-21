import React from "react";
import ComingSoonTeemo from "../static/ComingSoonTeemo.png";

import "../styles/ComingSoon.css";

export const ComingSoon = () => {
  return (
    <>
      <h1 className=" text-center"> Coming soon ...</h1>
      <div className="container-fluid my-4">
        <img className="mx-auto d-block coming-soon-teemo" src={ComingSoonTeemo} alt="coming-soon.png" />
      </div>
      <h2 className="text-center">
        {" "}
        Multiple <strong>Teemos</strong> are currently working on this section{" "}
      </h2>
    </>
  );
};
