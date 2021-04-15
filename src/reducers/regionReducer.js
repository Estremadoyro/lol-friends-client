import {
  LOAD_REGION_SUCCESS,
  LOAD_REGION_ERROR,
  SWITCH_REGION_SUCCESS,
  SWITCH_REGION_ERROR,
} from "../action-types/types";

const initialState = {
  region: "la2",
  error: null,
};

export const regionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REGION_SUCCESS:
      return state;
    case SWITCH_REGION_SUCCESS:
      localStorage.setItem("region", payload);
      return { ...state, region: payload };
    case LOAD_REGION_ERROR:
      localStorage.setItem("region", "la2");
      return { ...state, region: "la2" };
    case SWITCH_REGION_ERROR:
      localStorage.setItem("region", "la2");
      return { ...state, error: payload };
    default:
      return state;
  }
};
