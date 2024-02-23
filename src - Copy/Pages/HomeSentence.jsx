import React, { useState, useEffect } from "react";
import ProgressBar from "../Components/ProgressBar/ProgressBarCompo";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../ServerUrl";
import { BsFillMicFill } from "react-icons/bs";
import Swal from "sweetalert2";
function HomeSentence() {
  const audios = useSelector((state) => state?.CustomerReducer?.audioExercise);
  const [disable, setDisable] = useState(true);
  const [recorded, setRecorded] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const [noiseBlob, setNoiseBlob] = useState(null);
  useEffect(() => {
    // Start recording when component mounts
    window.startRecording();
    setDisable(true);
    // Stop recording after 3 seconds
    const timer = setTimeout(async () => {
      try {
        let file = await window.stopRecording();
        setNoiseBlob(file);
        console.log(file, "noise");
        setDisable(false);
      } catch (error) {
        console.error("Error:", error);
      }
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);
  ///
  const handleSave = async () => {
    let data = new FormData();
    // let noiseFile = new File([recorded.blob], "recording.mp3");
    console.log(audioBlob, "window.file");
    data.append("exercise", "1");
    data.append("details", JSON.stringify({}));
    data.append("audio", audioBlob);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/api/v1/user-exercise/`,
      headers: {
        Authorization: `Token ${sessionStorage?.getItem("clientToken")}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpload = async () => {
    let data = new FormData();
    // let noiseFile = new File([recorded.blob], "recording.mp3");
    console.log(audioBlob, "window.file");
    data.append("exercise", "1");
    data.append("noise", noiseBlob);
    data.append("trainee", audioBlob);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/api/v1/user-exercise/get_results/`,
      headers: {
        Authorization: `Token ${sessionStorage?.getItem("clientToken")}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        let ress = "";

        response?.data?.results?.analysis?.map((key) => {
          ress = ress + key + "\n";
        });
        ress = ress + response?.data?.results?.pace;
        console.log(ress, "ress");
        Swal.fire(ress, "", "success");
      })
      .catch((error) => {
        Swal.fire("Error", "", "error");
        console.log(error);
      });
  };
  return (
    <>
      <div style={{ display: "none" }}></div>
      <ProgressBar />

      <Container
        className="d-flex  justify-content-between align-items-center flex-column mic-parent flex-wrap"
        style={{ minHeight: "44vh" }}
      >
        <p
          style={{ fontWeight: "400", fontSize: "22px" }}
          className="w-auto mx-1"
        >
          Complete Sentence
        </p>

        <div
          style={
            {
              //  height: "15vh"
            }
          }
        >
          <div className="complete-sentence my-2">
            <p style={{ width: "fit-content" }} className="m-0">
              {audios && audios[0]?.text}
            </p>
          </div>
          <div>
            <audio controls>
              {audios && <source src={audios[0]?.audio} type="audio/mpeg" />}
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <div>
              {recorded && (
                <div className="d-flex flex-column mt-2">
                  <div
                    className="complete-sentence "
                    style={{
                      fontSize: "18px",
                      color: "#212529",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Recorded audio
                  </div>
                  <audio controls>
                    <source src={recorded} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div className="complete-btn-container">
          <button className="gray-shadow-btn my-2">fiscal</button>
          <button className="gray-shadow-btn my-2">business</button>
          <button className="gray-shadow-btn my-2">great</button>
        </div> */}

        <div
          style={{ width: "40%", minWidth: "250px" }}
          className="d-flex justify-content-between align-items-center"
        >
          {" "}
          <button
            className="gray-btn text-black"
            onClick={() => {
              setRecorded("");
            }}
          >
            Reset
          </button>
          <button
            disabled={disable}
            className="glow-on-hover"
            onMouseDown={() => window.startRecording()}
            onMouseUp={async () => {
              setRecorded("");
              try {
                let file = await window.stopRecording();
                setAudioBlob(file);
                setRecorded(URL.createObjectURL(file));
                console.log(file, "file");
              } catch (error) {
                console.error("Error:", error);
              }
            }}
            onMouseLeave={() => {
              console.log("release");
            }}
          >
            <BsFillMicFill />
          </button>
          <button
            disabled={!noiseBlob && !audioBlob}
            className="gray-btn text-black"
            onClick={handleUpload}
          >
            Check
          </button>
          <button className="blue-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </Container>
    </>
  );
}

export default HomeSentence;
