import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { searchSummonerAction } from "../actions/searchSummonerAction";

import "../styles/SearchSummonerBar.css";

const SearchSummonerBar = ({ searchSummonerAction, region, loading }) => {
  const [summoner, setSummoner] = useState("");
  const searchSummoner = async (e) => {
    e.preventDefault();
    searchSummonerAction(summoner, region);
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
        <button
          className="btn home-summoner-btn btn-block w-100"
          type="submit"
          disabled={loading}
        >
          Find player owo!
        </button>
      </form>
    </>
  );
};

SearchSummonerBar.propTypes = {
  searchSummonerAction: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  region: state.regionReducer.region,
  loading: state.searchSummonerReducer.loading,
});

export default connect(mapStateToProps, { searchSummonerAction })(
  SearchSummonerBar
);
