import { SET_ALERT, REMOVE_ALERT } from "../action-types/types";

const initialState = {
  alert: "",
};

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return { alert: payload };
    case REMOVE_ALERT:
      return { alert: "" };
    default:
      return state;
  }
};
