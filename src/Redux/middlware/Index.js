import { resetAllQuestionSlices } from "../features/Question/QuestionSlice.js";
import { resetleaderboardSlice } from "../features/leaderboard/leaderboardSlice.js";
import { resetAllQuizSlices } from "../features/quiz/QuizSlice.js";

export const resetMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const shouldReset = action.type === "RESET_ALL_SLICES";
    console.log(action.type);
    if (shouldReset) {
      console.log("Resetting all slices...");
      // dispatch({ type: "@@INIT" });
      dispatch(resetAllQuizSlices());
      dispatch(resetAllQuestionSlices());
      dispatch(resetleaderboardSlice());
    }

    return next(action);
  };
