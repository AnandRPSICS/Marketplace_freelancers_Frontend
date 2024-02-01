import React from 'react'
import './admin_login.css'
import logo from '../../Assets/logo-no-background.png'

function Admin_login() {
  return (
    <div>
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <a href="" className="text-nowrap text-center d-block py-3 w-100">
                  <img src={logo} width="180" alt=""/>
                </a>
                <h2 className="text-center fw-semibold">Admin Login</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label text-dark" htmlFor="flexCheckChecked"> Remember this Device </label>
                    </div>
                    <a className="text-primary fw-bold" href=""> Forgot Password?</a>
                  </div>
                  <a href="" className="btn btn-dark w-100 py-8 fs-4 mb-4 rounded-2">Sign In</a>
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

export default Admin_login