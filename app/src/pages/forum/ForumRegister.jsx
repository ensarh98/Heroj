import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import React from "react";

export default function ForumRegister() {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [errors, setErrors] = React.useState({});
  
  React.useEffect(() => {
    setErrors({
      email: false,
      username: false,
      password: false,
    })
  }, [])

  const onSubmit = () => {    
    axios.post(`${process.env.REACT_APP_API}forum/register`, {
      email,
      username,
      password
    })
      .then((res) => res.data);
  }

  const invalidUsername = (username) => {
    return !username.match("^[a-zA-Z0-9_]{5,15}$");
  }

  const onChangeUsername = (username) => {
    setUsername(username);
    setErrors({
      ...errors,
      username: invalidUsername(username)
    })
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form className="border p-5">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="text"
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control 
                    type="text"
                    onChange={e => onChangeUsername(e.target.value)}
                    isInvalid={errors.username}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Invalid username format
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                />
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