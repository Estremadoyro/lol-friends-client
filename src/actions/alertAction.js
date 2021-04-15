import { SET_ALERT, REMOVE_ALERT } from "../action-types/types";

export const setAlertAction = (alert) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: alert,
  });
};

export const removeAlertAction = () => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
  });
};
