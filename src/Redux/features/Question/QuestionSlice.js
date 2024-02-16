import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAnswers: 0,
  totalScores: 0,
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
      )?._id;
      state.correctAnswerId = findCorrectAnswer;
    },
    setActiveButtonId(state, action) {
      state.activeButtonId = action.payload;
    },
    resetIds(state, action) {
      state.activeButtonId = null;
      state.correctAnswerId = null;
    },
  },
});
export const {
  settotalScores,
  setCorrectAnswerId,
  setActiveButtonId,
  resetIds,
  setTotalAnswers,
} = questionSlice.actions;
export default questionSlice.reducer;
