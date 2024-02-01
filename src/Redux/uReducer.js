import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { BASE_URL, SERVERURL } from "../ServerUrl";
import Cookies from "universal-cookie";
import Swal from "sweetalert";
// import Swal
import axios from "axios";
import swal from "sweetalert";

// const cookies = new Cookies();
const cookies = new Cookies();

const initialStateFunction = () => ({
  audioExercise: null,
  currentUser: null,
  crewData: [],
  todosData: [],
  active: false,
  nameData: null,
  moviesData: null,
});

// get users
// export const getExercise = createAsyncThunk("getExercise", async () => {
//   let config = {
//     method: "get",
//     maxBodyLength: Infinity,
//     url: `${BASE_URL}/api/v1/exercise/`,
//     headers: {
//       Authorization: `Token ${sessionStorage?.getItem("clientToken")}`,
//     },
//   };

//   axios
//     .request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//       return JSON.stringify(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// });
export const getExercise = createAsyncThunk("getExercise", async () => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/api/v1/exercise/`,
      headers: {
        Authorization: `Token ${sessionStorage?.getItem("clientToken")}`,
      },
    };

    const response = await axios.request(config);
    console.log(JSON.stringify(response.data?.results));
    return response.data?.results;
  } catch (error) {
    console.log(error);
    //throw error; // Optional: You can choose to re-throw the error to be handled by the rejected action
  }
});
export const CustomerReducer = createSlice({
  name: "CustomerReducer",
  initialState: initialStateFunction(),
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setNavBar(state, action) {
      state.active = action.payload;
    },
    currentUserData(state, action) {
      state.currentUser = action.payload;
    },
    resetState: (state) => initialStateFunction(),
  },
  extraReducers: {
    [getExercise.fulfilled]: (state, action) => {
      console.log("fullfiled", action);
      state.audioExercise = action.payload;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["CustomerReducer"],
};

const user = CustomerReducer.reducer;

// Action creators are generated for each case reducer function
export const { setCurrentUser, setNavBar, currentUserData } =
  CustomerReducer.actions;
export default persistReducer(persistConfig, user);
