import { configureStore } from "@reduxjs/toolkit";
import * as apiQueries from "./apiQueries";
import * as slices from "./slices";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfiguration = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

export const store = configureStore({
  reducer: {
    notes: slices.notesSliceReducer,
    [apiQueries.notesReducerPath]: apiQueries.notesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(persistConfiguration).concat([
      apiQueries.notesMiddleware,
    ]),
});

export * from "./apiQueries";
export * from "./slices";
export * from "./selectors";
