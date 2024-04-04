import React from "react";
import "./user_register.css";
import { useState } from "react";
import { isEmailValid } from "../../../utils/validations/emailValidation";
function User_register() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  console.log("user data", userData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid(userData.email)) {
      alert("Please Enter Valid Email");
      return;
    }

    console.log("Submitted");
  };
  return (
    <div className="user-register container">
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-4">
              <div className="card mb-0 p-4">
                <div className="card-body">
                  <h2 className="text-center user-register-heading">
                    User Registration
                  </h2>
                  <form onSubmit={handleSubmit} className="needs-validation">
                    <div className="mb-3">
                      <label
                        htmlFor="firstName"
                        className="form-label user-login-label"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        onChange={handleChanges}
                        value={userData.firstName}
                        name="firstName"
                        required
                      />

                      <div class="invalid-feedback">
                        Please provide your first Name.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="lastName"
                        className="form-label user-login-label"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        required
                        onChange={handleChanges}
                        name="lastName"
                        value={userData.lastName}
                      />
                    </div>
                    <div className="mb-3 ">
                      <label
                        htmlFor="email"
                        for="validationCustomUsername"
                        className="form-label user-login-label"
                      >
                        Email address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={handleChanges}
                        value={userData.email}
                        name="email"
                        aria-describedby="emailHelp"
                        required
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
                        onChange={handleChanges}
                        name="password"
                        value={userData.email}
                        required
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
                        onChange={handleChanges}
                        value={userData.confirmPassword}
                        name="confirmPassword"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User_register;
