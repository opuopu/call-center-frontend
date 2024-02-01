import React from "react";
import "./NavDropDown.css"

function NavDropDown(props) {
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn dropdown-toggle leader-dropdown-btn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props?.name}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavDropDown;
