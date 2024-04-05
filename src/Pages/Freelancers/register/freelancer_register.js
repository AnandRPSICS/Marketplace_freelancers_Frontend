import React from "react";
import { useState } from "react";
import "./freelancer_register.css";
import { useNavigate } from "react-router-dom";
import {
  isEmailValid,
  isPhoneNumberValid,
} from "../../../utils/validations/emailValidation";

function Freelancer_register() {
  const navigate = useNavigate();
  const [freelancerData, setFreelancerData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    qualification: "",
    jobrole: "",
    jobrole: "",
    profilepic: null,
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFreelancerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log("fre dat", freelancerData);
  const redirectFreelancerLogin = () => {
    navigate("/freelancer-login");
  };

  return (
    <div className="user-register container">
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-4">
              <div className="card mb-0 p-4">
                <div className="card-body">
                  <h2 className="text-center freelancer-register-heading mb-3">
                    Freelancer Registration
                  </h2>
                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label
                        htmlFor="firstName"
                        className="form-label user-login-label"
                      >
                        {" "}
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        name="name"
                        onChange={handleChanges}
                        value={freelancerData.name}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="contact"
                        className="form-label user-login-label"
                      >
                        Contact
                      </label>
                      <input
                        type="tel"
                        className={`form-control`}
                        id="contact"
                        minLength="10"
                        maxlength="10"
                        pattern="[0-9]{10}"
                        required
                        name="contact"
                        onChange={handleChanges}
                        value={freelancerData.contact}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label user-login-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        required
                        value={freelancerData.email}
                        onChange={handleChanges}
                        name="email"
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="form-label user-login-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        minLength="6"
                        required
                        value={freelancerData.password}
                        onChange={handleChanges}
                        name="password"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label user-login-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        minLength="6"
                        required
                        value={freelancerData.confirmPassword}
                        name="confirmPassword"
                        onChange={handleChanges}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="qualification"
                        className="form-label user-login-label"
                      >
                        {" "}
                        Qualification
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="qualification"
                        required
                        name="qualification"
                        onChange={handleChanges}
                        value={freelancerData.qualification}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="qualification"
                        className="form-label user-login-label"
                      >
                        {" "}
                        Job Role
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="jobrole"
                        required
                        name="jobrole"
                        onChange={handleChanges}
                        value={freelancerData.jobrole}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn w-100 py-8 fs-4 mb-4 rounded-2 user-login-button text-white"
                    >
                      Register
                    </button>
                  </form>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="fs-5 mb-0 fw-bold">
                    Alread have an account?
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={redirectFreelancerLogin}
                      className="fw-bold ms-2 text-decoration-none text-primary"
                    >
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freelancer_register;
