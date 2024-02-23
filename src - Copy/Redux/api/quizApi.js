import { tagTypes } from "../../types/tags";
import { baseApi } from "./baseApi";

const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allQuiz: builder.query({
      query: () => ({
        url: "/quiz",
        method: "GET",
      }),
      // providesTags: [tagTypes.quiz],
    }),

    singleQuiz: builder.query({
      query: (id) => ({
        url: `/quiz/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.quiz],
    }),
    GetRandomContext: builder.query({
      query: () => ({
        url: `/quiz/random-context`,
        method: "GET",
      }),
      providesTags: [tagTypes.quiz, tagTypes.question, tagTypes.leaderboard],
    }),

    singlQuestion: builder.query({
      query: (id) => ({
        url: `/quiz/question/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.quiz],
    }),
    questionAnswer: builder.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: [tagTypes.quiz],
    }),
    ManagerLeaderboard: builder.query({
      query: (id) => ({
        url: `/quiz/manager-leaderboard/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.quiz],
    }),

    GetAllLeaderBoardData: builder.query({
      query: () => ({
        url: `/quiz/user-leaderboard`,
        method: "GET",
      }),
      providesTags: [tagTypes.quiz],
    }),
  }),
});

export const {
  useAllQuizQuery,
  useSingleQuizQuery,
  useSinglQuestionQuery,
  useManagerLeaderboardQuery,
  useGetAllLeaderBoardDataQuery,
  useGetRandomContextQuery,
} = quizApi;
