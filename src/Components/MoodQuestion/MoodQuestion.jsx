import React from "react";
import "./MoodQuestion.css";
import { useEffect } from "react";
import { useState } from "react";
import { Popover } from "antd";
const renderHintContent = (hints) => (
  <ul>
    {hints.map((hint, index) => (
      <li key={index}>{hint}</li>
    ))}
  </ul>
);
function MoodQuestion(props) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCorrect, setIsCorrect] = useState({});
  const [mods, setMods] = useState([]);
  useEffect(() => {
    setMods(props.mods);
  }, [props]);

  const handleAnswerSelection = (questionId, selectedOption) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: selectedOption,
    }));

    setIsCorrect((prevIsCorrect) => ({
      ...prevIsCorrect,
      [questionId]:
        selectedOption === mods.find((mcq) => mcq.id === questionId).correct,
    }));
  };

  return (
    <>
      <div className="mood-parent">
        <p className="mood-text mx-2">Listen and Select mood accordingly</p>
      </div>
      {mods.map((da) => {
        return (
          <>
            <div className="d-flex justify-content-center mt-4">
              {da?.interaction}
            </div>
            <div className="d-flex justify-content-around">
              <Popover content={renderHintContent(da.hints)} title="Hints">
                <span>hint</span>
              </Popover>
            </div>
            <div className="d-flex justify-content-around align-items-center mood-review mt-4">
              {da?.options.map((option) => (
                <>
                  <button
                    onClick={() => handleAnswerSelection(da.id, option)}
                    style={{
                      backgroundColor:
                        selectedAnswers[da.id] === option
                          ? isCorrect[da.id]
                            ? "green"
                            : "red"
                          : "white",
                    }}
                    className="gray-shadow-btn my-2"
                  >
                    {option}
                  </button>{" "}
                </>
              ))}
            </div>
          </>
        );
      })}
    </>
  );
}

export default MoodQuestion;
