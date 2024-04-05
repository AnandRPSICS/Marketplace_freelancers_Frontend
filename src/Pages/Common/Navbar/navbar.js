import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const redirectUserLogin = () => {
    navigate("/user-login");
  };
  const redirectFreelancerLogin = () => {
    navigate("/freelancer-login");
  };

  return (
    <div className="container-fluid bg-connect">
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
              <li className="nav-item m-3">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item m-3">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={redirectUserLogin}>
                    <a className="dropdown-item" href="#">
                      User
                    </a>
                  </li>
                  <li onClick={redirectFreelancerLogin}>
                    <a className="dropdown-item" href="#">
                      Freelancer
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item" href="#">
                      Admin
                    </a>
                  </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
