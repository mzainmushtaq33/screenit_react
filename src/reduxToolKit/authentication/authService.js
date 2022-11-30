import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_LOGIN, API_REGISTER } from "../../constants/endpoints";

export const authService = createApi({
  reducerPath: "auth",
  tagTypes: ["auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_HOST,
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      invalidatesTags: ["auth"],
      query: (formdata) => ({
        url: `${API_REGISTER}`,
        method: "POST",
        body: formdata,
      }),
    }),
    login: builder.mutation({
      invalidatesTags: ["auth"],
      query: (formdata) => ({
        url: `${API_LOGIN}`,
        method: "POST",
        body: formdata,
      }),
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation } = authService;
