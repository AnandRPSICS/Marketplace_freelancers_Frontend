import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='container-fluid bg-light '>
      <nav className="navbar navbar-expand-lg navbar-light" id='footer-base'>
      <div className="container-fluid ">
      <span className="connect footer-brand">
        <span>Connect</span>
        <i className="bi bi-gear-wide-connected mx-3"></i>
      </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav m-5 ">
            <li className="nav-item m-4">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item m-4">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item m-4">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item m-4">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item m-4">
              <a className="nav-link" href="#">Success Stories</a>
            </li>
            <li className="nav-item m-4">
              <a className="nav-link" href="#">FAQs</a>
            </li>
          </ul>
         </div>
        </div>
      </nav>
    </div>
  )
}

export default Footer