import React, { useState, useEffect } from "react";
import './Admin_ViewAllRequests.css';
import { Table, Container, Pagination } from "react-bootstrap";
import axios from "axios";

function Admin_ViewAllRequests() {
    const [requests, setRequests] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [requestsPerPage] = useState(5);

    useEffect(() => {
        axios.get("/api/requests")
            .then(response => {
                setRequests(response.data);
            })
            .catch(error => {
                console.error("Error fetching requests:", error);
            });
    }, []);

    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container className="mt-4">
            <h1 className='text-white'>All Requests</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Budget</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRequests
                        .filter((request) =>
                            request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            request.category.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((request, index) => (
                            <tr key={index}>
                                <td>{indexOfFirstRequest + index + 1}</td>
                                <td>{request.title}</td>
                                <td>{request.description}</td>
                                <td>{request.category}</td>
                                <td>{request.budget}</td>
                                <td>{request.status}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Pagination>
                {[...Array(Math.ceil(requests.length / requestsPerPage)).keys()].map((number) => (
                    <Pagination.Item key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </Container>
    );
}

export default Admin_ViewAllRequests;
