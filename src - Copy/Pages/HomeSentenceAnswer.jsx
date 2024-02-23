import React, { useEffect } from "react";
import ProgressBar from "../Components/ProgressBar/ProgressBarCompo";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../ServerUrl";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSinglQuestionQuery, useSingleQuizQuery } from "../Redux/api/quizApi";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentToken, useCurrentUser } from "../Redux/features/auth/authSlice";
import GreatAlert from "../Components/GreatAlert/GreatAlert";
import WrongAlert from "../Components/WrongAlert/WrongAlert";
import GreatImage from "../assets/Group 24.png"
import "../Components/WrongAlert/WrongAlert.css"
import CrossButton from "../assets/Group 48.png"
import "../Components/ProgressBar/ProgressBar.css"

function HomeSentenceAnswer() {

  const nevigate = useNavigate()
  const { id, quizId } = useParams();
  console.log("id", quizId)

  const { data: signleQuestionData, isLoading, isSuccessful } = useSinglQuestionQuery(id);
  console.log("signle Question Data", signleQuestionData)


  const isCorrectAnswer = signleQuestionData?.data?.answers.find(correct => correct?.isCorrect === true);
  console.log("isCorrectAnswer", isCorrectAnswer)


  const { data: signleQuizData } = useSingleQuizQuery(quizId);
  console.log("Signle Quiz Data", signleQuizData?.data?.questions?.length)
  console.log("Signle Quiz Data", signleQuizData?.data._id)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(signleQuizData?.data?.questions[0]);

  console.log(currentQuestion)

  useEffect(() => {
    setCurrentQuestion(signleQuizData?.data?.questions[currentQuestionIndex])
  }, [currentQuestionIndex, signleQuizData?.data?.questions])

  const handleNextQuestion = () => {
    if (currentQuestionIndex === signleQuizData?.data?.questions?.length - 1) {
      nevigate(`/congratulations/${signleQuizData?.data._id}`)
      window.location.reload();
      return
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setApiStatus(null)
    setButtonColors(Array(currentQuestion?.answers?.length).fill('white'));
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
  const [buttonColors, setButtonColors] = useState(Array(currentQuestion?.answers?.length).fill('white'));
  console.log(apiStatus)


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
        console.log('API response:', responseData?.data);

        // Update the color to green for the clicked button if the response is correct
        const newButtonColors = [...buttonColors];
        newButtonColors[index] = responseData?.data?.isCorrect ? '#54C999' : '#FF7F7F';
        console.log(newButtonColors[index])
        setButtonColors(newButtonColors);

      } else {
        console.error('API request failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while making the API request:', error);
    }
  };

  useEffect(() => {
    console.log('apiStatus:', apiStatus);
  }, [apiStatus]);


  const totalQuestions = signleQuizData?.data?.questions?.length - 1 || 1; // Ensure totalQuestions is at least 1
  const progress = (currentQuestionIndex / totalQuestions) * 100;


  return (
    <>


      <ProgressBar now={progress} label={`${progress.toFixed(2)}%`}></ProgressBar>
      {/* <ProgressBar now={progress} label={`${progress.toFixed(2)}%`} visuallyHidden className='progress-bar-span m-2' /> */}



      <Container className="d-flex justify-content-start align-items-center flex-column mic-parent flex-wrap">
        <p
          style={{ fontWeight: "400", fontSize: "22px", textAlign: "center" }}>

          {currentQuestion?.question}
        </p>

        {currentQuestion?.answers?.map((elem, index) => {
          return (
            <>
              <button style={{
                textAlign: "start",
                border: "none",
                borderRadius: "8px",
                backgroundColor: buttonColors[index],
                padding: "8px",
                width: "48rem",
                marginTop: "20px",
                boxShadow: "0px 1.5px 0px 4px #ececec",
                pointerEvents: apiStatus ? "none" : "auto",
                background: 'white',
              }} onClick={() => handleButtonClick(index)}>{elem?.text}</button>
            </>
          )
        })}


        <div
          style={{ height: "25vh", width: "40%", minWidth: "250px", marginLeft: "250px" }}
          className="d-flex justify-content-end align-items-center"
        >
          {/* <button className="nav-btn my-4 py-2 status-btn" onClick={() => handlePreQuestion()}>Previous</button> */}
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
            {/* <WrongAlert  /> */}
            <div className="wrong-alert d-flex justify-content-around align-items-center">
              <div className='d-flex jusitfy-content-center align-items-start'>
                <img width={65} className="ps-4 mx-2 wrong-image" src={GreatImage} alt="great" />
                <div className='wrong-text' style={{ color: "white" }}>
                  <p className='wrong-text-1' style={{ lineHeight: "12px" }}>Wrong</p>
                  <p className='wrong-text-2' style={{ lineHeight: "20px" }}>Correct Solution: {isCorrectAnswer?.text}</p>
                </div>
              </div>
              {/* <button className="green-button-shadow green-btn">Continue</button> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomeSentenceAnswer;
