import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ForumRegisterId() {
  const { id } = useParams();

  const onSubmit = () => {
    axios.post(`http://127.0.0.1:8000/forum/register/${id}/`)
      .then((res) => res.data);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            Press button below to verify your account:
            <Button variant="primary" type="submit" onClick={onSubmit}>
              Vertify account
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}