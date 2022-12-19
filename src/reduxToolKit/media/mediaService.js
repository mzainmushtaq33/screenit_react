import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  API_MEDIA_STORE,
  API_GET_MEDIA_BY_ID,
} from "../../constants/endpoints";

export const mediaService = createApi({
  reducerPath: "media",
  tagTypes: ["media"],
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
    getMediaData: builder.query({
      providesTags: ["media"],
      query: (id) => ({
        url: `${API_GET_MEDIA_BY_ID}/${id}`,
        method: "GET",
      }),
    }),
    postMediaData: builder.mutation({
        invalidatesTags: ["media"],
      query: (formdata) => ({
        url: `${API_MEDIA_STORE}`,
        method: "POST",
        body: formdata,
      }),
    }),
  }),
});
export const { useGetMediaDataQuery, usePostMediaDataMutation } = mediaService;
