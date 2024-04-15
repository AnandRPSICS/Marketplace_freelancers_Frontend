import React, { useState } from "react";
import "./Payment.css";
import Navbar from "../../Common/Navbar/navbar";
import { Container, Form, Row, Col, Image, Button } from "react-bootstrap";
import creditCard from "../../../Assets/credit-card.png";
import paypal from "../../../Assets/paypal.png";
import amazonPay from "../../../Assets/amazonpay.png";

function Payment() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid bg-color rounded">
        <Container fluid>
          <Row className="mx-5">
            <h1 className="text-white m-5 text-center">Payment</h1>
          </Row>
          <Row className="justify-content-center mx-5">
            <h5 className="text-white mx-5">Choose payment method below</h5>
            <Col xl={4} className="text-center">
              <Image
                src={creditCard}
                rounded
                fluid
                className="m-5 "
                style={{ maxWidth: "300px" }}
              />
            </Col>
            <Col xl={4} className="text-center">
              <Image
                src={paypal}
                rounded
                fluid
                className="m-5"
                style={{ maxWidth: "300px" }}
              />
            </Col>
            <Col xl={4} className="text-center">
              <Image
                src={amazonPay}
                rounded
                fluid
                className="m-5"
                style={{ maxWidth: "300px" }}
              />
            </Col>
          </Row>
          <Row className="mx-5">
            <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="cardholdersName">
                  <Form.Label className="text-white m-3">
                    Cardholder's Name
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter cardholder's name"
                    className="m-3"
                  />
                  <Form.Control.Feedback type="invalid" className="m-3 bg-light w-25 p-2">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="cardNumber">
                  <Form.Label className="text-white m-3">
                    Card Number
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter card number"
                    className="m-3"
                  />
                  <Form.Control.Feedback type="invalid" className="m-3 bg-light w-25 p-2">
                    Please provide a valid card number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="expMonth">
                      <Form.Label className="text-white m-3">
                        Exp Month
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="MM"
                        className="m-3"
                      />
                      <Form.Control.Feedback type="invalid" className="m-3 bg-light  p-2">
                        Please provide a valid expiration month.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="expYear">
                      <Form.Label className="text-white m-3">
                        Exp Year
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="YYYY"
                        className="m-3"
                      />
                      <Form.Control.Feedback type="invalid" className="m-3 bg-light  p-2">
                        Please provide a valid expiration year.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="cvc">
                      <Form.Label className="text-white m-3">
                        CVC Number
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter CVC"
                        className="m-3"
                      />
                      <Form.Control.Feedback type="invalid" className="m-3 bg-light  p-2">
                        Please provide a valid CVC number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center d-grid gap-2">
                    <Button
                      variant="outline-light"
                      type="submit"
                      className="m-5"
                      size="lg"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Payment;
