import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Emoji from "../misc/Emoji";

import { searchSummonerAction } from "../actions/summonerAction";

import "../styles/SearchSummonerBar.css";

const SearchSummonerBar = ({ searchSummonerAction, region, loading }) => {
  const [summoner, setSummoner] = useState("");
  const firstUpdate = useRef(true);
  const searchSummoner = async (e) => {
    e.preventDefault();
    if (summoner) searchSummonerAction(summoner, region);
    return;
  };
  useEffect(() => {
    if (firstUpdate.current || !summoner) {
      firstUpdate.current = false;
      return;
    }
    searchSummonerAction(summoner, region);
  }, [region]);
  return (
    <>
      <form className="form-group search-summoner-form" onSubmit={searchSummoner} autoComplete="off">
        <div className="input-group my-3 shadow-sm">
          <input
            type="text"
            name="summoner"
            value={summoner}
            className="form-control "
            placeholder="Rekkles, Runewolf, Sethsu ..."
            onChange={(e) => setSummoner(e.target.value)}
            autoFocus
          />
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <button className="btn home-summoner-btn btn-block w-100" type="submit" disabled={loading}>
          Find player &nbsp; <Emoji symbol="🚀" label="rocket" />
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
  loading: state.summonerReducer.loading,
});

export default connect(mapStateToProps, {
  searchSummonerAction,
})(SearchSummonerBar);
