import { stopSubmit } from "redux-form";
import { loginAPI, UsersAPI } from "../api/api";
import { getAuth } from "./authReducer";

const INITIALAIZED_SUCCESS = "INITIALAIZED-SUCCESS";

const initialState = {
  initialazed: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALAIZED_SUCCESS:
      return {
        ...state,
        initialazed: true,
      };
    default:
      return state;
  }
};

export const initialazedSuccess = () => ({ type: INITIALAIZED_SUCCESS });

export const initialazeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise]).then(() => dispatch(initialazedSuccess()));
  };
};

export default appReducer;
