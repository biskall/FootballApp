import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_url = "http://localhost:5008/";

const authSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5008/api/Auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      }),
    }),
    register: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `/register`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `/user`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  endpoints: authEndpoints,
  reducerPath: authReducerPath,
  reducer: authReducer,
  middleware: authMiddleware,
} = authSlice;
