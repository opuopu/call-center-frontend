import React, { useEffect, useState } from "react";
import ProgressBar from "../../Components/ProgressBar/ProgressBarCompo";
import {
  useGetRandomContextQuery,
  useSingleQuizQuery,
} from "../../Redux/api/quizApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetRandomQestionsQuery,
  useGetTotalQuestionsUnderContextQuery,
} from "../../Redux/api/questionApi.js";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks.js";
import {
  useDeleteResponsesMutation,
  useInserUserResponseMutation,
} from "../../Redux/api/userResponseApi.js";
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
import NoData from "../NoData/NoData.jsx";
import { useCurrentUser } from "../../Redux/features/auth/authSlice.js";
import GreatAlert from "../GreatAlert/GreatAlert.jsx";
import WrongAlert from "../WrongAlert/WrongAlert.jsx";
import "react-loading-skeleton/dist/skeleton.css";
import QuizSkeleton from "../QuizSkeleton/QuizSkeleton.jsx";

const ContextWiseQus = () => {
  const { data: randomContextData, isLoading: randomContextLoading } =
    useGetRandomContextQuery(undefined);
  const id = randomContextData?.data?._id;
  const { role } = useAppSelector(useCurrentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    data: randomQuestionData,
    refetch,
    isLoading: randomQuestionLoading,
  } = useGetRandomQestionsQuery(id);
  const [submitAnswer] = useInserUserResponseMutation();
  const [deleteResponse] = useDeleteResponsesMutation();
  const [insertLeaderBoardData, { isLoading }] =
    useInsertDataIntoLeaderboardMutation();
  const { data: totalQuestionsData } =
    useGetTotalQuestionsUnderContextQuery(id);
  const { data: signleQuizData } = useSingleQuizQuery(id);
  const progress = useAppSelector((state) => state.quiz.progress);
  const { totalAnswers } = useAppSelector((state) => state.question);
  const { activeButtonId, correctAnswerId, correctAnswer } = useAppSelector(
    (state) => state?.question
  );
  const { perQuestionProgress } = useAppSelector((state) => state?.quiz);
  useEffect(() => {
    dispatch(setCorrectAnswerId(randomQuestionData?.data));
    dispatch(calculatePerProgress(totalQuestionsData?.data));
  }, [dispatch, randomQuestionData, totalQuestionsData]);

  const handleButtonClick = async (answerId) => {
    dispatch(setActiveButtonId(answerId));
    const data = {
      questionId: randomQuestionData?.data?._id,
      answerId: answerId,
      contextId: id,
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
        dispatch({ type: "RESET_ALL_SLICES" });
        navigate(`/${role}/congratulations`, { state: { id: id } });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteResponse(id).unwrap();
          if (res?.success) {
            Swal.fire({
              title: "Deleted!",
              text: `${res?.message}`,
              icon: "success",
            });

            navigate("/");
          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  };
  const isLastQuestion =
    totalQuestionsData?.data?.result?.length === totalAnswers;

  return (
    <div className="text-center">
      {!randomQuestionLoading && !randomContextLoading ? (
        <>
          {randomQuestionData?.data && (
            <div>
              <ProgressBar now={progress} label={`${progress.toFixed(2)}%`} />
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "22px",
                  textAlign: "center",
                }}
              >
                Context: {signleQuizData?.data?.context}
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "22px",
                  textAlign: "center",
                }}
              >
                Question: {randomQuestionData?.data?.question}
              </p>
            </div>
          )}

          <div className="d-flex flex-column justify-content-center">
            {randomQuestionData?.data?.answers?.map((elem, index) => (
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
                          ? "#54C999"
                          : "red"
                        : "white",
                    color:
                      activeButtonId === elem?._id
                        ? correctAnswerId === elem?._id
                          ? "white"
                          : "white"
                        : "black",
                    padding: "8px",
                    width: "48rem",
                    marginTop: "20px",
                    boxShadow: "0px 1.5px 0px 4px #ececec",
                    // pointerEvents: apiStatus ? "none" : "auto",
                  }}
                >
                  {elem?.text}
                </button>
              </div>
            ))}
          </div>
          {randomQuestionData?.data && (
            <div className="flex justify-content-between">
              <button
                className="nav-btn my-4 py-2 status-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
              {isLastQuestion ? (
                <button
                  className="green-btn green-button-shadow py-2"
                  onClick={handleFinish}
                >
                  Finish
                </button>
              ) : (
                <button
                  disabled={!activeButtonId}
                  className="green-btn green-button-shadow py-2"
                  onClick={handleNextBtn}
                >
                  Next
                </button>
              )}
            </div>
          )}
          {activeButtonId && activeButtonId === correctAnswerId && (
            <GreatAlert />
          )}
          {activeButtonId && activeButtonId !== correctAnswerId && (
            <WrongAlert title={correctAnswer?.text} />
          )}
        </>
      ) : (
        <div
          className="text-center d-flex justify-content-center align-items-center "
          style={{ height: "80vh" }}
        >
          <QuizSkeleton />
        </div>
      )}
      {!randomQuestionLoading &&
        !randomContextLoading &&
        !correctAnswerId &&
        !activeButtonId &&
        !randomQuestionData?.data && (
          <div>
            <NoData text="Sorry No Context Found!" />
          </div>
        )}
    </div>
  );
};

export default ContextWiseQus;
