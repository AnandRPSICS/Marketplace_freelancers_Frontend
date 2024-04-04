import React from 'react';
import './freelancer_register.css';

function Freelancer_register() {
  return (
    <div className='user-register container'>
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-4">
              <div className="card mb-0 p-4">
                <div className="card-body">
                  <h2 className="text-center freelancer-register-heading mb-3">Freelancer Registration</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label user-login-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label user-login-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label user-login-label">Email address</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label user-login-label">Password</label>
                      <input type="password" className="form-control" id="password" minLength="6" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label user-login-label">Confirm Password</label>
                      <input type="password" className="form-control" id="confirmPassword" minLength="6" required />
                    </div>
                    <button type="submit" className="btn w-100 py-8 fs-4 mb-4 rounded-2 user-login-button text-white">Register</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Freelancer_register