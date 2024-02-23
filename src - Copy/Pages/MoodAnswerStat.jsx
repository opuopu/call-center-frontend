import React from 'react'
import ProgressBarCompo from "../Components/ProgressBar/ProgressBarCompo";
import MoodQuestion from "../Components/MoodQuestion/MoodQuestion";

function MoodAnswerStat() {
  return (
    <>
        
      <ProgressBarCompo />
      <MoodQuestion moodStatus={"success"} />

      <div className="moods-btn">
        <button className="blue-btn blue-button-shadow">Pause</button>
        <button className="green-btn green-button-shadow">Check</button>
      </div>
    </>
  )
}

export default MoodAnswerStat