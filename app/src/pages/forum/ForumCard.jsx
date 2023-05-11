import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ForumCard(props) {
  return (
    <>
      <Card className='mb-5 bg-dark text-white shadow'>
        <Card.Header>{props.title}</Card.Header>
          <ListGroup variant="flush">
            {/* {props.rows.map((row) => (
              <ListGroup.Item>{row}</ListGroup.Item>
            ))} */}
            {
              props.children.map((child) => (
                <ListGroup.Item>
                  {child}
                </ListGroup.Item>
              ))
            }
          </ListGroup>
      </Card>
    </>
  )
}