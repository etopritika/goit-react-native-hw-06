import { createSlice } from "@reduxjs/toolkit";
import {
  registerAuthThunk,
  logInAuthThunk,
  logOutAuthThunk,
} from "./authOperations";

const initialState = {
  email: "",
  login: "",
  token: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.email = "";
      state.login = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          action.type === registerAuthThunk.fulfilled.type ||
          action.type === logInAuthThunk.fulfilled.type,
        (state, action) => {
          state.email = action.payload.email;
          state.login = action.payload.login;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        (action) => action.type === logOutAuthThunk.fulfilled.type,
        (state) => {
          state.email = "";
          state.login = "";
          state.token = "";
          state.isLoggedIn = false;
        }
      );
  },
});

export const { setUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectUser = (state) => state.auth;
