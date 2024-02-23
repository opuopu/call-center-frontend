import React from "react";
import ProgressBar from "../Components/ProgressBar/ProgressBarCompo";
import SpeakerContainer from "../Components/SpeakerContainer/SpeakerContainer";
import { Container } from "react-bootstrap";
import SoundWaves from "../../src/assets/sound-waves 1.png";
import MicButton from "../Components/MicButton/MicButton";

function SubmitState() {
  return (
    <>
      <ProgressBar />

      <Container className="d-flex justify-content-start align-items-center flex-column mic-parent flex-wrap">
        <p className="w-auto mx-1">Listen to the Sentence & Repeat...</p>
        <SpeakerContainer />
      </Container>

      <div className="d-flex mic-container justify-content-center align-items-center flex-wrap flex-column">
        {/* <img width="180" src={SoundWaves} alt="signals" /> */}
        <MicButton micType={"gray-mic"} />
      </div>

      <Container className="question-btn-container">
        <button className="blue-btn blue-button-shadow">Try Again</button>
        <button className="gray-btn px-4">Skip</button>
        <button className="green-btn green-button-shadow px-4">Check</button>
      </Container>
    </>
  );
}

export default SubmitState;
