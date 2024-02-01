import React, { useEffect } from "react";
import ProgressBar from "../Components/ProgressBar/ProgressBarCompo";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../ServerUrl";
import { useState } from "react";

function HomeSentenceAnswer() {
  const [allSentence, setAllSentence] = useState([]);
  const [allAnswer, setAllAnswer] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCorrect, setIsCorrect] = useState({});
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/api/v1/exercise/sentences/`,
      headers: {
        Authorization: `Token ${sessionStorage?.getItem("clientToken")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        let ans = [];
        response.data.map((d) => {
          ans.push("");
        });
        setAllAnswer(ans);
        setAllSentence(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function to handle answer selection
  const handleAnswerSelection = (questionId, selectedOption) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: selectedOption,
    }));

    // Check if the selected answer is correct
    setIsCorrect((prevIsCorrect) => ({
      ...prevIsCorrect,
      [questionId]:
        selectedOption ===
        allSentence.find((mcq) => mcq.id === questionId).correct,
    }));
  };
  return (
    <>
      <ProgressBar />

      <Container className="d-flex justify-content-start align-items-center flex-column mic-parent flex-wrap">
        <p
          style={{ fontWeight: "400", fontSize: "22px" }}
          className="w-auto mx-1"
        >
          Complete Sentence
        </p>
        {allSentence.map((d, index) => {
          return (
            <>
              <div style={{ height: "15vh" }}>
                <div className="complete-sentence my-2">
                  <p style={{ width: "fit-content" }} className="m-0">
                    {d?.text}
                  </p>
                </div>
              </div>
              <div className="complete-btn-container">
                {d?.options?.map((da, i) => {
                  return (
                    <button
                      className={`gray-shadow-btn my-2 ${
                        allAnswer[index] == ""
                          ? ""
                          : allAnswer[index] == da.correct
                          ? "green-btn green-button-shadow answer-correct-box"
                          : "success-outline"
                      }`}
                      style={{
                        backgroundColor:
                          selectedAnswers[d.id] === da
                            ? isCorrect[d.id]
                              ? "green"
                              : "red"
                            : "white",
                      }}
                      onClick={() => handleAnswerSelection(d.id, da)}
                    >
                      {da}
                    </button>
                  );
                })}

                {/* <button className="green-btn green-button-shadow answer-correct-box">
            business
          </button>
          <button className="gray-shadow-btn my-2">great</button> */}
              </div>
              {/* 
              <div
                style={{ height: "25vh", width: "40%", minWidth: "250px" }}
                className="d-flex justify-content-between align-items-center"
              >
                <button className="blue-btn blue-button-shadow">Pause</button>
                <button className="green-btn green-button-shadow">Check</button>
              </div> */}
            </>
          );
        })}

        {/* <div className="complete-btn-container">
          <button className="gray-shadow-btn my-2">fiscal</button>
          <button className="green-btn green-button-shadow answer-correct-box">
            business
          </button>
          <button className="gray-shadow-btn my-2">great</button>
        </div> */}

        {/* <div
          style={{ height: "25vh", width: "40%", minWidth: "250px" }}
          className="d-flex justify-content-between align-items-center"
        >
          <button className="blue-btn blue-button-shadow">Pause</button>
          <button className="green-btn green-button-shadow">Check</button>
        </div> */}
      </Container>
    </>
  );
}

export default HomeSentenceAnswer;
