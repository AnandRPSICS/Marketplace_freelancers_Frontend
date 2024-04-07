import React from "react";
import "./ViewAllFreelancers.css";
import { Container, Row, Col, Card , Button} from 'react-bootstrap';
import Navbar from "../../Common/Navbar/navbar";
import profilePic from "../../../Assets/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg";
function ViewAllFreelancers() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center m-5 text-white">View All Freelancers</h1>
        <Container className="my-5">
      <Row className="m-5">
      <Col md={4}>
      <Card className="mb-3" style={{ maxWidth: '540px' }}>
      <Row className="g-0">
      <Col md={8}>
          <Card.Body className="text-center">
            <Card.Title className=" my-3 mx-2 "> Jithin Jose</Card.Title>
            <Card.Text >Angular Developer</Card.Text>
            <Card.Text>Job Role</Card.Text>
            <Button variant="primary" className=" my-3 mx-2 bg-color border-0 rounded-pill" size="lg">View More</Button>{' '}
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img src={profilePic} className="img-fluid rounded-start" alt="profile pic" />
        </Col>
      </Row>
    </Card>
         
        </Col>
        <Col md={4}>
        <Card className="mb-3" style={{ maxWidth: '540px' }}>
      <Row className="g-0">
      <Col md={8}>
          <Card.Body className="text-center">
            <Card.Title className=" my-3 mx-2 "> Jithin Jose</Card.Title>
            <Card.Text >Angular Developer</Card.Text>
            <Card.Text>Job Role</Card.Text>
            <Button variant="primary" className=" my-3 mx-2 bg-color border-0 rounded-pill" size="lg">View More</Button>{' '}
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img src={profilePic} className="img-fluid rounded-start" alt="profile pic" />
        </Col>
      </Row>
    </Card>
        </Col>
        <Col md={4}>
        <Card className="mb-3" style={{ maxWidth: '540px' }}>
      <Row className="g-0">
      <Col md={8}>
          <Card.Body className="text-center">
            <Card.Title className=" my-3 mx-2 "> Jithin Jose</Card.Title>
            <Card.Text >Angular Developer</Card.Text>
            <Card.Text>Job Role</Card.Text>
            <Button variant="primary" className=" my-3 mx-2 bg-color border-0 rounded-pill" size="lg">View More</Button>{' '}
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img src={profilePic} className="img-fluid rounded-start" alt="profile pic" />
        </Col>
      </Row>
    </Card>
        </Col>
      </Row>
      <Row className="m-5">
      <Col md={4}>
      <Card className="mb-3" style={{ maxWidth: '540px' }}>
      <Row className="g-0">
      <Col md={8}>
          <Card.Body className="text-center">
            <Card.Title className=" my-3 mx-2 "> Jithin Jose</Card.Title>
            <Card.Text >Angular Developer</Card.Text>
            <Card.Text>Job Role</Card.Text>
            <Button variant="primary" className=" my-3 mx-2 bg-color border-0 rounded-pill" size="lg">View More</Button>{' '}
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img src={profilePic} className="img-fluid rounded-start" alt="profile pic" />
        </Col>
      </Row>
    </Card>
         
        </Col>
        <Col md={4}>
        <Card className="mb-3" style={{ maxWidth: '540px' }}>
      <Row className="g-0">
      <Col md={8}>
          <Card.Body className="text-center">
            <Card.Title className=" my-3 mx-2 "> Jithin Jose</Card.Title>
            <Card.Text >Angular Developer</Card.Text>
            <Card.Text>Job Role</Card.Text>
            <Button variant="primary" className=" my-3 mx-2 bg-color border-0 rounded-pill" size="lg">View More</Button>{' '}
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img src={profilePic} className="img-fluid rounded-start" alt="profile pic" />
        </Col>
      </Row>
    </Card>
        </Col>
        <Col md={4}>
        <Card className="mb-3" style={{ maxWidth: '540px' }}>
      <Row className="g-0">
      <Col md={8}>
          <Card.Body className="text-center">
            <Card.Title className=" my-3 mx-2 "> Jithin Jose</Card.Title>
            <Card.Text >Angular Developer</Card.Text>
            <Card.Text>Job Role</Card.Text>
            <Button variant="primary" className=" my-3 mx-2 bg-color border-0 rounded-pill" size="lg">View More</Button>{' '}
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img src={profilePic} className="img-fluid rounded-start" alt="profile pic" />
        </Col>
      </Row>
    </Card>
        </Col>
      </Row>
    </Container>
      </div>
    </>
  );
}

export default ViewAllFreelancers;
