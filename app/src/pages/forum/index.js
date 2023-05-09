import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { posts, topics } from './data'

export default function Forum() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card body className='mb-4 mt-4 bg-dark text-white'>
              <h4>Forums</h4>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            <Card className='mb-4 bg-dark text-white'>
              <Card.Header><h4>Topics</h4></Card.Header>
                <ListGroup variant="flush">
                  {topics.map((topic) => (
                    <ListGroup.Item>
                      <Link to={`/forum/${topic.id}`}>
                        {topic.title}
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
            </Card>
            {topics.map((topic) => (
              <Card className='mb-4 bg-dark text-white'>
                <Card.Header><h4>{topic.title}</h4></Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Post 1</ListGroup.Item>
                  <ListGroup.Item>Post 2</ListGroup.Item>
                  <ListGroup.Item>Post 3</ListGroup.Item>
                  <ListGroup.Item>Post 4</ListGroup.Item>
                </ListGroup>
              </Card>
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
              </ListGroup>
            </Card>
            <Card className='mb-4 bg-dark text-white'>
              <Card.Header>Top posts</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Post 1</ListGroup.Item>
                <ListGroup.Item>Post 2</ListGroup.Item>
                <ListGroup.Item>Post 3</ListGroup.Item>
                <ListGroup.Item>Post 4</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mb-4 bg-dark text-white'>
              <Card.Header>Recent topics</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Topic 1</ListGroup.Item>
                <ListGroup.Item>Topic 2</ListGroup.Item>
                <ListGroup.Item>Topic 3</ListGroup.Item>
                <ListGroup.Item>Topic 4</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}