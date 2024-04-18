import './Admin_ViewAllUsers.css';
import React, { useState, useEffect } from "react";
import { Table, Container, InputGroup, FormControl, Pagination } from "react-bootstrap";
import axios from "axios";
import { BsSearch } from 'react-icons/bs';

function Admin_ViewAllUsers() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5); 

    useEffect(() => {
        axios.get("/api/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container className="mt-4">
            <h1 className='text-white'>All Users</h1>
            <InputGroup className="mb-4">
                <InputGroup.Text id="search-addon">
                    <BsSearch />
                </InputGroup.Text>
                <FormControl
                    placeholder="Search users"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers
                        .filter((user) =>
                            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((user, index) => (
                            <tr key={index}>
                                <td>{indexOfFirstUser + index + 1}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.profilepic ? (
                                        <img
                                            src={user.profilepic}
                                            alt={`Profile of ${user.firstName} ${user.lastName}`}
                                            style={{ maxWidth: "100px", maxHeight: "100px" }}
                                        />
                                    ) : (
                                        "No Profile Picture"
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Pagination>
                {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map((number) => (
                    <Pagination.Item key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </Container>
    );
}

export default Admin_ViewAllUsers;
