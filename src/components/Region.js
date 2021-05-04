import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { selectRegion } from "../misc/Variables";

import { switchRegionAction } from "../actions/regionAction";
import "../styles/Region.css";
import "../scripts/Region.js";

const Region = ({ region, loading, switchRegionAction }) => {
  return (
    <div className="region-navbar">
      <ul
        className="nav navbar-nav justify-content-end"
        id="region-selector"
        style={{ position: "relative" }}
      >
        <li className="nav-item">
          <select
            className="region-button btn w-100 btn-lg"
            aria-expanded="false"
            value={region}
            onChange={(e) => {
              // console.log(e.target.value);
              switchRegionAction(e.target.value);
            }}
            disabled={loading}
          >
            {selectRegion.regions.map((region) => {
              return (
                <option
                  key={region.value}
                  value={region.value}
                  className="text-center"
                >
                  {region.name}
                </option>
              );
            })}
          </select>
        </li>
      </ul>
    </div>
  );
};

Region.propTypes = {
  region: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  switchRegionAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  region: state.regionReducer.region,
  loading: state.regionReducer.loading,
});

export default connect(mapStateToProps, {
  switchRegionAction,
})(Region);
