import React from "react";
import "./ViewAllFreelancers.css";

import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

import Navbar from "../../Common/Navbar/navbar";
import profilePic from "../../../Assets/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg";
import placeholderImg from "../../../Assets/user-placeholder-img.jpg";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../apis/axiosInstance";
function ViewAllFre1elancers() {
  const navigate = useNavigate();
  const [allFreelancersData, setAllFreelancersData] = useState([]);

  useEffect(() => {
    getAllFreelancers();
  }, []);

  const navigateToDetailedView = (id) => {
    navigate(`/freelancer/${id}`);
  };
  const getAllFreelancers = async () => {
    try {
      let res = await axiosInstance.get("/getAllFreelancers");
      let data = res?.data?.data || [];
      setAllFreelancersData(data);
    } catch (error) {
      console.log("Error on getting all freelancers", error);
    }
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          top: "900px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
        }}
        className="container my-5  rounded"
      >
        <h1 className="text-center m-5 text-dark">View All Freelancers</h1>
        <Container className="d-flex justify-content-center flex-wrap  my-5">
          {allFreelancersData.map((freelancer) => {
            let filename = freelancer?.profilepic?.filename || null;
            let profilePicUrl = placeholderImg;
            if (filename) {
              profilePicUrl = BASE_URL + filename;
            }

            return (
              <div key={freelancer._id}>
                <Col md={8}>
                  <Card className="mb-3" style={{ maxWidth: "540px" }}>
                    <Row className="g-0">
                      <Col md={8}>
                        <Card.Body className="text-center">
                          <Card.Title className=" my-3 mx-2 ">
                            {" "}
                            Name: &nbsp;
                            {freelancer.name}
                          </Card.Title>
                          <Card.Text>
                            Qualification: {freelancer.qualification}
                          </Card.Text>
                          <Card.Text>Job Role: {freelancer.jobrole}</Card.Text>
                          <Button
                            variant="primary"
                            className=" my-3 mx-2 bg-color border-0 rounded-pill"
                            size="lg"
                            onClick={() => {
                              navigateToDetailedView(freelancer._id);
                            }}
                          >
                            View More
                          </Button>{" "}
                        </Card.Body>
                      </Col>
                      <Col
                        md={4}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Card.Img
                          src={profilePicUrl}
                          className="img-fluid rounded-start"
                          alt="profile pic"
                        />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
}

export default ViewAllFre1elancers;
