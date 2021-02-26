import React from "react";
import "../styles/Countdown.css";

export const Countdown = () => {
  return (
    <div className="container countdown">
      <h2>
        <span className="badge time  mx-1 time-minutes"> 30m </span>
        <span className="badge time mx-1 time-seconds"> 00s </span>
      </h2>
    </div>
  );
};
