import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { posts, topics } from './data';
import axios from "axios";

import './index.css'
import React, { useState } from 'react';
import ForumCard from './ForumCard';

export default function Forum() {

  const [forums, setForums] = useState([])

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/forum/')
      .then(res => setForums(res.data))
  }, [])

  return (
    <>
      <Container>
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
            <Card className='mb-4 bg-dark text-white'>
              <Card.Header>Recent posts</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Post 1</ListGroup.Item>
                <ListGroup.Item>Post 2</ListGroup.Item>
                <ListGroup.Item>Post 3</ListGroup.Item>
                <ListGroup.Item>Post 4</ListGroup.Item>
                <ListGroup.Item>Post 5</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mb-4 bg-dark text-white'>
              <Card.Header>Top posts</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Post 1</ListGroup.Item>
                <ListGroup.Item>Post 2</ListGroup.Item>
                <ListGroup.Item>Post 3</ListGroup.Item>
                <ListGroup.Item>Post 4</ListGroup.Item>
                <ListGroup.Item>Post 5</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}