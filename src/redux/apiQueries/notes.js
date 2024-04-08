import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_url = "http://localhost:5008/";

const notesSlice = createApi({
  reducerPath: "notesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5008/api/Test/GetNotes`,
  }),
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
    getNotesById: builder.query({
      query: (noteId) => ({
        url: `/${noteId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetNotesQuery,
  endpoints: notesEndpoints,
  reducerPath: notesReducerPath,
  reducer: notesReducer,
  middleware: notesMiddleware,
} = notesSlice;
