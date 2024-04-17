import React, {useState, useEffect} from "react";
import { Container, Table, Button } from "react-bootstrap";
import Navbar from "../../Common/Navbar/navbar";
import Footer from "../../Common/Footer/footer";
import { axiosInstance } from "../../../apis/axiosInstance";
import "./view_request.css";

function Users_Request() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    getRequestsData();
  }, []);
  const getRequestsData = async () => {
    try {
      const res = await axiosInstance.get("/getAllWorkRequest");
      if (res.status === 200) {
        let data = res.data?.data || [];
        setRequests(data);
      } else {
        console.log("Error on getting requests");
      }
    } catch (error) {
      console.log("Error on getting requests", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-light">
        <Container>
          <h1 className="table-heading text-dark m-5 text-center mt-5">Users Work Requests</h1>
          <Table striped bordered hover className="m-5">
            <thead className="text-center">
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Deadlinet</th>
                <th>Accept Work</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {requests.map((req, index) => {
                return (
                  <tr>
                    <td>index </td>
                    <td>title</td>
                    <td>description</td>
                    <td>category</td>
                    <td>budget</td>
                    <td>budget</td>
                    <td>
                      <Button variant="success">Accept</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
      <div style={{ position: "relative" }}>
        <Footer />
      </div>
    </>
  );
}

export default Users_Request;
