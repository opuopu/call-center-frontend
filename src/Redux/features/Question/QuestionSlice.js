import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAnswers: 0,
  totalScores: 0,
  correctAnswer: null,
  correctAnswerId: null,
  activeButtonId: null,
};
const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    settotalScores: (state, action) => {
      state.totalScores += action.payload;
    },
    setTotalAnswers: (state, action) => {
      state.totalAnswers += action.payload;
    },
    setCorrectAnswerId(state, action) {
      const findCorrectAnswer = action?.payload?.answers?.find(
        (ans) => ans?.isCorrect === true
      );
      state.correctAnswerId = findCorrectAnswer?._id;
      state.correctAnswer = findCorrectAnswer;
    },

    setActiveButtonId(state, action) {
      state.activeButtonId = action.payload;
    },
    resetIds(state, action) {
      state.activeButtonId = null;
      state.correctAnswerId = null;
    },
    resetAllQuestionSlices(state, action) {
      state.totalScores = 0;
      state.totalAnswers = 0;
      state.correctAnswerId = null;
      state.activeButtonId = null;
    },
  },
});
export const {
  settotalScores,
  setCorrectAnswerId,
  setActiveButtonId,
  resetIds,
  setTotalAnswers,
  resetAllQuestionSlices,
} = questionSlice.actions;
export default questionSlice.reducer;
