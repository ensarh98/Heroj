import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React from "react";

export default function ForumRegister() {

  const onSubmit = () => {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    axios.post('http://127.0.0.1:8000/forum/register', {
      email,
      username,
      password
    })
      .then((res) => res.data);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form className="border p-5">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="email" type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control id="username" type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control id="password" type="password" />
              </Form.Group>
              <Button variant="primary" onClick={onSubmit}>
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}