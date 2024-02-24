import React from 'react'
import { Container, ProgressBar } from "react-bootstrap"
import CrossButton from "../../assets/Group 48.png"
import "./ProgressBar.css"

function ProgressBarCompo({ now, label }) {
  // const now = 60;
  return (
    <>
      <Container className='my-5'>

        <div>
          {/* <p className='m-auto px-2' style={{ color: "#54C999", width: "60%" }}>4 in a row {now}</p> */}
          <div className='progress-parent mx-auto d-flex justify-content-center align-items-center'>
            <ProgressBar now={now} label={label} visuallyHidden className='progress-bar-span m-2' />
            {/* <ProgressBar now={now} label={`${now}%`} visuallyHidden className='progress-bar-span m-2' /> */}
            {/* <img src={CrossButton} alt="cross-btn" /> */}
          </div>
        </div>

      </Container>
    </>
  )
}

export default ProgressBarCompo