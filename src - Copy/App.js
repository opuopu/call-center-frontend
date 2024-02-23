import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarCompo from "./Components/Navbar/NavbarCompo";
import Home from "./Pages/Home";
import DashboardHome from "./Pages/DashboardHome";
import Leaderboard from "./Pages/Leaderboard";
import MyProfile from "./Pages/MyProfile";
import QuestionState from "./Pages/QuestionState";
import AfterQuestion from "./Pages/AfterQuestion";
import ButtonPressed from "./Pages/ButtonPressed";
import SubmitState from "./Pages/SubmitState";
import ResultState from "./Pages/ResultState";
import ResultCongratulation from "./Pages/ResultCongratulation";
import HomeSentence from "./Pages/HomeSentence";
import HomeSentenceAnswer from "./Pages/HomeSentenceAnswer";
import HomeSentenceCorrectAns from "./Pages/HomeSentenceCorrectAns";
import HomeSentenceWrong from "./Pages/HomeSentenceWrong";
import MoodeQuesState from "./Pages/MoodQuesState";
import MoodAnswerStat from "./Pages/MoodAnswerStat";
import MoodAnswerCheck from "./Pages/MoodAnswerCheck";
import ScoreBoard from "./Pages/ScoreBoard";
import Team from "./Pages/Team";
import User from "./Components/User/User";
import UserLogin from "./Components/User/UserLogin";
import C3State from "./Context/C3State";
import ChangePass from "./Components/User/ChangePass";
import AllTeams from "./Pages/AllTeams";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import QuizHomeSentence from "./Pages/QuizHomeSentece";
import ContextWiseQus from "./Components/ContextWiseQus/ContextWiseQus";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./Redux/hooks.js";
import {
  useCurrentToken,
  useCurrentUser,
} from "./Redux/features/auth/authSlice.js";
function App() {
  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser);
  const token = useAppSelector(useCurrentToken);
  useEffect(() => {
    if (!user?.role && !token) {
      navigate("/user-login");
    } else {
      navigate(`/${user?.role}`);
    }
  }, [user, token, navigate]);
  return <></>;
}

export default App;
