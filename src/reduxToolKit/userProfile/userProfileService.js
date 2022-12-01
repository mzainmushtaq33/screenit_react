import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    API_USER_EDIT,API_USER_INFO,
    API_USER_EDIT_ADDRESS
} from "../../constants/endpoints";

export const userProfileService = createApi({
  reducerPath: "userProfile",
  tagTypes: ["userProfile"],
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
    getUserInfo: builder.query({
        providesTags: ["userProfile"],
        query: () => ({
          url: `${API_USER_INFO}`,
          method: "GET",
        }),
      }),
    userEdit: builder.mutation({
    //   invalidatesTags: ["userProfile"],
      query: (formdata) => ({
        url: `${API_USER_EDIT}`,
        method: "POST",
        body: formdata,
      }),
    }),
    userAddressEdit: builder.mutation({
        //   invalidatesTags: ["userProfile"],
          query: (formdata) => ({
            url: `${API_USER_EDIT_ADDRESS}`,
            method: "POST",
            body: formdata,
          }),
        }),
  }),
});
export const {
  useUserEditMutation,
  useGetUserInfoQuery,
  useUserAddressEditMutation
} = userProfileService;
