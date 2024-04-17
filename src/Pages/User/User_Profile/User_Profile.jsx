import React from "react";
import './User_Profile.css';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaEdit, FaListAlt, FaTasks } from 'react-icons/fa'; // Importing required icons
import profilePic from '../../../Assets/30-307416_profile-icon-png-image-free-download-searchpng-employee.png';
import profileIllu from '../../../Assets/illustration-graphic-cartoon-character-of-freelancer-programmer-outsourcer-vector-removebg-preview.png';
import Navbar from "../../Common/Navbar/navbar";
import Footer from "../../Common/Footer/footer";

function User_Profile({ user }) {
  return (
    <>
    <Navbar />
    <Container fluid className="bg-light h-75 w-100 ">
      <h1 className="m-5 p-5 text-center">User Profile</h1>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <div className="d-flex align-items-center">
            <Image
              src={profilePic}
              alt="Profile Picture"
              roundedCircle
              width={200}
              height={200}
              className="m-5"
            />
            <div className="m-5 fs-3">
              <h2 className="m-4">Jithin Jose</h2>
              <p className="m-4 fs-5">Email: jithin@gmail.com</p>
            </div>
          </div>
          <Row className="justify-content-center mt-5">
  <Col xs="auto" className="me-3">
    <Button variant="primary" size="sm">
      <FaEdit className="me-2" />
      Edit Profile
    </Button>
  </Col>
  <Col xs="auto" className="me-3">
    <Button variant="success" size="sm">
      <FaTasks className="me-2" />
      My Activity
    </Button>
  </Col>
  <Col xs="auto">
    <Button variant="info" size="sm">
      <FaListAlt className="me-2" />
      View All Request
    </Button>
  </Col>
</Row>

        </Col>
        <Col>
          <Image
            src={profileIllu}
            alt="Profile Picture"
            className="m-3"
            width={600}
            height={600}
          />
        </Col>
      </Row>
      
    </Container>
    <Footer />
    </>
  );
}

export default User_Profile;
