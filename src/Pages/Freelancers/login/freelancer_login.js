import React from 'react';
import './freelancer_login.css';

function Freelancer_login() {
  return (
    <div className='freelancer-login container-fluid'>
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-4">
            <div className="card mb-0 p-4">
              <div className="card-body">
                <h2 className="text-center freelancer-login-heading mb-2">Freelancer Login</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label user-login-label">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label user-login-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label  user-login-label" htmlFor="flexCheckChecked"> Remember this Device </label>
                    </div>
                    <a className="user-login-label" href=""> Forgot Password?</a>
                  </div>
                  <a href="" className="btn  w-100 py-8 fs-4 mb-4 rounded-2 user-login-button text-white">Sign In</a>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-5 mb-0 fw-bold"><a className="fw-bold ms-2 text-decoration-none user-login-label" href=""> Create an User account</a></p>
                    
                  </div>
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

export default Freelancer_login