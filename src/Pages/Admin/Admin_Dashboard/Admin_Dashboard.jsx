import React, { useState } from 'react';
import './Admin_Dashboard.css';
import { Container, Button, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BsGrid, BsPeople, BsPerson, BsCollectionFill } from 'react-icons/bs';

function Admin_Dashboard() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => setShowSidebar(!showSidebar);
  
    return (
      <Container fluid className='p-0'>
        <header className="d-flex justify-content-between align-items-center bg-light p-3">
          <Button className='bg-color border-0' onClick={toggleSidebar}>
            ☰
          </Button>
          <h1 className="fs-2">Admin Dashboard</h1>
        </header>
  
        <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start" className='bg-color text-white'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-unstyled">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link m-3 d-flex align-items-center text-decoration-none" style={{color: "inherit"}}>
                  <BsGrid className="me-2" />
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link m-3 d-flex align-items-center text-decoration-none" style={{color: "inherit"}}>
                  <BsPeople className="me-2" />
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/freelancers" className="nav-link m-3 d-flex align-items-center text-decoration-none" style={{color: "inherit"}}>
                  <BsPerson className="me-2" />
                  Freelancers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/requests" className="nav-link m-3 d-flex align-items-center text-decoration-none" style={{color: "inherit"}}>
                  <BsCollectionFill className="me-2" />
                  Requests
                </Link>
              </li>
              {/* Add more menu items */}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
  
        {/* Main content */}
        <main className="mt-3">
          {/* Add your dashboard content here */}
        </main>
      </Container>
    );
}

export default Admin_Dashboard;
