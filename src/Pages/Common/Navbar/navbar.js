import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../../redux/slices/authSlice";
function Navbar() {
  const navigate = useNavigate();
  const { isUserLoggedIn, userData, userType, userId } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  console.log("=useSelector", isUserLoggedIn);
  const redirectUserLogin = () => {
    navigate("/user-login");
  };
  const redirectFreelancerLogin = () => {
    navigate("/freelancer-login");
  };
  const redirectFreelancer = () => {
    navigate("/freelancer");
  };
  const redirectHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("user-login");
  };
  const redirectUserRequest = () => [
    navigate("/user-request"),
  ]

  return (
    <div className="container-fluid bg-connect ">
      <div className="connect justify-content-center">
        <span>Connect</span>
        <i className="bi bi-gear-wide-connected mx-3"></i>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav1"
            aria-controls="navbarNav1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav1"
          >
            <ul className="navbar-nav">
              <li className="nav-item m-3" onClick={redirectHome}>
                <p className="nav-link">Home</p>
              </li>
              <li className="nav-item m-3" onClick={redirectFreelancer}>
                <p className="nav-link">Freelancers</p>
              </li>
              {userType === "user" && (
                <li style={{cursor: "pointer"}} className="nav-item m-3" onClick={redirectUserRequest}>
                  <p className="nav-link">Request</p>
                </li>
              )}

              {isUserLoggedIn ? (
                <>
                  <li className="nav-item m-3">
                    {/* <p className="nav-link">Profile</p> */}
                    <p className="nav-link">Profile</p>
                  </li>
                  <li className="nav-item m-3 ">
                    {/* <p className="nav-link">Profile</p> */}
                    <p
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                      className="nav-link text-danger fw-bold"
                    >
                      Logout
                    </p>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown m-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li onClick={redirectUserLogin}>
                      <a className="dropdown-item">User</a>
                    </li>
                    <li onClick={redirectFreelancerLogin}>
                      <p className="dropdown-item">Freelancer</p>
                    </li>
                    {/* <li>
                    <a className="dropdown-item" href="#">
                      Admin
                    </a>
                  </li> */}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
