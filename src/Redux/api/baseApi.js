import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../../types/tags";
import { logout } from "../features/auth/authSlice.js";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_BACKEND_UR}/api`,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

const customizedBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    result = await baseQuery(args, api, extraOptions);
    if (!result.data) {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customizedBaseQuery,
  tagTypes: tagTypesList,

  endpoints: () => ({}),
});
