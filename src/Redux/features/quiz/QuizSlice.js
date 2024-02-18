import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perQuestionProgress: 0,
  progress: 0,
};
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    calculatePerProgress: (state, action) => {
      const perProgressValue = Math.ceil(100 / Number(action?.payload?.total));
      state.perQuestionProgress = perProgressValue;
    },
    incrementProgress: (state, action) => {
      state.progress += action.payload;
    },
    resetProgress: (state, action) => {
      state.progress = 0;
    },
    resetAllQuizSlices: (state, action) => {
      state.progress = 0;
      state.perQuestionProgress = 0;
    },
  },
});
export const {
  incrementProgress,
  resetProgress,
  calculatePerProgress,
  resetAllQuizSlices,
} = quizSlice.actions;
export default quizSlice.reducer;
