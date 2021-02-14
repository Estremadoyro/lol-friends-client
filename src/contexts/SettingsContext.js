import React, { useContext, useState } from "react";

import { selectRegion } from "../misc/Variables";

export const SettingsContext = React.createContext();

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};

export const SettingsContextProvider = (props) => {
  const [region, setRegion] = useState(selectRegion.regions[0].value);

  const values = {
    region,
    setRegion,
  };

  return (
    <SettingsContext.Provider value={values}>
      {props.children}
    </SettingsContext.Provider>
  );
};
