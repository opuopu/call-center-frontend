import React from "react";
import AnsQuesCompo from "../Components/AnsQuesCompo/AnsQuesCompo";
import WrongAlert from "../Components/WrongAlert/WrongAlert";

function HomeSentenceWrong() {
  return (
    <>
      <div style={{ height: "660px" }}>
        <AnsQuesCompo button={"wrong"} />
      </div>
      <WrongAlert/>
    </>
  );
}

export default HomeSentenceWrong;
