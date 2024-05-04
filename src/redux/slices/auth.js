import { createSlice } from "@reduxjs/toolkit";
import { authEndpoints } from "../apiQueries/auth";

const initialState = {
  user: null,
  message: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      authEndpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        console.log("payload", payload);
        state.user = payload;
        console.log("state user => ", state.user);
      }
    );
    builder.addMatcher(
      authEndpoints.login.matchFulfilled,
      (state, { payload }) => {
        console.log("payload", payload);
        state.message = payload;
        console.log("state", state);
      }
    );
    builder.addMatcher(
      authEndpoints.register.matchFulfilled,
      (state, { payload }) => {
        console.log("payload", payload);
        state.user = payload;
        console.log("state", state);
      }
    );
  },
});

export const authSliceReducer = authSlice.reducer;
export const {} = authSlice.actions;
