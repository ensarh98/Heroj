import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { posts, topics } from './data';
import axios from "axios";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import './index.css'
import React, { useState } from 'react';
import ForumCard from './ForumCard';
import ForumSideCard from './ForumSideCard';
import ForumNavbar from './ForumNavbar';

export default function Forum() {

  const [forums, setForums] = useState([])

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}forum/`)
      .then(res => setForums(res.data))
  }, [])

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
              <Breadcrumb.Item href="#" active>Forum</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col xs={9}>
            <ForumCard title={<h4>Forums</h4>}>
              {forums.map((forum) => (
                <Link to={`/forum/${forum.pk}`}>
                  {forum.fields.title}
                </Link>
              ))}
            </ForumCard>
            {forums.map((forum) => (
              <ForumCard title={<h4>{forum.fields.title}</h4>}>
                <Link to={`#`}>
                  Post 1
                </Link>
                <Link to={`#`}>
                  Post 2
                </Link>
                <Link to={`#`}>
                  Post 3
                </Link>
                <Link to={`#`}>
                  Post 4
                </Link>
              </ForumCard>
            ))}
          </Col>
          <Col>
            <ForumSideCard title={"Recent posts"}>
              <Link to={`#`}>
                Post 1
              </Link>
              <Link to={`#`}>
                Post 2
              </Link>
              <Link to={`#`}>
                Post 3
              </Link>
              <Link to={`#`}>
                Post 4
              </Link>
              <Link to={`#`}>
                Post 4
              </Link>
            </ForumSideCard>
            <ForumSideCard title={"Top posts"}>
              <Link to={`#`}>
                Post 1
              </Link>
              <Link to={`#`}>
                Post 2
              </Link>
              <Link to={`#`}>
                Post 3
              </Link>
              <Link to={`#`}>
                Post 4
              </Link>
              <Link to={`#`}>
                Post 4
              </Link>
            </ForumSideCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}