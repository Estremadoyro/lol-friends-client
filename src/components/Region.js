import React from "react";

import { selectRegion } from "../misc/Variables";

import { useSettingsContext } from "../contexts/SettingsContext";

import "../styles/Region.css";
import "../scripts/Region.js";

const Region = () => {
  const { region, setRegion } = useSettingsContext();
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
            value={region.name}
            onChange={(e) => {
              console.log(e.target.value);
              setRegion(e.target.value);
            }}
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

export default Region;
