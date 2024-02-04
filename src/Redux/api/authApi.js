import { tagTypes } from "../../types/tags";
import { baseApi } from "./baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        signIn: builder.mutation({
            query: (data) => ({
                url: "/users/sign-in",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.user]
        }),
        profile: builder.query({
            query: () => ({
                url: "/users/profile",
                method: "GET",
            }),
            providesTags: [tagTypes.user]
        }),
        managerLeaderboard: builder.query({
            query: (id) => ({
                url: `/quiz/manager-leaderboard/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.quiz]
        }),

    })

})

export const {
    useSignInMutation,
    useProfileQuery,
    useManagerLeaderboardQuery
} = authApi