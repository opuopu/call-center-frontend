import React from "react";
import ScoreCard from "../Components/ScoreCard/ScoreCard";
import { BsArrowLeftShort } from "react-icons/bs";

function ScoreBoard() {
  return (
    <>
      <div className="my-3  mx-5">
        <button className="home-text">
          <BsArrowLeftShort className="home-arrow" /> Home
        </button>
        <h3 className="mx-auto text-center">Check out your scorecard!</h3>
        <h4 className="mx-2 score-text-comp">Complete Sentence</h4>
        <ScoreCard />
      </div>
    </>
  );
}

export default ScoreBoard;
