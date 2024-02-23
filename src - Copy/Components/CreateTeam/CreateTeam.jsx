import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CreateTeam.css";
import C3Context from "../../Context/C3Context.";

function CreateTeam(props) {
  const { getCompanyDetail, createTeam } = useContext(C3Context);
  const [companyId, setCompanyId] = useState("");
  const [companyValues, setCompanyValues] = useState({
    teamName: "",
  });

  useEffect(() => {
    getCompanyDetail().then((data) => {
      console.log("CompanyId: ", data?.data[0]?.id);
      console.log("CompanyDetail: ", data);
      setCompanyId(data?.data[0]?.id);
    });
  }, []);

  const handleOnChange = (e) => {
    setCompanyValues({ ...companyValues, [e.target.name]: e.target.value });
  };

  const createYourTeam = (e) => {
    e.preventDefault();
    createTeam(companyValues?.teamName, companyId).then((data) => {
      console.log("Team Data: ", data);
      if(data?.status === 200){
        
      }
    });
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Team
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-center flex-column w-100">
            <label className="align-self-start my-2" htmlFor="team-name">
              Team Name
            </label>
            <input
              placeholder="Enter your team name"
              type="text"
              id="team-name"
              className="user-input w-100"
              name="teamName"
              value={companyValues?.teamName}
              onChange={handleOnChange}
            />
            <Button
              onClick={createYourTeam}
              className="nav-btn green-button-shadow py-2 my-3 create_tbtn"
            >
              Create Team
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            className="nav-btn green-button-shadow py-2 my-3 create_tbtn"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTeam;
