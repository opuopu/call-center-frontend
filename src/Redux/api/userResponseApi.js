import { tagTypes } from "../../types/tags.js";
import { baseApi } from "./baseApi.js";

const userResponseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    InserUserResponse: builder.mutation({
      query: (data) => ({
        url: "/user-response",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.QuestionSubmit],
    }),
    CalculateTotalScores: builder.query({
      query: (id) => ({
        url: `/user-response/total-score/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.QuestionSubmit, tagTypes.question],
    }),
    RetrivemangerLeaderBoard: builder.query({
      query: () => ({
        url: `/user-response/manager-leaderboard/`,
        method: "GET",
      }),
      providesTags: [tagTypes.QuestionSubmit, tagTypes.question],
    }),
    RetriveUserLeaderboard: builder.query({
      query: () => ({
        url: `/user-response/user-leaderboard/`,
        method: "GET",
      }),
      providesTags: [tagTypes.QuestionSubmit, tagTypes.question],
    }),
  }),
});

export const {
  useInserUserResponseMutation,
  useCalculateTotalScoresQuery,
  useRetrivemangerLeaderBoardQuery,
  useRetriveUserLeaderboardQuery,
} = userResponseApi;
