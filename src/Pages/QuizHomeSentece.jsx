import React, { useEffect } from "react";
import ProgressBar from "../Components/ProgressBar/ProgressBarCompo";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../ServerUrl";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSingleQuizQuery } from "../Redux/api/quizApi";

function QuizHomeSentence() {

    const { id } = useParams();
    // console.log(id)

    const { data: signleQuizData, isLoading, isSuccessful } = useSingleQuizQuery(id);
    // console.log("Signle Quiz Data", signleQuizData?.data?.questions[0]?._id)
    // console.log("Signle Quiz Data", signleQuizData?.data)

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(signleQuizData?.data?.questions[0]);

    // console.log(currentQuestion)

    useEffect(() => {
        setCurrentQuestion(signleQuizData?.data?.questions[currentQuestionIndex])
    }, [currentQuestionIndex, signleQuizData?.data?.questions])

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    // console.log(currentQuestionIndex)

    return (
        <>
            {/* <ProgressBar /> */}

            <Container style={{ marginTop: "50px" }} className="d-flex flex-col justify-content-start align-items-center flex-column mic-parent flex-wrap">


                <div>
                    <div className="complete-sentence my-2">
                        <p style={{ width: "fit-content" }} className="m-0">
                            {signleQuizData?.data?.context}
                        </p>
                    </div>
                </div>

                <div style={{ height: "25vh", width: "40%", minWidth: "250px" }} className="d-flex justify-content-between align-items-center">
                    <Link to={`/`}>
                        <button className="nav-btn my-4 py-2 status-btn">Previous</button>
                    </Link>
                    <Link to={`/home-sentence-answer/${signleQuizData?.data?.questions[0]?._id}/${currentQuestionIndex}/${id}`}>
                        <button className="green-btn green-button-shadow py-2" onClick={() => handleNextQuestion()}>Continue</button>
                    </Link>
                </div>

            </Container>



        </>
    );
}

export default QuizHomeSentence;
