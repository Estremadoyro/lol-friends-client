import React, { useContext, useState } from "react";

import { selectRegion, selectLeague } from "../misc/Variables";

export const SettingsContext = React.createContext();

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};

export const SettingsContextProvider = (props) => {
  const [region, setRegion] = useState(selectRegion.regions[0].value);
  const [league, setLeague] = useState(selectLeague.leagues[0].value);

  const values = {
    region,
    league,
    setRegion,
    setLeague,
  };

  return (
    <SettingsContext.Provider value={values}>
      {props.children}
    </SettingsContext.Provider>
  );
};
