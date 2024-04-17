import React from 'react';
import './Users_Request.css';
import { Container, Table, Button } from "react-bootstrap";
import Navbar from '../../Common/Navbar/navbar';


function Users_Request() {
  return (
    <>
    <Navbar/>
    <div className='container-fluid bg-light'>
        
        <Container>
        <h1 className='table-heading m-5'>Users Request</h1>
      <Table striped bordered hover className='m-5'> 
        <thead className='text-center'>
          <tr>
            <th>SI</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Budget</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
            <tr>
              <td>index </td>
              <td>title</td>
              <td>description</td>
              <td>category</td>
              <td>budget</td>
              <td className='text-center'>
                <Button variant="success" className="me-5">
                  Approve
                </Button>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
         
        </tbody>
      </Table>
    </Container>
    </div>
    </>
  )
}

export default Users_Request