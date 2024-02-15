import { tagTypes } from "../../types/tags.js";
import { baseApi } from "./baseApi.js";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetRandomQestions: builder.query({
      query: (id) => ({
        url: `/questions/random-question/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.question],
    }),
  }),
});

export const { useGetRandomQestionsQuery } = questionApi;
