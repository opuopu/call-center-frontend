import { tagTypes } from "../../types/tags.js";
import { baseApi } from "./baseApi.js";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetTotalQuestionsUnderContext: builder.query({
      query: (id) => ({
        url: `/questions/${id}`,
        method: "GET",
      }),
    }),
    GetRandomQestions: builder.query({
      query: (id) => ({
        url: `/questions/random-question/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetRandomQestionsQuery,
  useGetTotalQuestionsUnderContextQuery,
} = questionApi;
