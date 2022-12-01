import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  API_LOGIN,
  API_REGISTER,
  API_CHANGE_PASSWORD,
  API_LOGOUT,
} from "../../constants/endpoints";

export const authService = createApi({
  reducerPath: "auth",
  tagTypes: ["auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_HOST,
    prepareHeaders: (headers, { getState }) => {
      // console.log("redux", "reducer");
      // const {
      //   authSlice: { token },
      // } = getState();
      const token = JSON.parse(localStorage.getItem("screenItOnInfo"));
      // console.log("token", token);
      headers.set("authorization", `Bearer ${token?.token}`);
      return headers;
    },
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
    changePassword: builder.mutation({
      invalidatesTags: ["auth"],
      query: (formdata) => ({
        url: `${API_CHANGE_PASSWORD}`,
        method: "POST",
        body: formdata,
      }),
    }),
    logout: builder.mutation({
      invalidatesTags: ["auth"],
      query: (formdata) => ({
        url: `${API_LOGOUT}`,
        method: "POST",
        // body: formdata,
      }),
    }),
  }),
});
export const {
  useRegisterMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useLogoutMutation,
} = authService;
