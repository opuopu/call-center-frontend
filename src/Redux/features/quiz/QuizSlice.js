import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: 0,
};
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    incrementProgress: (state, action) => {
      state.progress += action.payload;
    },
    resetProgress: (state, action) => {
      state.progress = 0;
    },
  },
});
export const { incrementProgress, resetProgress } = quizSlice.actions;
export default quizSlice.reducer;
