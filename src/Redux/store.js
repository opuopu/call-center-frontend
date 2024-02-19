import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";
import { baseApi } from "./api/baseApi";
import QuizSlice from "./features/quiz/QuizSlice.js";
import QuestionSlice from "./features/Question/QuestionSlice.js";
import leaderboardSlice from "./features/leaderboard/leaderboardSlice.js";
import { resetMiddleware } from "./middlware/Index.js";
import LayoutSlice from "./features/LayoutSlice/LayoutSlice.js";

const persistConfig = {
  key: "auth",
  storage: storage, // Fix the typo here
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    quiz: QuizSlice,
    question: QuestionSlice,
    leaderBoard: leaderboardSlice,
    layout: LayoutSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware, resetMiddleware),
});

export const persistor = persistStore(store);
