import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='container-fluid bg-white m-0'>
      <nav className="navbar navbar-expand-lg navbar-light" id='footer-base'>
        <div className="container-fluid mx-5">
          <span className="connect footer-brand mx-5">
            <span>Connect</span>
            <i className="bi bi-gear-wide-connected mx-3 d-inline"></i>
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5 " id="navbarNav">
            <ul className="navbar-nav mx-5">
              <li className="nav-item  mx-2">
                <a className="nav-link footer-nav" href="#">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link footer-nav" href="#">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link footer-nav" href="#">Login</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link footer-nav" href="#">Blog</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link footer-nav" href="#">Success Stories</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link footer-nav" href="#">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Footer