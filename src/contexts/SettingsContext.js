import React, { useContext, useState } from "react";

import { selectRegion, selectRank } from "../misc/Variables";

export const SettingsContext = React.createContext();

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};

export const SettingsContextProvider = (props) => {
  const [region, setRegion] = useState(selectRegion.regions[0].value);
  const [rank, setRank] = useState(selectRank.ranks[0].value);

  const values = {
    region,
    rank,
    setRegion,
    setRank,
  };

  return (
    <SettingsContext.Provider value={values}>
      {props.children}
    </SettingsContext.Provider>
  );
};
