import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ForumCard(props) {
  return (
    <>
      <Card className='mb-5 bg-dark text-white shadow rounded-0'>
        <Card.Header>{props.title}</Card.Header>
          <ListGroup variant="flush" className='rounded-0'>
            { props.children.map &&
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