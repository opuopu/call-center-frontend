import React, { useEffect, useState } from "react";
import ProgressBarCompo from "../Components/ProgressBar/ProgressBarCompo";
import MoodQuestion from "../Components/MoodQuestion/MoodQuestion";
import GreatAlert from "../Components/GreatAlert/GreatAlert";
import { BASE_URL } from "../ServerUrl";
import axios from "axios";

function MoodAnswerCheck() {
  const [mods, setMods] = useState([]);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/api/v1/exercise/audios/`,
      headers: {
        Authorization: "Token 142125fcf9e3c6a36a183955f97d2a595a20dfe0",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setMods(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{ height: "665px" }}>
        <ProgressBarCompo />
        <MoodQuestion moodStatus={"success"} mods={mods} />
      </div>
      <GreatAlert />
    </>
  );
}

export default MoodAnswerCheck;
