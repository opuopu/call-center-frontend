import { tagTypes } from "../../types/tags.js";
import { baseApi } from "./baseApi.js";

const leaderBoardAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    InsertDataIntoLeaderboard: builder.mutation({
      query: (data) => ({
        url: `/leaderboard/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.leaderboard],
    }),
    getLeaderBoardData: builder.query({
      query: (id) => ({
        url: `/questions/random-question/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useInsertDataIntoLeaderboardMutation } = leaderBoardAPi;
