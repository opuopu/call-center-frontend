export const resetMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const shouldReset = action.type === "RESET_ALL_SLICES";

    if (shouldReset) {
      console.log("Resetting all slices...");
      dispatch({ type: "@@INIT" });
    }

    return next(action);
  };
