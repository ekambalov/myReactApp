import { stopSubmit } from "redux-form";
import { loginAPI, UsersAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login },
  isAuth,
});

export const getAuth = () => {
  return (dispatch) => {
    return UsersAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (data) => {
  return (dispatch) => {
    loginAPI.login(data.email, data.password, data.remeberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuth());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        let action = stopSubmit("login", { _error: message });
        dispatch(action);
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    loginAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        console.log("pizdec");
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
