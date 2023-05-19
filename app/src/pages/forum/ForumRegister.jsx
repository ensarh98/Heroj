import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import React from "react";
import ForumRegisterSuccess from "./ForumRegisterSuccess";

export default function ForumRegister() {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const [errors, setErrors] = React.useState({});
  
  React.useEffect(() => {
    setErrors({
      email: false,
      username: false,
      password: false,
      confirmPassword: false,
    })
  }, [])

  const onSubmit = async () => {    
    const res = await axios.post(`${process.env.REACT_APP_API}forum/register`, {
      email,
      username,
      password
    }).then((res) => {
      if (res.status === 201) {
        setSuccess(true);
      }
    });
  }

  const invalidUsername = (username) => {
    return !username.match("^[a-zA-Z0-9_]{5,15}$");
  }

  const invalidEmail = (email) => {
    return !email.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  }

  const invalidPassword = (password) => {
    return !password.match("^[a-zA-Z0-9_]{6,15}$");
  }

  const invalidConfirmPassword = (confirmPassword) => {
    return confirmPassword !== password;
  }

  const onChangeUsername = (username) => {
    setUsername(username);
    setErrors({
      ...errors,
      username: invalidUsername(username)
    })
  }

  const onChangeEmail = (email) => {
    setEmail(email);
    setErrors({
      ...errors,
      email: invalidEmail(email)
    })
  }

  const onChangePassword = (password) => {
    setPassword(password);
    setErrors({
      ...errors,
      password: invalidPassword(password)
    })
  }

  const onChangeConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    setErrors({
      ...errors,
      confirmPassword: invalidConfirmPassword(confirmPassword)
    })
  }

  return (
    <>
      {
        success
        ? (<ForumRegisterSuccess></ForumRegisterSuccess>) : <Container>
        <Row>
          <Col>
            <Form className="border p-5">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control 
                    type="text"
                    onChange={e => onChangeEmail(e.target.value)}
                    isInvalid={errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Email format is invalid
                  </Form.Control.Feedback>
                </InputGroup>
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
                    Username must contain only alphanumeric values or _, at least 5 and max 15 characters
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    onChange={e => onChangePassword(e.target.value)}
                    isInvalid={errors.password}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Password must contain only alphanumeric values or _, at least 6 and max 15 characters
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    onChange={e => onChangeConfirmPassword(e.target.value)}
                    isInvalid={errors.confirmPassword}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Both passwords must match
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Button variant="primary" onClick={onSubmit}>
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      }
    </>
  )
}