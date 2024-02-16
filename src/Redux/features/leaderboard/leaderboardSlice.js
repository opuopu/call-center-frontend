import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contextId: null,
  scores: null,
};
const leaderBoardSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setContext: (state, action) => {
      state.contextId = action.payload;
    },
    setTotalScors: (state, action) => {
      state.scores = action.payload;
    },
  },
});
export const { setContext, setTotalScors } = leaderBoardSlice.actions;
export default leaderBoardSlice.reducer;
