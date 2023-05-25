import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ForumLoginModal from './ForumLoginModal';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ForumNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cookies = new Cookies();

  const [logged, setLogged] = useState(false);

  const logout = () => {
    axios.post(`${process.env.REACT_APP_API}forum/logout`, {
      id: cookies.get('session_token')
    }).then((res) => {
      if (res.status === 200) {
        cookies.remove('session_token');
        setLogged(false);
      }
    })
  }

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (cookies.get('session_token'))
      axios.get(`${process.env.REACT_APP_API}forum/user/${cookies.get('session_token')}`).then(res => {
        if (res.status === 200) {
          console.log(res.data);
          setUserData(res.data);
          setLogged(true);
        }
      })
  }, [cookies.get('session_token')])

  return (
    <>
      <ForumLoginModal show={show} handleClose={handleClose}></ForumLoginModal>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Heroj
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='ms-auto'>
              { cookies.get('session_token') &&
                <NavDropdown title={`${userData.username}`} alignRight>
                  <NavDropdown.Item>
                    <Link to={`http://localhost:3000/forum/profile`}>Profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              }
              { !cookies.get('session_token') &&
                <Button variant='dark' onClick={handleShow}>
                  Sign in
                </Button>
              }
              { !cookies.get('session_token') &&
                <Nav.Link href={`http://localhost:3000/forum/register/`}>Sign up</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}