import React from "react";
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

function App() {
  return (
    <>
      <C3State>
        <Router>
          <NavbarCompo />
          <Routes>
            <Route exact path="/" element={<DashboardHome />} />
            <Route exact path="/:id/:id/:id/:id" element={<MyProfile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/team" element={<Team />} />
            <Route path="/difficulty" element={<Home />} />
            <Route path="/question-state" element={<QuestionState />} />
            <Route path="/after-question" element={<AfterQuestion />} />
            <Route path="/button-pressed" element={<ButtonPressed />} />
            <Route path="/submit-state" element={<SubmitState />} />
            <Route path="/result" element={<ResultState />} />
            <Route path="/congratulations" element={<ResultCongratulation />} />
            <Route path="/home-sentence" element={<HomeSentence />} />
            <Route
              path="/home-sentence-answer"
              element={<HomeSentenceAnswer />}
            />
            <Route
              path="/home-sentence-correct"
              element={<HomeSentenceCorrectAns />}
            />
            <Route
              path="/home-sentence-wrong"
              element={<HomeSentenceWrong />}
            />
            <Route path="/mood-ques-state" element={<MoodeQuesState />} />
            <Route path="/mood-ans-state" element={<MoodAnswerStat />} />
            <Route path="/mood-ans-check" element={<MoodAnswerCheck />} />
            <Route path="/score-board" element={<ScoreBoard />} />
            <Route path="/register" element={<User />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/change-pass/:email" element={<ChangePass />} />
            <Route path="/show-teams" element={<AllTeams />} />
          </Routes>
        </Router>
      </C3State>
    </>
  );
}

export default App;
