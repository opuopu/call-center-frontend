import React, { useEffect, useState } from "react";
import ProgressBar from "../../Components/ProgressBar/ProgressBarCompo";
import { useParams } from "react-router-dom";
import { useSingleQuizQuery } from "../../Redux/api/quizApi";
import { useNavigate } from "react-router-dom";
import {
  useGetRandomQestionsQuery,
  useGetTotalQuestionsUnderContextQuery,
} from "../../Redux/api/questionApi.js";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks.js";
import { useInserUserResponseMutation } from "../../Redux/api/userResponseApi.js";
import {
  resetIds,
  setActiveButtonId,
  setCorrectAnswerId,
  setTotalAnswers,
  settotalScores,
} from "../../Redux/features/Question/QuestionSlice.js";
import {
  calculatePerProgress,
  incrementProgress,
} from "../../Redux/features/quiz/QuizSlice.js";
import { useInsertDataIntoLeaderboardMutation } from "../../Redux/api/leaderboardApi.js";

const ContextWiseQus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: randomQuestionData, refetch } = useGetRandomQestionsQuery(id);
  const [submitAnswer] = useInserUserResponseMutation();
  const [insertLeaderBoardData, { isLoading }] =
    useInsertDataIntoLeaderboardMutation();
  const { data: totalQuestionsData } =
    useGetTotalQuestionsUnderContextQuery(id);
  const { data: signleQuizData } = useSingleQuizQuery(id);
  const progress = useAppSelector((state) => state.quiz.progress);
  const { totalAnswers } = useAppSelector((state) => state.question);
  const { activeButtonId, correctAnswerId } = useAppSelector(
    (state) => state?.question
  );
  const { perQuestionProgress } = useAppSelector((state) => state?.quiz);
  useEffect(() => {
    dispatch(setCorrectAnswerId(randomQuestionData?.data));
    dispatch(calculatePerProgress(totalQuestionsData?.data));
  }, [dispatch, randomQuestionData, totalQuestionsData]);

  const handleButtonClick = async (id) => {
    dispatch(setActiveButtonId(id));
    const data = {
      questionId: randomQuestionData?.data?._id,
      answerId: id,
    };
    try {
      const res = await submitAnswer(data).unwrap();
      if (res?.success) {
        dispatch(incrementProgress(perQuestionProgress));
        dispatch(setTotalAnswers(1));
        dispatch(settotalScores(res?.data?.score));
      }
    } catch (error) {}
  };
  const handleNextBtn = async () => {
    refetch();
    dispatch(resetIds());
  };
  const handleFinish = async () => {
    const formatedData = {
      contextId: id,
    };
    try {
      const res = await insertLeaderBoardData(formatedData).unwrap();
      if (res?.success) {
        dispatch({ type: "@@INIT" });
        navigate("/congratulations", { state: { id: id } });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const isLastQuestion =
    totalQuestionsData?.data?.result?.length === totalAnswers;

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
                disabled={activeButtonId}
                onClick={() => handleButtonClick(elem?._id)}
                style={{
                  textAlign: "start",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor:
                    activeButtonId === elem?._id
                      ? correctAnswerId === elem?._id
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
        {isLastQuestion ? (
          <button
            className="green-btn green-button-shadow py-2"
            onClick={handleFinish}
          >
            Finish
          </button>
        ) : (
          <button
            className="green-btn green-button-shadow py-2"
            onClick={handleNextBtn}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ContextWiseQus;
