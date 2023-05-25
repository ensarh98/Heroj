import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ForumCard from './ForumCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import ForumNavbar from './ForumNavbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function ForumProfile() {

  const cookies = new Cookies();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (cookies.get('session_token'))
      axios.get(`${process.env.REACT_APP_API}forum/user/${cookies.get('session_token')}`).then(res => {
        if (res.status === 200) {
          setUserData(res.data);
        }
      })
  }, [cookies.get('session_token')]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ForumNavbar></ForumNavbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="http://localhost:3000/forum">Forum</Breadcrumb.Item>
              <Breadcrumb.Item href="#" active>
                Profile
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <ForumCard title={<h2>Profile</h2>}>
              <img src='../../../images/forum/avatar.png' width={"15%"} />
              <h6>Username: {userData.username}</h6>
              <h6>Email: {userData.email}</h6>
              <h6>Date created: {userData.date_created}</h6>
              <h6>Verified: {userData.is_verified ? "Yes" : "No"}</h6>
            </ForumCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}