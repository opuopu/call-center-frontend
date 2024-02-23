import React from "react";
import ProgressBar from "../Components/ProgressBar/ProgressBarCompo";
import SpeakerContainer from "../Components/SpeakerContainer/SpeakerContainer";
import { Container } from "react-bootstrap";
import SoundWaves from "../../src/assets/sound-waves 1.png";
import MicButton from "../Components/MicButton/MicButton";
import GreatAlert from "../Components/GreatAlert/GreatAlert";

function ResultState() {
  return (
    <>
      <div style={{ minHeight: "70vh" }}>
        <ProgressBar />

        <Container className="d-flex justify-content-start align-items-center flex-column mic-parent flex-wrap">
          <p className="w-auto mx-1">Listen to the Sentence & Repeat...</p>
          <SpeakerContainer />
        </Container>
      </div>

      <GreatAlert />
    </>
  );
}

export default ResultState;
