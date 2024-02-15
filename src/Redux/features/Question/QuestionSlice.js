import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  correctAnswerId: null,
  activeButtonId: null,
};
const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setCorrectAnswerId(state, action) {
      console.log(action.payload);
    },
    setActiveButtonId(state, action) {
      state.activeButtonId = action.payload;
    },
  },
});
export const { setCorrectAnswerId, setActiveButtonId } = questionSlice.actions;
export default questionSlice.reducer;
