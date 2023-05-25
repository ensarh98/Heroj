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

  const [errors, setErrors] = React.useState({
    email: {
      value: false,
      msg: ''
    },
    username: {
      value: false,
      msg: ''
    },
    password: {
      value: false,
      msg: ''
    },
    confirmPassword: {
      value: false,
      msg: ''
    },
  });
  
  const setErrorField = (key, value, msg) => {
    setErrors({
      ...errors,
      [key]: {
        value: value,
        msg: msg
      }
    })
  }

  const onSubmit = () => {
    axios.post(`${process.env.REACT_APP_API}forum/register`, {
      email,
      username,
      password
    }).then((res) => {
      if (res.status === 201) {
        setSuccess(true);
      } else if (res.status === 200) {
        if (res.data === 'email is not avaliable') {
          setErrorField('email', true, 'Email is not avalible.');
        }
        else if (res.data === 'username already exists') {
          setErrorField('username', true, 'Username is not avalible.');
        }
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
    setErrorField(
      'username', 
      invalidUsername(username), 
      'Username must contain only alphanumeric values or _, at least 5 and max 15 characters.'
    );
  }

  const onChangeEmail = (email) => {
    setEmail(email);
    setErrorField('email', invalidEmail(email), 'Email format is not valid.');
  }

  const onChangePassword = (password) => {
    setPassword(password);
    setErrorField(
      'password',
      invalidPassword(password),
      'Password must contain only alphanumeric values or _, at least 6 and max 15 characters'
    );
  }

  const onChangeConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    setErrorField(
      'confirmPassword',
      invalidConfirmPassword(confirmPassword),
      'Passwords must match'
    );
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
                    isInvalid={errors.email.value}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email.msg}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control 
                    type="text"
                    onChange={e => onChangeUsername(e.target.value)}
                    isInvalid={errors.username.value}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.username.msg}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    onChange={e => onChangePassword(e.target.value)}
                    isInvalid={errors.password.value}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.password.msg}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    onChange={e => onChangeConfirmPassword(e.target.value)}
                    isInvalid={errors.confirmPassword.value}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.confirmPassword.msg}
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