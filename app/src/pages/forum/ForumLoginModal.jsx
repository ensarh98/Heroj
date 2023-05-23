import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

export default function ForumLoginModal(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const [cookies, setCookie] = useCookies(['user']);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API}forum/login`, {
      email,
      password,
      remember
    }).then((res) => {
        //console.log(res.data);

        switch (res.status) {
          case 200:
            setCookie('email', email, { expires: 0 });
            setCookie('password', password, { expires: 0 });
            break;
          case 201:
            setCookie('session_token', res.data['session_token']);
            break;
          default:
            break;
        }

        props.handleClose();
      });
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id='loginForm'>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Check 
              type='checkbox'
              id='remember-me'
              label='Remember me'
              onChange={(e) => setRemember(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' form='loginForm'>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}