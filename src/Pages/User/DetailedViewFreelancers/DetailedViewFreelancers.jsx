import React from 'react';
import './DetailedViewFreelancers.css'
import Navbar from '../../Common/Navbar/navbar';
import { Container, Card,Row,Col} from 'react-bootstrap';
import profilePic from "../../../Assets/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg";
function DetailedViewFreelancers() {
  return (
    <>
    <Navbar/>
    <div>
    <Container className="mt-5 ">
      <h1 className="text-center m-5 text-white">Detailed View</h1>
      <Row className='bg-color border-0 text-white'>
        <Col>
        <Card className="mb-3  border-0 text-white" style={{  margin: 'auto', background: 'inherit' }}>
        <Card.Body className='m-3'>
          <Card.Title>Jithin Jose</Card.Title>
          <Card.Text>Contact: 9495211402</Card.Text>
          <Card.Text>Email: jithinjose@gmail.com</Card.Text>
          <Card.Text>Qualification: Btech</Card.Text>
          <Card.Text>Age: 26</Card.Text>
          <Card.Text>Job Role: Angular Developer</Card.Text>
          
        </Card.Body>
      </Card>
        </Col>
       
        <Col>
        <div className="text-center ">
            <img src={profilePic} className="img-fluid rounded m-5" alt="profile pic" style={{ width: '25%', height:'5%' }} />
          </div>
        </Col>
      </Row>
      
    </Container>
    </div>
    </>
  )
}

export default DetailedViewFreelancers