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
  }),
});

export const { useInserUserResponseMutation } = userResponseApi;
