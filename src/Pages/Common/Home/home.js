import * as React from "react";
import "./home.css";
import notification from "../../../Assets/notification.png";
import laptop from "../../../Assets/laptop.png";
import side_fig from "../../../Assets/side_fig.png";
import beauty from "../../../Assets/Beauty.png";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
function Home(props) {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="m-5">
          <p className="hero-legend justify-content-center pt-5 ">
            Connect, Collaborate, and Reunite
          </p>
        </div>
        <div>
          <p className="home-inner justify-content-center">
            A Lost & Found for Your Freelance Community
          </p>
        </div>
        <div className="connect justify-content-center p-5 m-5">
          <span>Connect</span>
          <i className="bi bi-gear-wide-connected mx-3"></i>
        </div>
        <div className="home-inner2 p-5 ">
          <p className="m-3 p-3">Lost equipment? Found inspiration?</p>
          <p className="home-inner3 mt-4 p-3">
            Join CONNECT, the trusted network for freelancing professionals
          </p>
          <button
            className="btn btn-outline-info btn-lg px-5 py-4 m-5"
            id="btn1"
          >
            Connect Now <i className="bi bi-gear-wide-connected mx-3"></i>
          </button>
        </div>
        <div className="home-banner mb-5 p-5">
          <div className="home-banner-inner m-5 p-5">
            <img
              src={notification}
              alt="notification"
              className="ms-auto float-end"
            />
            <p className="home-banner-inner1 ">
              Easily report lost or found items with a user-friendly platform,
              including photos and detailed descriptions.
            </p>
          </div>
          <p className="home-banner-inner2 m-5 p-5">Simplified Reporting</p>
        </div>
        <div className="home-banner-targeted text-center p-5">
          <img src={laptop} alt="laptop" className="mx-auto p-5" />
          <p className="home-targeted-search p-3">Targeted Search</p>
          <p className="home-targeted-search-body p-3">
            Find what you're looking for quickly with advanced filtering and
            categorization based on project types, skills, and locations.
          </p>
        </div>
        <div className="home-banner-inner m-5">
          <div className="home-banner-secure m-5">
            <p className="home-banner-secure-inner">Secure Communication</p>
            <p className="home-banner-secure-inner1">
              Join CONNECT, the trusted network for freelancing professionals
            </p>
          </div>
        </div>
        <div className="container home-banner-inner m-5">
          <div className="row">
            <div className="col-md-6">
              <div className="p-3 text-center">
                <p className="home-banner-community p-3">Community-Driven</p>
                <p className="home-banner-community-inner p-3">
                  Join CONNECT, the trusted network for freelancing
                  professionals
                </p>
                <button
                  className="btn btn-outline-info btn-lg px-5 pt-3 my-3"
                  id="btn2"
                >
                  GROW <i className="bi bi-gear-wide-connected mx-1"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={side_fig}
                alt="side figure"
                className="img-fluid  p-3"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-ipad text-center  m-4 ">
          <button className="btn btn-info btn-lg " id="btn3">
            CONNECT TO NETWORK{" "}
            <i className="bi bi-gear-wide-connected mx-3"></i>
          </button>
        </div>
        <div className="home-banner-inner text-center p-4 m-5">
          <p className="home-banner-testimonial m-5">Testimonials</p>
          <p className="home-banner-quoteblock m-5">
            " Connect restored my faith in the freelance community. My Code went
            missing after a shoot, and within days, a fellow Coder messaged me
            through the platform to return it! Amazing! "
          </p>
          <img src={beauty} alt="beauty" className="mx-auto m-5" />
          <p className="home-banner-end">Amazing Coder</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
