import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
  errorMessage: "",
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails: (state, {payload: {user}}) => {
      state.user = user;
    },
    setUserToken: (state, {payload: {token}}) => {
      state.token = token;
    },
    logOut: state => {
      state.token = "";
      state.user = null;
      let redirectTo = window.location.pathname;
      window.localStorage.clear();
      window.location.href = `/login?redirectTo=${redirectTo}`;
    },
  },
});

const {actions, reducer} = authSlice;
export const {setUserDetails, logOut, setUserToken} = actions;

export const logout = () => {
  window.localStorage.clear();
  window.location.href = `/login`;
};
export const logoutAdmin = () => {
  window.localStorage.clear();
  window.location.href = `/admin/login`;
};
// selector to select user details from the store
export const selectCurrentUser = state => state.auth.user;
export const selectToken = state => state.auth.token;

export default reducer;
