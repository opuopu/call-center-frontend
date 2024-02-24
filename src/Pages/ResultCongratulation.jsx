import React from "react";
import Star from "../assets/Vector.png";

import { useLocation, useNavigate } from "react-router-dom";
import { useCalculateTotalScoresQuery } from "../Redux/api/userResponseApi.js";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../Redux/hooks.js";
import { resetAllQuestionSlices } from "../Redux/features/Question/QuestionSlice.js";
import { resetAllQuizSlices } from "../Redux/features/quiz/QuizSlice.js";
import { useCurrentUser } from "../Redux/features/auth/authSlice.js";

function ResultCongratulation() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { role } = useAppSelector(useCurrentUser) || {};
  const { data: scoreData } = useCalculateTotalScoresQuery(location?.state?.id);
  const handleContinue = () => {
    Swal.fire({
      title: "Do you want to start a new practice quiz?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(resetAllQuizSlices());
        dispatch(resetAllQuestionSlices());
        navigate(`/${role}/context-qus`);
      } else if (result.isDenied) {
        dispatch(resetAllQuizSlices());
        dispatch(resetAllQuestionSlices());
        navigate(`/${role}/leaderboard`);
      }
    });
  };

  return (
    <>
      <div
        style={{ height: "auto", minHeight: "90vh" }}
        className="d-flex justify-content-center align-items-center difficulty-container"
      >
        <div style={{ width: "60%" }} className="">
          {/* <div className="difficulty-heading text-center my-5">
            <p className="mb-0" style={{ fontWeight: "bold" }}>
              Listen & Repeat
            </p>
            <p>LEVEL 2 - Exercise 3</p>
          </div> */}
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div
              style={{ width: "100%", padding: "20px" }}
              className=" star-container-child star-congratulation"
            >
              <p className="congratulations">Congratulations!</p>
              <p className="success-text">Exercise passed</p>
              <div className="d-flex justify-content-center align-items-center">
                <img width={35} className="mx-2" src={Star} alt="Star" />{" "}
                {/* <span className="blue-text">
                  {" "}
                  <span>{selectedQuiz?.score}</span> /100
                </span> */}
                <span
                  style={{
                    color: "#54C999",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {scoreData?.data?.totalScore}
                </span>
              </div>
              <div className="congratulation-btn-container d-flex justify-content-around align-items-center w-100 my-2 flex-wrap">
                {/* <button className="green-btn green-button-shadow">
                  Review Answers
                </button> */}

                <button
                  className="blue-btn blue-button-shadow"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultCongratulation;
