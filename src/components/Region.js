import React from "react";

import { selectRegion } from "../misc/Variables";

import { useSettingsContext } from "../contexts/SettingsContext";

import "../styles/Region.css";

const Region = () => {
  const { region, setRegion } = useSettingsContext();
  return (
    <>
      <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
        <li className="nav-item">
          <select
            className="region-button btn btn-success btn-lg"
            aria-expanded="false"
            value={region.name}
            onChange={(e) => {
              console.log(e.target.value);
              setRegion(e.target.value);
            }}
          >
            {selectRegion.regions.map((region) => {
              return (
                <option key={region.value} value={region.value}>
                  {region.name}
                </option>
              );
            })}
          </select>
        </li>
      </ul>
    </>
  );
};

export default Region;
