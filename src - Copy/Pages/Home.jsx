import React from "react";
import Difficulty from "../Components/Difficulty/Difficulty";

function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center difficulty-container">
        <Difficulty/>
      </div>
    </>
  );
}

export default Home;
