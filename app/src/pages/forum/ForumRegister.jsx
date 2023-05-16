import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React from "react";

export default function ForumRegister() {
  const emailRef = React.useRef();
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const onSubmit = () => {
    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    
    axios.post(`${process.env.REACT_APP_API}forum/register`, {
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
                <Form.Control ref={emailRef} type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control ref={usernameRef} type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" />
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