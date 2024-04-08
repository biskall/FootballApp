import { createSlice } from "@reduxjs/toolkit";
import { notesEndpoints } from "../apiQueries";

const initialState = {
    notes: null,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      notesEndpoints.getNotes.matchFulfilled,
      (state, { payload }) => {
        console.log("payload", payload);
        state.notes = payload;
        console.log("state", state);
      }
    );
  },
});

export const notesSliceReducer = notesSlice.reducer;
export const {} = notesSlice.actions;
