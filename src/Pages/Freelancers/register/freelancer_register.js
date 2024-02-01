import React from 'react'

function Freelancer_register() {
  return (
    <div>
      <div className='container-fluid mx-1'>
      <h2 className='fw-semibold mt-4'>Freelancer Registration</h2>
      <form>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" required />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" minLength="6" required />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" minLength="6" required />
      </div>
      <button type="submit" className="btn btn-secondary">Register</button>
    </form>
      </div>
    </div>
  )
}

export default Freelancer_register