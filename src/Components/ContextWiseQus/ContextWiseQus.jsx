import React, { useState } from "react";
import ProgressBar from "../../Components/ProgressBar/ProgressBarCompo";
import { useParams } from "react-router-dom";
import { useSingleQuizQuery } from "../../Redux/api/quizApi";
import GreatAlert from "../GreatAlert/GreatAlert";
import GreatImage from "../../assets/Group 24.png";
import { useGetRandomQestionsQuery } from "../../Redux/api/questionApi.js";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks.js";
import { useInserUserResponseMutation } from "../../Redux/api/userResponseApi.js";

const ContextWiseQus = () => {
  const { id } = useParams();
  const { data: randomQuestionData } = useGetRandomQestionsQuery(id);
  const [submitAnswer, { isLoading }] = useInserUserResponseMutation();
  const { data: signleQuizData } = useSingleQuizQuery(id);
  const [activeBtn, setactiveBtn] = useState(null);
  const progress = useAppSelector((state) => state.quiz.progress);
  const dispatch = useAppDispatch();
  const findCorrectAnswer = randomQuestionData?.data?.answers?.find(
    (ans) => ans?.isCorrect === true
  )?._id;

  const handleButtonClick = async (id) => {
    setactiveBtn(id);
    const data = {
      questionId: randomQuestionData?.data?._id,
      answerId: id,
    };
    try {
      const res = await submitAnswer(data).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNextBtn = async () => {
    try {
    } catch (err) {}
  };
  return (
    <div className="text-center">
      <ProgressBar
        now={progress}
        label={`${progress.toFixed(2)}%`}
      ></ProgressBar>
      <p style={{ fontWeight: "400", fontSize: "22px", textAlign: "center" }}>
        Context: {signleQuizData?.data?.context}
      </p>
      <p style={{ fontWeight: "400", fontSize: "22px", textAlign: "center" }}>
        Qustion: {randomQuestionData?.data?.question}
      </p>

      <div className="d-flex flex-column justify-content-center">
        {randomQuestionData?.data?.answers?.map((elem, index) => {
          return (
            <div className="" key={index}>
              <button
                disabled={activeBtn}
                onClick={() => handleButtonClick(elem?._id)}
                style={{
                  textAlign: "start",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor:
                    activeBtn === elem._id
                      ? findCorrectAnswer === elem._id
                        ? "green"
                        : "red"
                      : "white",
                  padding: "8px",
                  width: "48rem",
                  marginTop: "20px",
                  boxShadow: "0px 1.5px 0px 4px #ececec",
                  //   pointerEvents: apiStatus ? "none" : "auto",
                }}
              >
                {elem?.text}
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-content-between">
        <button className="nav-btn my-4 py-2 status-btn">Cancel</button>
        <button className="green-btn green-button-shadow py-2">Next</button>
      </div>
    </div>
  );
};

export default ContextWiseQus;
