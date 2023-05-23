import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ForumLoginModal from './ForumLoginModal';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function ForumNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const logout = () => {
    axios.post(`${process.env.REACT_APP_API}forum/logout`, {
      id: cookies.session_token
    }).then((res) => {
      if (res.status === 200) {
        removeCookie('session_token');
        removeCookie('email');
        removeCookie('password');
      }
    })
  }

  useEffect(() => {

  }, [cookies.session_token, cookies.email])

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
              { (!cookies.email && !cookies.session_token) &&
                <Button variant='dark' onClick={handleShow}>
                  Sign in
                </Button>
              }
              { (!cookies.email && !cookies.session_token) &&
                <Nav.Link href='forum/register/'>Sign up</Nav.Link>
              }
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
              { (cookies.email || cookies.session_token) &&
                <Button variant='dark' onClick={logout} className='ms-auto'>
                  Sign out
                </Button>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}