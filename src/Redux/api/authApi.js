import { tagTypes } from "../../types/tags";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: "/users/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    signupUser: builder.mutation({
      query: (data) => ({
        url: "/users/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    profile: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    SingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserByManager: builder.mutation({
      query: (data) => ({
        url: `/users/update-user/${data.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updatePassWord: builder.mutation({
      query: (data) => ({
        url: "/users/update-password",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    RetrivemangerUsers: builder.query({
      query: () => ({
        url: "/users/managers-users",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    ChangeUserStatus: builder.mutation({
      query: (data) => ({
        url: `/users/change-status/${data?.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    ChangePassword: builder.mutation({
      query: (data) => ({
        url: `/users/change-password/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    ForgetPassword: builder.mutation({
      query: (data) => ({
        url: `/users/forget-password`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    ResetPassword: builder.mutation({
      query: (data) => ({
        url: `/users/reset-password/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useSignInMutation,
  useProfileQuery,
  useUpdatePassWordMutation,
  useUpdateProfileMutation,
  useRetrivemangerUsersQuery,
  useSignupUserMutation,
  useChangeUserStatusMutation,
  useSingleUserQuery,
  useUpdateUserByManagerMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
