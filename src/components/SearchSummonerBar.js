import React, { useState } from "react";

import "../styles/SearchSummonerBar.css";

export const SearchSummonerBar = () => {
  const [summoner, setSummoner] = useState("");
  const searchSummoner = async (e) => {
    e.preventDefault();
    console.log(summoner);
  };
  return (
    <>
      <form className="form-group" onSubmit={searchSummoner} autoComplete="off">
        <div className="input-group my-3">
          <input
            type="text"
            name="summoner"
            value={summoner}
            className="form-control "
            placeholder="Rekkles, Runewolf, Sethsu ..."
            onChange={(e) => setSummoner(e.target.value)}
          />
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <button className="btn home-summoner-btn btn-block w-100" type="submit">
          Find player owo!
        </button>
      </form>
      {summoner}
    </>
  );
};
