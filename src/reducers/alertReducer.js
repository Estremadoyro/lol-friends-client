import { SET_ALERT, REMOVE_ALERT } from "../action-types/types";

const initialState = "";

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return payload;
    case REMOVE_ALERT:
      return state;
    default:
      return state;
  }
};
