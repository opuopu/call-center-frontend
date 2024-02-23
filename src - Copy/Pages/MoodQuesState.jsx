import React from "react";
import ProgressBarCompo from "../Components/ProgressBar/ProgressBarCompo";
import MoodQuestion from "../Components/MoodQuestion/MoodQuestion";
import SpeakerContainer from "../Components/SpeakerContainer/SpeakerContainer";

function MoodeQuesState() {
  return (
    <>
      <ProgressBarCompo />
      <MoodQuestion moodStatus={"fds"} />

      <div className="moods-btn">
        <button className="blue-btn blue-button-shadow">Pause</button>
        <button className="gray-btn">Check</button>
      </div>
    </>
  );
}

export default MoodeQuesState;
