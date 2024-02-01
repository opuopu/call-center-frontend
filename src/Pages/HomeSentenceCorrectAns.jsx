import React from "react";
import AnsQuesCompo from "../Components/AnsQuesCompo/AnsQuesCompo";
import GreatAlert from "../Components/GreatAlert/GreatAlert";

function HomeSentenceCorrectAns() {
  return (
    <>
    <div style={{height:"660px"}}>
      <AnsQuesCompo button={"success"} />
    </div>
      <GreatAlert/>
    </>
  );
}

export default HomeSentenceCorrectAns;
