import { tagTypes } from "../../types/tags";
import { baseApi } from "./baseApi";



const quizApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        allQuiz: builder.query({
            query: () => ({
                url: "/quiz",
                method: "GET",
            }),
            providesTags: [tagTypes.quiz]
        }),

        singleQuiz: builder.query({
            query: (id) => ({
                url: `/quiz/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.quiz]
        }),
        singlQuestion: builder.query({
            query: (id) => ({
                url: `/quiz/question/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.quiz]
        }),
        questionAnswer: builder.mutation({
            query: (data) => ({
                url: "",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.user]
        }),
    })

})

export const {
    useAllQuizQuery,
    useSingleQuizQuery,
    useSinglQuestionQuery
} = quizApi