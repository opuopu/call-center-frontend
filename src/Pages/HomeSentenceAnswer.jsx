import React, { useEffect } from "react";
import ProgressBar from "../Components/ProgressBar/ProgressBarCompo";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../ServerUrl";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSinglQuestionQuery, useSingleQuizQuery } from "../Redux/api/quizApi";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentToken, useCurrentUser } from "../Redux/features/auth/authSlice";
import GreatAlert from "../Components/GreatAlert/GreatAlert";
import WrongAlert from "../Components/WrongAlert/WrongAlert";

function HomeSentenceAnswer() {


  const { id, quizId } = useParams();
  console.log("id", quizId)

  const { data: signleQuestionData, isLoading, isSuccessful } = useSinglQuestionQuery(id);
  console.log("signle Question Data", signleQuestionData)



  const { data: signleQuizData } = useSingleQuizQuery(quizId);
  console.log("Signle Quiz Data", signleQuizData?.data?.questions?.length)
  console.log("Signle Quiz Data", signleQuizData?.data)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(signleQuizData?.data?.questions[0]);

  console.log(currentQuestion)

  useEffect(() => {
    setCurrentQuestion(signleQuizData?.data?.questions[currentQuestionIndex])
  }, [currentQuestionIndex, signleQuizData?.data?.questions])

  const handleNextQuestion = () => {
    if (currentQuestionIndex === signleQuizData?.data?.questions?.length - 1) {
      return
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreQuestion = () => {
    if (currentQuestionIndex === 0) {
      return
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  console.log(currentQuestionIndex)
  // _________________________________Ans APi--------------------------

  const [apiStatus, setApiStatus] = useState(null);

  const user = useSelector(useCurrentUser)
  console.log(user);
  const token = useSelector(useCurrentToken)
  console.log(token);

  const handleButtonClick = async (index) => {
    console.log("Index", index);
    try {
      const apiUrl = `http://192.168.10.14:3000/api/quiz/quizzes/${quizId}/${id}/${index}`;
      const postData = {
        managerId: user._id,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setApiStatus(responseData?.data?.isCorrect ? 'true' : 'false');
        console.log('API response:', responseData?.data?.isCorrect);
      } else {
        console.error('API request failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while making the API request:', error);
    }
  };

  return (
    <>
      <ProgressBar />

      <Container className="d-flex justify-content-start align-items-center flex-column mic-parent flex-wrap">
        <p
          style={{ fontWeight: "400", fontSize: "22px", textAlign: "center" }}>
          {/* {signleQuestionData?.data?.question} */}
          {currentQuestion?.question}
        </p>

        {currentQuestion?.answers?.map((elem, index) => {
          return (
            <>
              <button style={{
                textAlign: "start",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "white",
                padding: "8px",
                width: "48rem",
                marginTop: "20px",
                boxShadow: "0px 1.5px 0px 4px #ececec"
              }} onClick={() => handleButtonClick(index)}>{elem?.text}</button>
            </>
          )
        })}


        {/* <div className="flex flex-col">
          <button className="gray-shadow-btn my-2">fiscal</button>
          <button className="green-btn green-button-shadow answer-correct-box">
            business
          </button>
          <button className="gray-shadow-btn my-2">great</button>
        </div> */}

        <div
          style={{ height: "25vh", width: "40%", minWidth: "250px" }}
          className="d-flex justify-content-between align-items-center"
        >
          <button className="nav-btn my-4 py-2 status-btn" onClick={() => handlePreQuestion()}>Previous</button>
          <button className="green-btn green-button-shadow py-2" onClick={() => handleNextQuestion()}>Next</button>
        </div>
      </Container>

      {apiStatus === 'true' && (
        <>
          <div>
            <GreatAlert />
          </div>
        </>
      )}

      {apiStatus === 'false' && (
        <>
          <div>
            <WrongAlert />
          </div>
        </>
      )}
    </>
  );
}

export default HomeSentenceAnswer;
