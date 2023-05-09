import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";

export default function Topic() {
  const { id } = useParams();

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card body className='mb-4 mt-4 bg-dark text-white'>
              <h4>{id}</h4>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className='mb-4 bg-dark text-white'>
              <Card.Header><h4>Posts</h4></Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Post 1</ListGroup.Item>
                <ListGroup.Item>Post 2</ListGroup.Item>
                <ListGroup.Item>Post 3</ListGroup.Item>
                <ListGroup.Item>Post 4</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}