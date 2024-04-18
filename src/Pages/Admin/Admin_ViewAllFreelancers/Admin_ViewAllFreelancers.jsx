import React, { useState, useEffect } from "react";
import './Admin_ViewAllFreelancers';
import { Table, Container, InputGroup, FormControl, Pagination } from "react-bootstrap";
import axios from "axios";
import { BsSearch } from 'react-icons/bs';

function Admin_ViewAllFreelancers() {
    const [freelancers, setFreelancers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [freelancersPerPage] = useState(5);

    useEffect(() => {
        axios.get("/api/freelancers")
            .then(response => {
                setFreelancers(response.data);
            })
            .catch(error => {
                console.error("Error fetching freelancers:", error);
            });
    }, []);

    const indexOfLastFreelancer = currentPage * freelancersPerPage;
    const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;
    const currentFreelancers = freelancers.slice(indexOfFirstFreelancer, indexOfLastFreelancer);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container className="mt-4">
            <h1 className='text-white'>All Freelancers</h1>
            <InputGroup className="mb-4">
                <InputGroup.Text id="search-addon">
                    <BsSearch />
                </InputGroup.Text>
                <FormControl
                    placeholder="Search freelancers"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Qualification</th>
                        <th>Profile Picture</th>
                        <th>Date of Birth</th>
                        <th>Job Role</th>
                    </tr>
                </thead>
                <tbody>
                    {currentFreelancers
                        .filter((freelancer) =>
                            freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            freelancer.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((freelancer, index) => (
                            <tr key={index}>
                                <td>{indexOfFirstFreelancer + index + 1}</td>
                                <td>{freelancer.name}</td>
                                <td>{freelancer.contact}</td>
                                <td>{freelancer.email}</td>
                                <td>{freelancer.qualification}</td>
                                <td>
                                    {freelancer.profilepic ? (
                                        <img
                                            src={freelancer.profilepic}
                                            alt={`Profile of ${freelancer.name}`}
                                            style={{ maxWidth: "100px", maxHeight: "100px" }}
                                        />
                                    ) : (
                                        "No Profile Picture"
                                    )}
                                </td>
                                <td>{freelancer.dob}</td>
                                <td>{freelancer.jobrole}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Pagination>
                {[...Array(Math.ceil(freelancers.length / freelancersPerPage)).keys()].map((number) => (
                    <Pagination.Item key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </Container>
    );
}

export default Admin_ViewAllFreelancers;
