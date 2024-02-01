import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarCompo.css";
import Logo from "../../assets/Call Center Coach Logo-F 1.png";
import ProfileImage from "../../assets/Group 1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUserData, setNavBar } from "../../Redux/uReducer";
import { SERVERURL } from "../../ServerUrl";
function NavbarCompo() {
  let Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state?.CustomerReducer?.currentUser);
  console.log(User);
  // console.log(active, "active");
  const handleHamburger = () => {
    const sidebar = document.getElementsByClassName("nav-sidebar")[0];
    sidebar.classList.toggle("nav-sidebar-responsive");
  };

  let location = useLocation();
  const [dashboard, setDashboard] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  // Now the hamburger is hidden now we need to look for dashboard in wc web
  // I want to ask to the bro that how
  const handleLogout = () => {
    let fm = new FormData();
    SERVERURL.post(
      "auth/token/logout/",

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencode",
          Authorization: `TOKEN ${User?.token?.auth_token}`,
        },
      }
    )
      .then((res) => {
        sessionStorage.removeItem("clientToken");
        dispatch(currentUserData(null));
        // dispatch(setNavBar(false));
        Navigate("/user-login");
      })
      .catch((err) => {
        console.log("not logout");
      });
  };

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/leaderboard" ||
      location.pathname === "/my-profile" ||
      location.pathname === "/team" ||
      location.pathname === "/show-teams"
    ) {
      setDashboard(true);
      setShowHamburger(true);
      console.log("Setting upd the path state ----", location.pathname);
    } else {
      setDashboard(false);
      setShowHamburger(false);
    }

    console.log(showHamburger, "States change: ", dashboard);
  }, [location.pathname]);

  console.log("This is navbarcompo good for dashboard");

  return (
    <>
      <Navbar
        className={`nav-container ${dashboard ? "position-fixed" : ""}  w-100 `}
        bg="light"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => Navigate("/")}
            className="d-flex justify-content-center align-items-center logo-container"
            style={{ cursor: "pointer" }}
          >
            {showHamburger ? (
              <RxHamburgerMenu
                className={`${dashboard ? "d-flex" : "d-none"} hamburger`}
                onClick={handleHamburger}
              />
            ) : (
              ""
            )}

            <img width="50" src={Logo} />
            <div>
              <p className="logo-text">CALL CENTER</p>
              <span className="logo-text">COACH</span>
            </div>
          </Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <span className={`ms-auto ${dashboard ? "d-flex" : "d-none"}`}>
            {/* <button className="nav-btn mx-2">Get Started</button>
              <button className="nav-btn mx-2">Login</button> */}
            <div className="profile-text-container mx-2 d-flex justify-content-end align-items-center flex-column">
              <span className="align-self-end">User 2000</span>
              <span>Company Name</span>
            </div>

            <div class="dropdown ">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ background: "none", border: "none" }}
              >
                <img
                  className="dropdown-img"
                  width={50}
                  src={ProfileImage}
                  alt=""
                />
              </button>
              <ul
                class="dropdown-menu dropdown-menu-right "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
                <li>
                  <div
                    onClick={handleLogout}
                    class="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          </span>

          <div className={`ms-auto ${!dashboard ? "d-flex" : "d-none"}`}>
            <button className="nav-btn m-2 px-4 blue-button-shadow">
              Get Started
            </button>
            <Link to="/user-login">
              <button className="nav-btn m-2 px-4 green-button-shadow">
                Login
              </button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCompo;
