import React from "react";
import "./ScoreCard.css";
import { useState } from "react";

function ScoreCard() {
  const [scoreData, setScoreData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  return (
    <>
      <div className="d-flex score-card-parent align-items-center flex-wrap">
        {scoreData.map((elem) => {
          return (
            <div className="score-card my-3 mx-2">
              Hello, shipment will reach you in 2{" "}
              <input className="score-input" disabled type="text" /> days
            </div>
          );
        })}

        <div
          style={{ backgroundColor: "#E7F4C5" }}
          className="score-card my-3 mx-2"
        >
          Hello, shipment will reach you in 2{" "}
          <input className="score-input" disabled type="text" /> days
          <button
            style={{ opacity: "1" }}
            className="green-btn green-button-shadow mx-2"
          >
            Review
          </button>
        </div>
        <div
          style={{ backgroundColor: "#FF8080" }}
          className="score-card my-3 mx-2"
        >
          Hello, shipment will reach you in 2{" "}
          <input className="score-input" disabled type="text" /> days
        </div>
        <div
          style={{ backgroundColor: "#FFBFBF" }}
          className="score-card my-3 mx-2"
        >
          Hello, shipment will reach you in 2{" "}
          <input className="score-input" disabled type="text" /> days
          <button
            style={{ opacity: "1" }}
            className="green-btn green-button-shadow mx-2"
          >
            Review
          </button>
        </div>
      </div>
    </>
  );
}

export default ScoreCard;
