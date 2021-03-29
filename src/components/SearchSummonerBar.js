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
      <form className="form-group" onSubmit={searchSummoner}>
        <input
          type="text"
          name="summoner"
          value={summoner}
          className="form-control my-4"
          placeholder="Rekkles, Runewolf, Sethsu ..."
          onChange={(e) => setSummoner(e.target.value)}
        />
        <button className="btn btn-primary btn-block w-100" type="submit">
          Find player owo!
        </button>
      </form>
      {summoner}
    </>
  );
};
