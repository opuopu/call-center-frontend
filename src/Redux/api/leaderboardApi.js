import { tagTypes } from "../../types/tags.js";
import { baseApi } from "./baseApi.js";
import { useGetAllLeaderBoardDataQuery } from "./quizApi.js";

const leaderBoardAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    InsertDataIntoLeaderboard: builder.mutation({
      query: (data) => ({
        url: `/leaderboard/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypes.leaderboard],
    }),
    GetLeaderboardData: builder.query({
      query: (id) => ({
        url: `/leaderboard`,
        method: "GET",
      }),
      providesTags: [tagTypes.leaderboard],
    }),
  }),
});

export const {
  useInsertDataIntoLeaderboardMutation,
  useGetLeaderboardDataQuery,
} = leaderBoardAPi;
