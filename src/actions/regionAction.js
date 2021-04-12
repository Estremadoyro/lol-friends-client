import {
  LOAD_REGION_SUCCESS,
  LOAD_REGION_ERROR,
  SWITCH_REGION_SUCCESS,
  SWITCH_REGION_ERROR,
} from "../action-types/types";

import { selectRegion } from "../misc/Variables";
import { setAlertAction } from "./alertAction";

export const loadRegionAction = () => (dispatch) => {
  const localRegion = localStorage.region;
  if (
    localRegion &&
    selectRegion.regions.map((region) => region.value).includes(localRegion)
  ) {
    dispatch({
      type: LOAD_REGION_SUCCESS,
      payload: localRegion,
    });
    return;
  }
  dispatch({
    type: LOAD_REGION_ERROR,
    payload: "Region doesn't exist",
  });
};
export const switchRegionAction = (region) => (dispatch) => {
  if (selectRegion.regions.map((region) => region.value).includes(region)) {
    dispatch({
      type: SWITCH_REGION_SUCCESS,
      payload: region,
    });
    return;
  }
  dispatch(setAlertAction("Region doesn't exist"));
  dispatch({
    type: SWITCH_REGION_ERROR,
    payload: "Region doesn't exist",
  });
};
